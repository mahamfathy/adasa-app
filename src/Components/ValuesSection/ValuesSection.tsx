import { type ReactNode } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaArrowsRotate, FaHandshake } from "react-icons/fa6";

import { TbTargetArrow } from "react-icons/tb";

interface ValueItem {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export default function ValuesSection() {
  const values: ValueItem[] = [
    {
      icon: <TbTargetArrow />,
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <BsLightningChargeFill />,
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
      gradient: "from-orange-600 to-orange-400",
    },
    {
      icon: <FaHandshake />,
      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <FaArrowsRotate />,
      title: "دائماً محدث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
      gradient: "from-orange-600 to-orange-400",
    },
  ];

  return (
    <section className="py-20 bg-[#111111] border-y border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full" />
            قيمنا
            <span className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full" />
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 text-center relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-orange-500 text-4xl mb-5 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
