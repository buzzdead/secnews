import React from "react"
import ReactMarkdown from "react-markdown"
import prisma from '../../../lib/prisma'

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(id),
    },
    include: {
      author: {
        select: { name: true },
      },
      tags: {
        select: { name: true, id: true }
      },
    },
  })

  return post
};

const page = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id)
  let title = post?.title
  if (!post?.published) {
    title = `${title} (Draft)`
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 bg-gray-900 text-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">By {post?.author?.name || "Unknown author"}</p>
        <ReactMarkdown className="mt-4">
          {post?.content}
        </ReactMarkdown>
      </div>
      <div>
        {post?.tags && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-900 py-1 px-2 rounded-full text-sm shadow-lg shadow-gray-200/50"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default page
