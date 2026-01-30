import type { ReactNode } from "react";

interface GlassCardProps {
  icon: ReactNode;
  number: string;
  pargraph: string;
}
export default function GlassCard({ icon, number, pargraph }: GlassCardProps) {
  return (
    <>
      <div
        className="glass-card p-4 hover:scale-105 transition-transform duration-300"
        style={{ animationDelay: "0ms" }}
      >
        <span>{icon}</span>
        <p className="text-2xl md:text-3xl font-bold gradient-text">{number}</p>
        <p className="text-neutral-500 text-sm">{pargraph}</p>
      </div>
    </>
  );
}
