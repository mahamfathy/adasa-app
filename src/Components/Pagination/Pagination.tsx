import { useEffect } from "react";

interface PaginationProps {
  totalPages: number;
  page: number;
  setPage: (num: number) => void;
}
export default function Pagination({
  page,
  setPage,
  totalPages,
}: PaginationProps) {
  useEffect(() => {
    window.scrollTo({
      top: 560,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`p-3 rounded-xl border transition-all duration-300 ${
            page === 1
              ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "cursor-pointer bg-[#161616] border-[#262626] text-white hover:border-orange-500/50"
          }`}
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
          {Array.from({ length: Math.ceil(totalPages) }, (_, index: number) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`cursor-pointer min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 border ${
                page === index + 1
                  ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-orange-500"
                  : "bg-[#161616] text-neutral-400 border-[#262626] hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className={`p-3 rounded-xl border transition-all duration-300 ${
            page >= totalPages
              ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "cursor-pointer bg-[#161616] border-[#262626] text-white hover:border-orange-500/50"
          }`}
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <p className="text-center text-neutral-500 mt-4 text-sm">
        {`صفحة ${page} من ${Math.ceil(totalPages)}`}
      </p>
    </>
  );
}
