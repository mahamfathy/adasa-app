import { useState } from "react";
import type { Data } from "../../Interfaces/data.interface";
import BlogCard from "../BlogCard/BlogCard";
import FilterSection from "../FilterSection/FilterSection";

export default function BlogList({ data }: { data: Data }) {
  const [activeCat, setActiveCat] = useState<string>("جميع المقالات");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredBlog = data.posts.filter((blog) => {
    const matchedCat =
      activeCat === "جميع المقالات" || blog.category === activeCat;
    const matchedSearch = blog.title
      .toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase().trim());
    return matchedCat && matchedSearch;
  });
  return (
    <>
      <FilterSection
        setSearchQuery={setSearchQuery}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
        data={data}
        searchQuery={searchQuery}
      />
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-orange-500 ">
                {filteredBlog.length}
              </span>{" "}
              {filteredBlog.length >= 3 && filteredBlog.length <= 10
                ? "مقالات"
                : "مقال"}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  className="p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                  title="عرض شبكي"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
                  title="عرض قائمة"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <button className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                مسح الفلاتر
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlog.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
          {filteredBlog.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                لا توجد مقالات
              </h3>
              <p className="text-neutral-400 mb-6">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCat("جميع المقالات");
                }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                إعادة تعيين الفلاتر
              </button>
            </div>
          )}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              disabled
              className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex items-center gap-1">
              <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white">
                1
              </button>
              <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white">
                2
              </button>
            </div>
            <button className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]">
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <p className="text-center text-neutral-500 mt-4 text-sm">
            صفحة 1 من 2
          </p>
        </div>
      </section>
    </>
  );
}
