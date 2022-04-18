import React from "react";
import User from "@/User";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex items-center space-x-4">
        <Link href="https://about.google/">
          <a className="link">About</a>
        </Link>
        <Link href="https://store.google.com/">
          <a className="link">Store</a>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="https://mail.google.com/">
          <a className="link">Gmail</a>
        </Link>
        <Link href="">
          <a
            onClick={() =>
              router.push(`/search?term=${router.query.term || "granit nebiu"}&searchType=image`)
            }
            className="link"
          >
            Images
          </a>
        </Link>

        <User />
      </div>
    </header>
  );
}
