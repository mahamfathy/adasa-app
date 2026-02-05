import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import type { Data } from "../../Interfaces/data.interface";
import formatDate from "../../Utils/formatDate";

export default function FeaturedListCard() {
  const data = useContext(dataContext) as Data;
  const featuredPosts = data.posts.filter((blog) => blog.featured);
  return (
    <>
      {
        <div className="flex flex-col gap-10">
          {featuredPosts.map((blog) => (
            <article
              key={blog.id}
              className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            >
              <NavLink className="block" to={`/blog/${blog.slug}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-72 md:h-100 overflow-hidden">
                    <img
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={blog.image}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span>مميز</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img
                          alt={blog.author?.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626]"
                          src={
                            blog.author?.avatar ||
                            "https://via.placeholder.com/100"
                          }
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {blog.author?.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {formatDate(blog.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </article>
          ))}
        </div>
      }
    </>
  );
}
