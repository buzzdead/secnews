import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request: NextRequest | Request, {params}: {params: Record<string, string | string[]>}){
    const id = params.id as string;
    
    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)
}