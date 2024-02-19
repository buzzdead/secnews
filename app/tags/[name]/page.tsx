"use client"
import TagPage from "@/app/components/tagpage";
import prisma from "../../../lib/prisma";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true, },
    include: {
      tags: {
        select: { name: true, id: true }
      },
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
};

const Tag = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  return <TagPage posts={data!}/>;
};

export default Tag;
