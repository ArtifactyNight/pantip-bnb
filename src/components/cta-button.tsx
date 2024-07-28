import Link from "next/link";
import type React from "react";

interface CtaButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ text, href, icon }) => {
  return (
    <Link
      href={href}
      className="text-primary transition text-center flex gap-2 items-center justify-center bg-background border rounded-xl p-4 hover:shadow-md hover:text-violet-700 hover:border-violet-700"
    >
      {icon}
      <h1 className="text-lg sm:text-xl font-bold">{text}</h1>
    </Link>
  );
};
