import { FormInput, WhiteBlock } from "..";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock className={className} title="2. Personal information">
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Name" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Surname"
        />
        <FormInput name="email" className="text-base" placeholder="Email" />
        <FormInput name="phone" className="text-base" placeholder="Phone" />
      </div>
    </WhiteBlock>
  );
};
