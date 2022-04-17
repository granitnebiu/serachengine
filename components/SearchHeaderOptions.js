import { useRouter } from "next/router";
import SearchHeadOptions from "@/SearchHeadOptions";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex w-full select-none justify-center space-x-8 border-b pl-0 text-sm text-gray-700 lg:justify-start lg:pl-52 ">
      <SearchHeadOptions
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeadOptions
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
