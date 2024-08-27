import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany();

    const filteredPoducts = query
        ?
        products.filter(product => product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())).slice(0, 5)
        :
        products.slice(0, 5);

    return NextResponse.json(filteredPoducts);
};