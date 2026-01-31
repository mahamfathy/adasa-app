import { NavLink } from "react-router-dom";

interface RenderNavLinksProps {
  name: string;
  path: string;
}
export default function RenderNavLinks({ name, path }: RenderNavLinksProps) {
  return (
    <>
      <li key={path || name}>
        <NavLink
          className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
          to={`${path}`}
          data-discover="true"
        >
          <svg
            className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          {name}
        </NavLink>
      </li>
    </>
  );
}
