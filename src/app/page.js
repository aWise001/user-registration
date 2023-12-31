import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <h1> Hello, {session.user.name} </h1>
      ) : (
        <h1>Please log in to view page</h1>
      )}
    </>
  );
}
