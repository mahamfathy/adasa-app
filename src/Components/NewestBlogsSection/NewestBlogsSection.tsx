import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import type { Data, Post } from "../../Interfaces/data.interface";
import BlogCard from "../BlogCard/BlogCard";
import SectionLabel from "../SectionLabel/SectionLabel";
export default function NewestBlogsSection() {
  const data = useContext(dataContext) as Data;
  const sortDate = [...data.posts].sort((a: Post, b: Post) => {
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
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
