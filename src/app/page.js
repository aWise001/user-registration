import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <h1> Hello, World! </h1>
      ) : (
        <h1>Please log in to view page</h1>
      )}
    </>
  );
}
