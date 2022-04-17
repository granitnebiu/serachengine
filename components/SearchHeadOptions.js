import { useRouter } from "next/router";

export default function SearchHeadOptions({ title, Icon, selected }) {
  const router = useRouter();
  function selectTab(title) {
    router.push(
      `/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`
    );
  }
  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex cursor-pointer items-center space-x-2 border-b-4 border-transparent pb-3 hover:border-b-4 hover:border-blue-500 ${
        selected && "border-blue-500 text-blue-500"
      } `}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
