import { FaFolderOpen, FaNewspaper, FaPenNib, FaUsers } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import data from "../../../data.json";
import FeaturedBlogs from "../../Components/FeaturedBlogs/FeaturedBlogs";
import GlassCard from "../../Components/GlassCard/GlassCard";
import MainSection from "../../Components/MainSection/MainSection";
export default function Home() {
  console.log("data:", data);
  return (
    <>
      <MainSection
        sectionLabel="مرحبا بك في عدسة"
        heading="اكتشف فن التصوير الفوتوغرافي"
        paragraph="انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير."
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <NavLink className="btn-primary group" to="/blog">
            <span>استكشف المقالات</span>
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
          </NavLink>

          <NavLink className="btn-secondary group" to="/about">
            <svg
              className="w-5 h-5 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>اعرف المزيد</span>
          </NavLink>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <GlassCard
            icon={
              <FaNewspaper className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="+50"
            pargraph="مقالة"
          />

          <GlassCard
            icon={
              <FaUsers className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="+10ألف"
            pargraph="قارئ"
          />
          <GlassCard
            icon={
              <FaFolderOpen className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="5"
            pargraph="تصنيفات"
          />
          <GlassCard
            icon={
              <FaPenNib className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="6"
            pargraph="كاتب"
          />
        </div>
      </MainSection>
      <FeaturedBlogs sectionLabel="مميز" />
    </>
  );
}
