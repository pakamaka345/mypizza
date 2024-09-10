"use client";

import { FormTextarea, WhiteBlock, AddressInput } from "..";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock className={className} title="3. Delivery address">
      <div className="flex flex-col gap-5">
        <AddressInput
          name="address"
          className="text-base"
          placeholder="Delivery address"
        />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Add some details"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
