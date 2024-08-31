import { Ingredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from ".";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>,
) => {
    const textDetails = `${size} cm, ${mapPizzaType[type]} pizza`;
    const totalPrice = calcTotalPizzaPrice(
        type,
        size,
        items,
        ingredients,
        selectedIngredients,
    );

    return { totalPrice, textDetails };
};