import { prisma } from "@/prisma/prisma-client";
import { OrderSuccessTemplate } from "@/shared/components";
import { SendEmail } from "@/shared/lib";
import { CartItemDTO } from "@/shared/services/dto/cart-dto";
import { OrderStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature") as string;

  let event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(session.metadata?.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const isSucceeded = session.payment_status === "paid";

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    const items = JSON.parse(order.items as string) as CartItemDTO[];

    if (isSucceeded) {
      await SendEmail(
        order.email,
        "MyPizza / Your order has been paid successfully",
        OrderSuccessTemplate({ orderId: order.id, items })
      );
    } else {
      // Send email about failed payment
    }
  }

  return NextResponse.json({ received: true });
}
