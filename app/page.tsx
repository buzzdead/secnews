import Link from 'next/link';
import prisma from '../lib/prisma'
import Post from "./components/post";
import { PostProps } from "./components/post";
import styles from './page.module.css';
import Image from 'next/image';

export const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts
};


const page = async () => {
  const feed = await getPosts();
  return (
    <main className={styles.main}>
      <Image style={{all: 'initial'}} src="/clean-port (1).png" alt="Vercel Logo" height={400} width={1200}  className={styles.logo} />
      <h1>Nyheter innen sikkerhet</h1>
      <div className={styles.cards}>
      {feed.map((post, id) => <Post key={id} post={post as PostProps} />)}
      </div>
    </main>
  );
}

export default page;