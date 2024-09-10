"use server";

import { prisma } from "@/prisma/prisma-client";
import {
  PayOrderTemplate,
  VerificationUserTemplate,
} from "@/shared/components";
import { CheckoutFormValues } from "@/shared/constants";
import { GetPaymentUrl, SendEmail } from "@/shared/lib";
import { getUserSession } from "@/shared/lib/get-user-session";
import { OrderStatus, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error("Cart not found");
    }

    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    const session = await GetPaymentUrl(
      userCart.items,
      order.id,
      userCart.totalAmount
    );
    if (!session) {
      throw new Error("Payment session not created");
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: session.id,
      },
    });

    await SendEmail(
      data.email,
      "MyPizza / Pay your order #" + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: Number(
          (
            order.totalAmount +
            (order.totalAmount * 10.75) / 100 +
            3.99
          ).toFixed(2)
        ),
        paymentUrl: session.url!,
      })
    );

    return session.url;
  } catch (error) {
    console.error(`[createOrder]: ${error}`);
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("User not found");
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password
          ? hashSync(body.password as string, 10)
          : findUser?.password,
      },
    });
  } catch (err) {
    console.error(`[UPDADTE_USER]: ${err}`);
    throw err;
  }
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error("Email already registered. Please verify your email");
      }

      throw new Error("Email already registered");
    }

    const createUser = await prisma.user.create({
      data: {
        email: body.email,
        fullName: body.fullName,
        password: hashSync(body.password as string, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createUser.id,
      },
    });

    await SendEmail(
      createUser.email,
      "MyPizza / Verify your email",
      VerificationUserTemplate({ code })
    );
  } catch (error) {
    console.log("Error [CREATE_USER]", error);
    throw error;
  }
}
