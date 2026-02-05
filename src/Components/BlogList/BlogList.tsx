import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { Data } from "../../Interfaces/data.interface";
import Blogs from "../Blogs/Blogs";
import FilterSection from "../FilterSection/FilterSection";

export default function BlogList({ data }: { data: Data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeCat = searchParams.get("category") || "جميع المقالات";
  const filteredBlog = data.posts.filter((blog) => {
    const matchedCat =
      activeCat === "جميع المقالات" || blog.category === activeCat;
    const matchedSearch = blog.title
      .toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase().trim());
    return matchedCat && matchedSearch;
  });

  const handleCatChange = (cat: string) => {
    if (cat === "جميع المقالات") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    setPage(1);
    window.scrollTo({ top: 570, behavior: "smooth" });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    window.scrollTo({ top: 570, behavior: "smooth" });
  };

  return (
    <>
      <FilterSection
        handleSearchChange={handleSearchChange}
        activeCat={activeCat}
        handleCatChange={handleCatChange}
        data={data}
        searchQuery={searchQuery}
      />
      <Blogs
        handleSearchChange={handleSearchChange}
        filteredBlog={filteredBlog}
        setPage={setPage}
        handleCatChange={handleCatChange}
        page={page}
        limit={6}
        blogsLength={data.posts.length}
      />
    </>
  );
}
