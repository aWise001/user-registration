import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

function AddPosts(session) {
    if(!session) {
        return null;
    }
    return (
        <button>Add Posts</button>
    )
}

export default async function Posts() {
    const session = await getServerSession(options);
    return (
        <div>
            {AddPosts(session)}
            <h1>Welcome to the posts page!</h1>
        </div>
    );
}