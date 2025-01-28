import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

// import Link from 'next/link'

import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

const DashboardPage = async () => {
  const user = await currentUser();

  if (!user) redirect("/");

  const firstName = user?.firstName;
  return (
    <>
      <div className="flex justify-end  mt-10 mr-10">
        <SignOutButton redirectUrl="/">
          <Button>
            Sign Out
            {/* <Link href= "/sign-out"> */}
            {/* </Link>   */}
          </Button>
        </SignOutButton>
      </div>
      <div className="flex flex-col gap-24 text-center text-2xl font-semibold">
        Dashboard
        <div className="text-xl font-medium">
          Hello {firstName} you are presently signed in
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
