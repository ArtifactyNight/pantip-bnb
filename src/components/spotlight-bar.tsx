"use client";

import { cn } from "@/lib/utils";
import { LucideSearch } from "lucide-react";
import type React from "react";
import { Button } from "./ui/button";

interface SpotlightBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SpotlightBar: React.FC<SpotlightBarProps> = (props) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white p-2 focus-within:translate-y-1 focus-within:shadow-none shadow-md border border-border w-full max-w-md flex hover:bg-muted focus-within:bg-muted group transition-all",
        props.className
      )}
      {...props}
    >
      <input
        className={cn(
          "bg-transparent w-full rounded-full outline-none px-4 transition-all"
        )}
        type="text"
        placeholder="ค้นหาบน Pantip"
      />
      <Button
        size="icon"
        className="bg-violet-700 hover:bg-violet-800 rounded-full text-white p-2"
      >
        <LucideSearch className="size-5" />
      </Button>
    </div>
  );
};
