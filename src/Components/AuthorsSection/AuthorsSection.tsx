import { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import type { Post } from "../../Interfaces/data.interface";
import AuthorCard from "../AuthorCard/AuthorCard";
import SectionLabel from "../SectionLabel/SectionLabel";

export default function AuthorsSection() {
  const data = useContext(dataContext);
  const authorsData = data?.posts.map((blog: Post) => (
    <AuthorCard key={blog.id} author={blog.author} />
  ));

  return (
    <>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel sectionLabel="فريقنا" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorsData}
          </div>
        </div>
      </section>
    </>
  );
}
