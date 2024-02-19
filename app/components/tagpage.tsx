"use client";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Post from "./post";

interface Props {
  posts: any[];
}

const TagPage = ({ posts }: Props) => {
  const router = useParams();
  const { name } = router;

  const postsInTag = useMemo(() => {
    if(!posts || posts.length === 0) return
    if (typeof name === "string") {
      return posts.filter((p) => name === "home" || p?.tags[0].name === name);
    }
    return [];
  }, [name, posts]);

  return (
    <main className="container mx-auto px-20 py-8">
      <h2 className="text-3xl font-bold mb-6">Nyheter</h2>
      <div className="grid grid-cols-3 gap-6">
        {postsInTag?.map((p, id) => (
          <Post key={id} post={p} />
        ))}
      </div>
    </main>
  );
};

export default TagPage;
