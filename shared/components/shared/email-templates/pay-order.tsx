import React from "react";
import { CreditCard } from "lucide-react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Order №{orderId}
        </h1>
        <p className="text-gray-600 mb-6">
          Please proceed to payment for your order in the amount of{" "}
          <span className="font-semibold">${totalAmount}</span>.
        </p>
        <a
          href={paymentUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <CreditCard className="mr-2" />
          Pay Now
        </a>
      </div>
      <div className="bg-gray-100 px-6 py-4">
        <p className="text-sm text-gray-600">
          If you have any questions, please contact our{" "}
          <a href="/support" className="text-blue-600 hover:underline">
            support team
          </a>
          .
        </p>
      </div>
    </div>
  );
};
