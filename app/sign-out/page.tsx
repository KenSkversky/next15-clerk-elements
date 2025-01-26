import { SignOutButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <SignOutButton>
      <button>Custom sign out button</button>
    </SignOutButton>
  )
}