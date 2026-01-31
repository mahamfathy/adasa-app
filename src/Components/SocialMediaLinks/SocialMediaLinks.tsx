interface SocialMediaLinksProps {
  name: string;
  path: string;
  svgPath: string;
  fillRule?: "nonzero" | "evenodd" | "inherit";
  clipRule?: "nonzero" | "evenodd" | "inherit";
}
export default function SocialMediaLinks({
  name,
  path,
  svgPath,
  fillRule,
  clipRule,
}: SocialMediaLinksProps) {
  return (
    <>
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
        aria-label={name}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d={svgPath} fillRule={fillRule} clipRule={clipRule} />
        </svg>
      </a>
    </>
  );
}
