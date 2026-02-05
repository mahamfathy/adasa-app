import { FaBookOpen, FaNewspaper, FaPenNib, FaUsers } from "react-icons/fa6";
import data from "../../../data.json";
import GlassCard from "../../Components/GlassCard/GlassCard";
import MainSection from "../../Components/MainSection/MainSection";
import ValuesSection from "../../Components/ValuesSection/ValuesSection";
export default function AboutUs() {
  return (
    <>
      <MainSection
        heading="مهمتنا هي الإعلام والإلهام"
        paragraph={data.siteInfo.description}
        sectionLabel="من نحن"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <GlassCard
            icon={
              <FaUsers className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="+2مليون"
            pargraph="قارئ شهريا"
          />

          <GlassCard
            icon={
              <FaNewspaper className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="+500"
            pargraph="مقالة منشورة"
          />
          <GlassCard
            icon={
              <FaPenNib className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="+50"
            pargraph="كاتب خبير"
          />
          <GlassCard
            icon={
              <FaBookOpen className="mx-auto block text-center text-2xl text-orange-500 mb-1" />
            }
            number="+15"
            pargraph="تصنيف"
          />
        </div>
      </MainSection>
      <ValuesSection />
    </>
  );
}
