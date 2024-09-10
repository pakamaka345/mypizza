"use client";

import { useFormContext } from "react-hook-form";
import { ClearButton, ErrorText, RequiredSymbol, Textarea } from "../..";
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

export const FormTextarea: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const errorText = errors?.[name]?.message as string;

  const text = watch(name);

  const onClickClear = () => setValue(name, "");

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <RequiredSymbol />}
      </p>
      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />
        {Boolean(text) && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
