import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
    const session = await getServerSession(options);
    return (
        <nav class="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <ul class="flex">
                <li class="mr-6"><Link href="/" class="text-white/80 hover:text-white">Home</Link></li>
                {session ? (
                    <li class="mr-6"><Link href="/api/auth/signout" class="text-white/80 hover:text-white">Sign Out</Link></li>
                    ) : (
                    <li class="mr-6"><Link href="/api/auth/signin" class="text-white/80 hover:text-white">Sign In</Link></li>
                )}
                <li class="mr-6"><Link href="/posts" class="text-white/80 hover:text-white">Posts</Link></li>
            </ul>
        </nav>
    );
}