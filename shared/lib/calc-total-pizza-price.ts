import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";


/**
 * Calculate total price of pizza
 * @param type - type of dough
 * @param size - size of pizza
 * @param items - list of variants of pizza
 * @param ingredients - list of ingredients
 * @param selectedIngredients - list of selected ingredients
 * @returns total price of pizza
 */
export const calcTotalPizzaPrice = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>,
) => {
    const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price;
    const totalIngredientsPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);

    return (totalIngredientsPrice + (pizzaPrice || 0)).toFixed(2);
}