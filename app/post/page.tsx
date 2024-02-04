import React from "react"
import ReactMarkdown from "react-markdown"
import { PostProps } from "../components/post"
import prisma from '../../lib/prisma'

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  return post
  
};

const Post: React.FC<PostProps> = async () => {
  const post = await getPost("cls5tibwp0001g2xj103tnfd2")
  console.log(post)
  let title = post?.title
  if (!post?.published) {
    title = `${title} (Draft)`
  }

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>By {post?.author?.name || "Unknown author"}</p>
        <ReactMarkdown>
          {post?.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Post