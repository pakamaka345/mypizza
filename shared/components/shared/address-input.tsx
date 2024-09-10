"use client";

import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
import { RequiredSymbol } from "./required-symbol";
import { Input } from "../ui";
import { ClearButton } from "./clear-button";
import { ErrorText } from "..";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const AddressInput: React.FC<Props> = ({
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

  const value = watch(name);
  const errorText = errors[name]?.message as string;
  const onClickClear = () => setValue(name, "", { shouldValidate: true });

  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

  const onPlaceChanged = () => {
    const places = searchBoxRef.current?.getPlaces();
    if (places && places.length > 0) {
      setValue(name, places[0].formatted_address, { shouldValidate: true });
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={onPlaceChanged}
        >
          <Input className="h-12 text-md" {...register(name)} {...props} />
        </StandaloneSearchBox>

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
