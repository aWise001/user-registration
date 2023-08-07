import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
    const session = await getServerSession(options);
    return (
        <nav class="">
            <ul class="flex">
                <li class="mr-6"><Link href="/" class="text-blue-500 hover:text-blue-800">Home</Link></li>
                {session ? (
                    <li class="mr-6"><Link href="/api/auth/signout" class="text-blue-500 hover:text-blue-800">Sign Out</Link></li>
                    ) : (
                    <li class="mr-6"><Link href="/api/auth/signin" class="text-blue-500 hover:text-blue-800">Sign In</Link></li>
                )}
                <li class="mr-6"><Link href="/posts" class="text-blue-500 hover:text-blue-800">Posts</Link></li>
            </ul>
        </nav>
    );
}