import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import type { Data } from "../../Interfaces/data.interface";
import getCategoryIcon from "../../Utils/getCategoryIcon";
import SectionLabel from "../SectionLabel/SectionLabel";

export default function CategoriesSection() {
  const data = useContext(dataContext) as Data;
  return (
    <>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {<SectionLabel sectionLabel="التصفيات" />}
            <h2 className="text-5xl leading-tight font-bold text-white">
              استكشف حسب الموضوع
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400 max-w-lg">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {data.categories.map((category) => (
              <NavLink
                key={category.name}
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                to={`/blog?category=${category.name}`}
                data-discover="true"
                style={{ animationDelay: "0ms" }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.count} مقالة
                  </p>
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white rotate-180"
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
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
