"use client";
import { useQuery } from "@tanstack/react-query";
import prisma from "../../lib/prisma";
import Post from "../components/post";

type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
  } | null;
  content: string;
  published: boolean;
  editMode?: boolean;
  tags?: any[]
};

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
};

const Posts = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return (
    <div>
      <header className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">
            How to Clean Your Charging Port in 5 Easy Steps
          </h1>
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="#"
          >
            View Post
          </a>
        </div>
      </header>
      <main className="container mx-auto px-20 py-8">
        <h2 className="text-3xl font-bold mb-6">Nyheter</h2>
        <div className="grid grid-cols-3 gap-6">
          {data?.map((post, id) => (
            <Post key={id} post={post as PostProps} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts