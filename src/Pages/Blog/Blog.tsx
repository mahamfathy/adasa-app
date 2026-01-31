import { Outlet } from "react-router-dom";
import MainSection from "../../Components/MainSection/MainSection";

export default function Blog() {
  return (
    <>
      <MainSection
        sectionLabel="مدونتنا"
        heading="استكشف مقالاتنا"
        paragraph="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
      />
      <Outlet />
    </>
  );
}
