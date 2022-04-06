import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import { route } from "next/dist/server/router";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}`);
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          onClick={() => router.push("/")}
          width="120"
          objectFit="container"
          height="40"
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png"
        />
        <form className="ml-10 mr-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg">
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 cursor-pointer text-gray-500 sm:mr-3 "
          />
          <MicrophoneIcon className="mr-3 hidden h-6 border-l-2 border-gray-300 pl-4 text-blue-500 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex " />
          <button type="submit" className="" hidden onClick={search}></button>
        </form>
        <User customClass="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
}
