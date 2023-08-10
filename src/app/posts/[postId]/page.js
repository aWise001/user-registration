import { getSortedPostsData } from "../../../../lib/sortPostData";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
    const posts = getSortedPostsData();
    const { postId } = params;
    const post = posts.find(post => post.id === postId)
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post.title,
    }
}

export default async function Post({ params }) {
    const posts = getSortedPostsData();
    const { postId } = params;
    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }
    return (
        <div>

        </div>
    );
}