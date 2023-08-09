import { getSortedPostsData } from "../../../lib/sortPostData";
import ListItem from "./listItem";

export default function Posts() {
    const posts = getSortedPostsData();
    return (
        <section>
            <h2>Blog</h2>
            <ul>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    );
}