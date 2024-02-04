import React from "react";
import ReactMarkdown from "react-markdown";
import DeletePostButton from "./deletepostbutton";
import styles from "../page.module.css";
import Image from "next/image";

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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Image
        style={{ all: "initial", objectFit: "cover", overflow: "hidden" }}
        src="/clean-port (1).png"
        alt="Vercel Logo"
        height={250}
        width={250}
      />
      <div className={styles.card}>
        <h2>{post.title}</h2>
        <small>By {authorName}</small>
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
        {post.editMode && <DeletePostButton postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
