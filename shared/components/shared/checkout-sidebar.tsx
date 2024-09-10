import React from "react";
import { CheckoutItemDetails, WhiteBlock } from ".";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "../ui";

interface Props {
  loading?: boolean;
  totalAmount: number;
  className?: string;
}

const VAT = 10.75;
const DELIVERY_PRICE = 3.99;

export const CheckoutSidebar: React.FC<Props> = ({
  loading,
  totalAmount,
  className,
}) => {
  const vatPrice = ((totalAmount * VAT) / 100).toFixed(2);
  const totalPrice = (totalAmount + Number(vatPrice) + DELIVERY_PRICE).toFixed(
    2
  );

  return (
    <div className={className}>
      <WhiteBlock className="p-6 sticky top-4">
        <div className="flex flex-col gap-1">
          <span className="text-xl">Total:</span>
          {loading ? (
            <Skeleton className="w-48 h-11" />
          ) : (
            <span className=" h-11 text-[34px] font-extrabold">
              {totalPrice} $
            </span>
          )}
        </div>

        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Package size={18} className="mr-2 text-gray-300" />
              Cart total:
            </div>
          }
          value={
            loading ? (
              <Skeleton className="h-6 w-16 rounded-[6px]" />
            ) : (
              `${totalAmount.toFixed(2)}$`
            )
          }
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Percent size={18} className="mr-2 text-gray-300" />
              Taxes:
            </div>
          }
          value={
            loading ? (
              <Skeleton className="h-6 w-16 rounded-[6px]" />
            ) : (
              `${vatPrice}$`
            )
          }
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Truck size={18} className="mr-2 text-gray-300" />
              Delivery:
            </div>
          }
          value={
            loading ? (
              <Skeleton className="h-6 w-16 rounded-[6px]" />
            ) : (
              `${DELIVERY_PRICE}$`
            )
          }
        />

        <Button
          loading={loading}
          type="submit"
          className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
        >
          Go to payment
          <ArrowRight className="w-5 ml-2" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
