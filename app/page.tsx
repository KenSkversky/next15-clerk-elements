import { auth } from "@clerk/nextjs/server";

import Link from "next/link";

import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

const HomePage = async () => {
  // Check for User
  const { userId } = await auth();

  if (userId) redirect("/dashboard");

  return (
    <>
      <div className="flex justify-end  mt-10 mr-10 gap-2">
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>

        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-24 text-center text-2xl font-semibold">
        Home
        <div className="text-xl font-medium"></div>
      </div>
    </>
  );
};

export default HomePage;
