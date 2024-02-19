import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request: NextRequest | Request, {params}: any){
    const id = params.id;
    
    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)
}