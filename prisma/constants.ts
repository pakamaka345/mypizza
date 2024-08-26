export const categories = [
    { name: 'Pizzas', },
    { name: 'Breakfast', },
    { name: 'Snacks', },
    { name: 'Cocktails', },
    { name: 'Drinks', },
];

export const ingredients = [
    {
        name: 'Cheese Crust',
        price: 4.91,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
        name: 'Creamy Mozzarella',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
        name: 'Cheddar and Parmesan Cheese',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
        name: 'Spicy Jalapeño',
        price: 1.62,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
        name: 'Tender Chicken',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
        name: 'Champignons',
        price: 1.62,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
        name: 'Ham',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    },
    {
        name: 'Spicy Pepperoni',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
        name: 'Spicy Chorizo',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
        name: 'Pickled Cucumbers',
        price: 1.62,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
        name: 'Fresh Tomatoes',
        price: 1.62,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
        name: 'Red Onion',
        price: 1.62,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
        name: 'Juicy Pineapples',
        price: 1.62,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
        name: 'Italian Herbs',
        price: 1.07,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
        name: 'Sweet Pepper',
        price: 1.62,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
        name: 'Feta Cheese Cubes',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
        name: 'Meatballs',
        price: 2.16,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
    {
        name: 'Omelette with Ham and Mushrooms',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
        categoryId: 2,
    },
    {
        name: 'Omelette with Pepperoni',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
        categoryId: 2,
    },
    {
        name: 'Coffee Latte',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
        categoryId: 2,
    },
    {
        name: 'Denwich Ham and Cheese',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
        categoryId: 3,
    },
    {
        name: 'Chicken Nuggets',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
        categoryId: 3,
    },
    {
        name: 'Baked Potatoes with Sauce 🌱',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
        categoryId: 3,
    },
    {
        name: 'Dodster',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
        categoryId: 3,
    },
    {
        name: 'Spicy Dodster 🌶️🌶️',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
        categoryId: 3,
    },
    {
        name: 'Banana Milkshake',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
        categoryId: 4,
    },
    {
        name: 'Caramel Apple Milkshake',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
        categoryId: 4,
    },
    {
        name: 'Milkshake with Oreo Cookies',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
        categoryId: 4,
    },
    {
        name: 'Classic Milkshake 👶',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
        categoryId: 4,
    },
    {
        name: 'Irish Cappuccino',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
        categoryId: 5,
    },
    {
        name: 'Caramel Cappuccino',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
        categoryId: 5,
    },
    {
        name: 'Coconut Latte',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
        categoryId: 5,
    },
    {
        name: 'Americano Coffee',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
        categoryId: 5,
    },
    {
        name: 'Coffee Latte',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
        categoryId: 5,
    },
];