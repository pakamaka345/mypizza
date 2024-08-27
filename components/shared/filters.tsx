'use client';

import React from "react";
import { Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup } from ".";
import { Input } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filter: React.FC<Props> = ({ className }) => {
    const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
    const [prices, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 100 });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,
        });
    }

    return (
        <div className={className}>
            <Title text='Filter' size='sm' className='mb-5 font-bold' />

            {/* Filter checkboxes top */}
            <div className='flex flex-col gap-4'>
                <FilterCheckbox name='qwe' text='Assemble a Pizza' value='1' />
                <FilterCheckbox name='dsgfsdg' text='Newest' value='2' />
            </div>

            {/* Filter price range */}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price from and to</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={100} value={String(prices.priceFrom)} onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
                    <Input type='number' placeholder='100' min={10} max={100} value={String(prices.priceTo)} onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
                </div>

                <RangeSlider min={0} max={100} step={1} value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
                />
            </div>

            <CheckboxFiltersGroup
                title='Ingredients'
                name='ingredients'
                className='mt-5'
                limit={6}
                defaultItems={ingredients.slice(0, 6)}
                items={ingredients}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
            />

        </div>
    );
}