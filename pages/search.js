import SearchHeader from "@/SearchHeader";
import SearchResults from "@/SearchResults";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import Response from "../Response";

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>
      {/* Search Header  */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

/* server side function */
export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
          process.env.CONTEXT_KEY
        }&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
