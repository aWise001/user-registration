import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
    const session = await getServerSession(options);
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <ul className="flex">
                <li className="mr-6"><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
                {session ? (
                    <li className="mr-6"><Link href="/api/auth/signout" className="text-white/80 hover:text-white">Sign Out</Link></li>
                    ) : (
                    <li className="mr-6"><Link href="/api/auth/signin" className="text-white/80 hover:text-white">Sign In</Link></li>
                )}
                <li className="mr-6"><Link href="/blog" className="text-white/80 hover:text-white">Blog</Link></li>
            </ul>
        </nav>
    );
}