import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function SharedButton({
  children,
  className,
  icon,
  ...props
}: ButtonProps) {
  return (
    <>
      <button className={className} {...props}>
        {icon && <span>{icon}</span>}
        {children}
      </button>
    </>
  );
}
