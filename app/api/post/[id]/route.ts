import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

<<<<<<< HEAD
export async function DELETE(request: NextRequest | Request, {params}: {params: Record<string, string | string[]>}){
    const id = params.id as string;
=======
export async function DELETE(request: NextRequest | Request, {params}: any){
    const id = params.id;
>>>>>>> tailwind
    
    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)
}