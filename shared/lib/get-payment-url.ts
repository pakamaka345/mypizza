import Stripe from "stripe";
import { CartItemDTO } from "../services/dto/cart-dto";
import { Ingredient } from "@prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

const calcPrice = (price: number, ingredients: Ingredient[]) => {
  return Math.round(
    ingredients.reduce((acc, curr) => acc + curr.price, price) * 100
  );
};

export const GetPaymentUrl = async (
  items: CartItemDTO[],
  orderId: number,
  totalAmount: number
) => {
  try {
    const lineItems = items
      .map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productItem.product.name,
            ...(item.ingredients.length > 0
              ? { description: item.ingredients.map((i) => i.name).join(", ") }
              : {}),
          },
          unit_amount: calcPrice(item.productItem.price, item.ingredients),
        },
        quantity: item.quantity,
      }))
      .concat([
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "VAT",
              description: "VAT fee",
            },
            unit_amount: Math.round(totalAmount * 10.75),
          },
          quantity: 1,
        },
      ])
      .concat([
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "delivery",
              description: "delivery fee",
            },
            unit_amount: 399,
          },
          quantity: 1,
        },
      ]);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "paypal"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?paid`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: {
        order_id: orderId.toString(),
      },
    });

    return session;
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return null;
  }
};
