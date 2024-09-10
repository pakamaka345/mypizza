import { CartItemDTO } from "@/shared/services/dto/cart-dto";
import React from "react";

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Thank you for buying 🎉</h1>

    <p>Your order #{orderId} has been paid. Product list:</p>

    <hr />

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price.toFixed(2)}{" "}
          $ x {item.quantity} qnt. ={" "}
          {Number(item.productItem.price.toFixed(2)) * item.quantity} $
        </li>
      ))}
    </ul>
  </div>
);
