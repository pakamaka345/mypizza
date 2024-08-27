import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

type IngredientItem = {
    value: string;
    text: string;
}

interface ReturnProps {
    ingredients: IngredientItem[];
    loading: boolean;
    selectedIds: Set<string>;
    onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<ReturnProps['ingredients']>([]);
    const [loading, setLoading] = React.useState(true);

    const [selectedIds, { toggle }] = useSet(new Set<string>([]));

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(
                    ingredients.map(ingredient => ({ value: String(ingredient.id), text: ingredient.name }))
                );
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients();
    }, []);

    return { ingredients, loading, onAddId: toggle, selectedIds };
}