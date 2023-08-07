import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
    const session = await getServerSession(options);
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                {session ? (
                    <li><Link href="/api/auth/signout">Sign Out</Link></li>
                    ) : (
                    <li><Link href="/api/auth/signin">Sign In</Link></li>
                )}
                <li><Link href="/posts">Posts</Link></li>
            </ul>
        </nav>
    );
}