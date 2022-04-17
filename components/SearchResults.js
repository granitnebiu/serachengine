import React from "react";

export default function SearchResults({ results }) {
  return (
    <div className="container mx-auto w-full px-8 lg:px-0">
      <p className="mb-5 mt-3 text-sm text-gray-600">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
}
