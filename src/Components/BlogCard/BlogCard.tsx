import { Link } from "react-router-dom";
import type { Post } from "../../Interfaces/data.interface";
import formatDate from "../../Utils/formatDate";

export default function BlogCard({
  blog,
  viewMode = "grid",
}: {
  blog: Post;
  viewMode?: "grid" | "flex";
}) {
  const isList = viewMode === "flex";

  return (
    <article
      className={`group transition-all duration-500 rounded-3xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 hover:-translate-y-1 
      ${isList ? "flex flex-col md:flex-row w-full" : "flex flex-col"}`}
    >
      <Link
        className={`${isList ? "flex flex-col md:flex-row w-full" : "block w-full"}`}
        to={`/blog/${blog.slug}`}
      >
        <div
          className={`relative overflow-hidden shrink-0 ${isList ? "h-64 md:h-auto md:w-80" : "h-52"}`}
        >
          <img
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={blog.image}
          />
        </div>

        <div className="p-6 flex flex-col justify-between grow">
          <div>
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
              <span>{blog.readTime}</span>
              <span className="w-1 h-1 bg-neutral-600 rounded-full" />
              <span>{formatDate(blog.date)}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-neutral-400 mb-5 line-clamp-2 text-sm">
              {blog.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img
                alt={blog.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                src={blog.author.avatar}
              />
              <div>
                <p className="text-sm font-medium text-white">
                  {blog.author.name}
                </p>
                <p className="text-xs text-neutral-500">{blog.author.role}</p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/20 group-hover:border-transparent">
              <svg
                className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
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
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
