import type { ReactNode } from "react";

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
      <section className="mt-20 bg-black/90 backdrop-blur-sm ">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-orange-400">
                {sectionLabel}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">{heading}</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {paragraph}
            </p>
         {children}
          </div>
        </div>
       
      </section>
    </>
  );
}
