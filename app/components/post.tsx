"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import DeletePostButton from "./deletepostbutton";
import Image from "next/image";
import Link from "next/link";

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

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";

  return (
    <Link
      href={"/post/" + post.id}
      className="bg-gray-800 p-4 rounded-lg flex flex-col items-center max-h-[500px] overflow-hidden hover:bg-opacity-50"
    >
      <div className="mb-4 flex justify-center items-center">
        <Image
          style={{ all: "initial", objectFit: "cover", overflow: "hidden", cursor: 'pointer'}}
          src="/clean-port (1).png"
          alt="Vercel Logo"
          height={250}
          width={300}
        />
      </div>
      <div>
  
        <h3 className="text-3xl font-bold mb-4 text-gray-300">{post.title}</h3>
        <small>By {authorName}</small>
        <ReactMarkdown className="text-gray-400 overflow-ellipsis overflow-hidden max-h-24">
          {post.content}
        </ReactMarkdown>
        {post.editMode && <DeletePostButton postId={post.id} />}
      </div>
    </Link>
  );
};

export default Post;
