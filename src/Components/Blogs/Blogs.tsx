import { useContext, useState } from "react";
import { dataContext } from "../../context/dataContext";
import type { Data, Post } from "../../Interfaces/data.interface";
import BlogCard from "../BlogCard/BlogCard";
import Pagination from "../Pagination/Pagination";
interface BlogProps {
  filteredBlog: Post[];
  handleSearchChange: (query: string) => void;
  handleCatChange: (cat: string) => void;
  setPage: (num: number) => void;
  page: number;
  limit: number;
}
export default function Blogs({
  filteredBlog,
  handleSearchChange,
  handleCatChange,
  page,
  setPage,
  limit = 6,
}: BlogProps) {
  const data = useContext(dataContext) as Data;
  const blogsLength = data.posts.length;
  const [viewMode, setViewMode] = useState<"grid" | "flex">("grid");
  const totalPages = Math.ceil(filteredBlog.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentBlogs = filteredBlog.slice(startIndex, endIndex);
  return (
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
                onClick={() => setViewMode("grid")}
                className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
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
                onClick={() => setViewMode("flex")}
                className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "flex"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
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
            {filteredBlog.length !== blogsLength && (
              <button
                onClick={() => {
                  handleCatChange("جميع المقالات");
                  handleSearchChange("");
                }}
                className={` cursor-pointer text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors`}
              >
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
            )}
          </div>
        </div>
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          }
        >
          {currentBlogs.map((blog) => (
            <BlogCard viewMode={viewMode} blog={blog} key={blog.id} />
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
                handleCatChange("جميع المقالات");
                handleSearchChange("");
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
        {totalPages > 0 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </div>
    </section>
  );
}
