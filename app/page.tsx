import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {
  const user = await currentUser()
  const ele = user?.firstName
  console.log("First Name: ", ele)

  // const em = await <auth className="user"></auth>
  // if (!userId) {
  //   console.log("UNAUTH")

  // } else {
    // console.log("AUTHENTICATED")
  

  return (
    <div className="h-screen flex items-center justify-center text-3xl font-semibold">
      
  
      Hello {ele}
    </div>
  );
}
