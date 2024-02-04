import React from "react"
import ReactMarkdown from "react-markdown"
import prisma from '../../lib/prisma'

type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
  } | null;
  content: string;
  published: boolean;
  editMode?: boolean;
};

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

const page: React.FC<PostProps> = async () => {
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

export default page