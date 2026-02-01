import type { ReactNode } from "react";
import SectionLabel from "../SectionLabel/SectionLabel";

interface MainSectionProps {
  heading: ReactNode;
  paragraph: string;
  sectionLabel: string;
  children?: ReactNode;
}
export default function MainSection({
  heading,
  paragraph,
  sectionLabel,
  children,
}: MainSectionProps) {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "-2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <SectionLabel sectionLabel={sectionLabel} />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="gradient-text">{heading}</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {paragraph}
            </p>

            <div className="relative z-10">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
