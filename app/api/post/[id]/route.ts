import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { NextApiRequest } from "next/types";

export async function DELETE(request: NextApiRequest, {params}: any){
    const id = params.id;
    
    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)
}