import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "@/shared/components/shared"
import { Button } from "../ui";

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    loading?: boolean;
    className?: string;
    onSubmit: VoidFunction;
}

/**
 * 
 * Product form component
 */
export const ChooseProductForm: React.FC<Props> = ({ name, price, imageUrl, loading, onSubmit, className }) => {


    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className='flex items-center justify-center flex-1 relative w-full'>
                <img
                    src={imageUrl}
                    alt={name}
                    className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
                />
            </div>

            <div className='w-[490px] bg-[#f7f6f5] p-2'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <Button
                    loading={loading}
                    onClick={() => onSubmit?.()}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
                >
                    Add to cart - ${price.toFixed(2)}
                </Button>
            </div>
        </div>
    )
}