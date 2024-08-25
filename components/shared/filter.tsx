import React from "react";
import { Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup } from ".";
import { Input } from "../ui";

interface Props {
    className?: string;
}

export const Filter: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text='Filter' size='sm' className='mb-5 font-bold' />

            {/* Filter checkboxes top */}
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Assemble a Pizza' value='1' />
                <FilterCheckbox text='Newest' value='2' />
            </div>

            {/* Filter price range */}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price from and to</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={500} defaultValue={0} />
                    <Input type='number' placeholder='500' min={100} max={500}  />
                </div>

                <RangeSlider min={0} max={500} step={10} value={[0, 500]} />
            </div>

            <CheckboxFiltersGroup 
                title='Ingredients'
                className='mt-5'
                limit={6}
                defaultItems={[
                    { text: 'Mushrooms', value: '1'},
                    { text: 'Tomato', value: '2'},
                    { text: 'Cheese', value: '3'},
                    { text: 'Pepperoni', value: '4'},
                    { text: 'Bacon', value: '5'},
                    { text: 'Olives', value: '6'},
                ]}
                items={[
                    { text: 'Mushrooms', value: '1'},
                    { text: 'Tomato', value: '2'},
                    { text: 'Cheese', value: '3'},
                    { text: 'Pepperoni', value: '4'},
                    { text: 'Bacon', value: '5'},
                    { text: 'Olives', value: '6'},
                    { text: 'Mushrooms', value: '7'},
                    { text: 'Tomato', value: '8'},
                    { text: 'Cheese', value: '9'},
                    { text: 'Pepperoni', value: '10'},
                    { text: 'Bacon', value: '11'},
                    { text: 'Olives', value: '12'},
                ]}
            />

        </div>
    );
}