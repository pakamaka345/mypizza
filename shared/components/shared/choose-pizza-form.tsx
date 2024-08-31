'use client';

import React from "react";
import { cn } from "@/shared/lib/utils";
import { GroupVariants, IngredientItem, PizzaImage, Title } from "@/shared/components/shared"
import { Button } from "../ui";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { getPizzaDetails } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    className?: string;
    onClickAddCart?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({ name, items, imageUrl, ingredients, onClickAddCart, className }) => {
    const { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient } = usePizzaOptions(items);
    const { totalPrice, textDetails } = getPizzaDetails(type, size, items, ingredients, selectedIngredients);

    const handleClickAdd = () => {
        onClickAddCart?.();
    };

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size} />

            <div className='w-[490px] bg-[#f7f6f5] p-2'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <p className='text-gray-400'>{textDetails}</p>

                <div className='flex flex-col gap-4 mt-5'>
                    <GroupVariants items={availableSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} />
                    <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)} />
                </div>

                <div className='bg-gray-50 p-5 rounded-md h-[300px] overflow-auto scrollbar mt-5'>
                    <div className='grid grid-cols-3 gap-3'>
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onClick={() => addIngredient(ingredient.id)}
                                active={selectedIngredients.has(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    onClick={handleClickAdd}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
                >
                    Add to cart - ${totalPrice}
                </Button>
            </div>
        </div >
    )
}