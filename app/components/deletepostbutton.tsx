'use client'
import { useRouter } from 'next/navigation'

interface Props {
    postId: string;
}
export default function DeletePostButton({ postId }: Props) {
    const router = useRouter();

    const handleClick = async () => {
        try {
        await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
        })
        router.refresh();
    } catch (error) {
        console.error(error);
    }
       
    };

  return (
    <button onClick={handleClick}>Delete post</button>
  );
}