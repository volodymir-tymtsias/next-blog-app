import { authConfig } from "@/configs/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "Profile | Next App",
};

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <img src={session.user.image} alt={`image ${session.user.name}`} />
      )}
    </div>
  );
}
