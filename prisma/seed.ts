import { Prisma } from "@prisma/client";
import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
    return (Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generatePizza = ({
    productId, pizzaType, size,
}: {
    productId: number; pizzaType?: 1 | 2; size?: 20 | 30 | 40;
}) => {
    return { productId, price: randomDecimalNumber(5, 20), pizzaType, size, } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test.com',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@test.com',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    });

    await prisma.category.createMany({
        data: categories
    });

    await prisma.ingredient.createMany({
        data: ingredients
    });

    await prisma.product.createMany({
        data: products
    });

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Pepperoni',
            imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/salyami-1-300x300.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            },
        },
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Four Cheese',
            imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/4-syry-300x300.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10),
            },
        },
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Capricciosa',
            imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/kaprichoza-1-300x300.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 40),
            },
        },
    });

    await prisma.productItem.createMany({
        data: [
            generatePizza({ productId: pizza1.id, pizzaType: 1, size: 20 }),
            generatePizza({ productId: pizza1.id, pizzaType: 1, size: 30 }),
            generatePizza({ productId: pizza1.id, pizzaType: 2, size: 40 }),

            generatePizza({ productId: pizza2.id, pizzaType: 1, size: 20 }),
            generatePizza({ productId: pizza2.id, pizzaType: 1, size: 30 }),
            generatePizza({ productId: pizza2.id, pizzaType: 1, size: 40 }),
            generatePizza({ productId: pizza2.id, pizzaType: 2, size: 20 }),
            generatePizza({ productId: pizza2.id, pizzaType: 2, size: 30 }),
            generatePizza({ productId: pizza2.id, pizzaType: 2, size: 40 }),

            generatePizza({ productId: pizza3.id, pizzaType: 1, size: 20 }),
            generatePizza({ productId: pizza3.id, pizzaType: 1, size: 30 }),
            generatePizza({ productId: pizza3.id, pizzaType: 2, size: 40 }),
        ],
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});

