import { FaNewspaper } from "react-icons/fa6";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <>
      <div className="section-label inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 animate-fade-in">
        {text === "مدونتنا" ? (
          <FaNewspaper className="text-orange-500 text-sm" />
        ) : (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
        )}
        <span className="text-sm font-medium text-orange-400">{text}</span>
      </div>
    </>
  );
}
