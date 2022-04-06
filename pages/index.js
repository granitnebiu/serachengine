import Header from "@/Header";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "@/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) {
      return;
    }
    router.push(`/search?term=${term.trim()}`);
  }

  return (
    <div className="h-full w-full">
      <Head>
        <title>Search something</title>
      </Head>

      {/* Header  */}
      <Header />
      {/* Body  */}
      <form className="flex flex-col items-center justify-center  py-64">
        <Image
          width="300"
          objectFit="cover"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png"
        />
        <div className="mx-auto mt-5 flex w-full max-w-[90%] items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
            placeholder="search something"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I am feeling Lucky</button>
        </div>
      </form>
      {/* Footer  */}
      <Footer />
    </div>
  );
}
