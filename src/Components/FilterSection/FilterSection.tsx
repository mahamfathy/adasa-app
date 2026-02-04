import { useState } from "react";
import type { Category, Data } from "../../Interfaces/data.interface";

export default function FilterSection({ data }: { data: Data }) {
  const [activeCat, setActiveCat] = useState("جميع المقالات");
  console.log(data);
  return (
    <>
      <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
              <input
                placeholder="ابحث في المقالات..."
                className="bg-[#161616] rounded-2xl w-full px-5 py-3 pr-12 focus:border-orange-500 outline-none focus:outline-none focus:ring-1 focus:ring-orange-500"
                type="text"
                onInput={(e) => console.log(e.currentTarget.value)}
                defaultValue=""
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "جميع المقالات",
                ...data.categories.map((category: Category) => category.name),
              ].map((catName) => (
                <button
                  type="button"
                  key={catName}
                  onClick={() => setActiveCat(catName)}
                  className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border
  ${
    activeCat === catName
      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-orange-500 shadow-lg shadow-orange-500/20"
      : "bg-[#161616] text-neutral-400 border-[#262626] hover:text-white hover:border-orange-500/50"
  }`}
                >
                  {catName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
