import { Link } from "react-router-dom";
import type { Data, Post } from "../../Interfaces/data.interface";
import SectionLabel from "../SectionLabel/SectionLabel";

export default function NewestBlogsSection({ data }: { data: Data["posts"] }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const sortDate = [...data].sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <SectionLabel sectionLabel="الأحدث" />
            <h2 className="text-5xl leading-tight font-bold text-white">
              أحدث المقالات
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400 max-w-lg">
              محتوى جديد طازج من المطبعة
            </p>
          </div>
          <Link
            className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            to="/blog"
          >
            عرض جميع المقالات
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortDate.slice(0, 3).map((blog: Post) => (
            <article
              key={blog.slug}
              className="group transition-all duration-500 ease-in-out rounded-3xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 hover:-translate-y-1"
            >
              <Link className="block" to={`/blog/${blog.slug}`}>
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={blog.image}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {blog.readTime}
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span>{formatDate(blog.date)}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>

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
                        <p className="text-xs text-neutral-500">
                          {blog.author.role}
                        </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
