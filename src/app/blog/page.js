import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Posts from '../components/posts';

function AddPosts(session) {
    if(!session) {
        return null;
    }
    return (
        <div>
            <button>Add Post</button>
            <textarea id="editor">
            </textarea>
        </div>
    );
}

export default async function Blog() {
    const session = await getServerSession(options);
    return (
        <div>
            {AddPosts(session)}
            <h1>Welcome to the posts page!</h1>
            <Posts />
        </div>
    );
}