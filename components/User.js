import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ customClass }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="user-image"
          className={`h-10 w-10 cursor-pointer rounded-full p-1 hover:bg-gray-200 ${customClass}`}
        />
      </>
    );
  }
  return (
    <>
      <button
        className={`hover:bg-brightness-105 rounded-md bg-blue-500 px-6 py-2 font-medium text-white hover:shadow-md ${customClass}`}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
}
