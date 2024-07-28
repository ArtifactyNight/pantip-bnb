import { cn } from "@/lib/utils";
import {
  LucideBell,
  LucideHome,
  LucideMail,
  LucideSquarePlus,
  LucideUsers,
} from "lucide-react";
import type React from "react";

const navItems = [
  {
    name: "Home",
    href: "#",
    icon: LucideHome,
    isActive: true,
  },
  {
    name: "Community",
    icon: LucideUsers,
    href: "#",
    isActive: false,
  },
  {
    name: "New Post",
    icon: LucideSquarePlus,
    href: "#",
    isActive: false,
  },
  {
    name: "Mail",
    icon: LucideMail,
    href: "#",
    isActive: false,
  },
  {
    name: "Notifications",
    icon: LucideBell,
    href: "#",
    isActive: false,
  },
];

export const MobileNav: React.FC = () => {
  return (
    <div className="fixed md:hidden bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {navItems.map((item, index) => (
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
            key={index}
          >
            <item.icon
              className={cn(
                "text-primary size-6",
                item.isActive && "text-violet-700"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
