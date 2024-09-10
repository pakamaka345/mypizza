import { prisma } from "@/prisma/prisma-client";
import { authOptions } from "@/shared/constants/auth-options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: any, res: any) {
  try {
    const User = await getServerSession(req, res, authOptions);

    if (!User) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(User.user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "[USER_GET] Server error" },
      { status: 500 }
    );
  }
}
