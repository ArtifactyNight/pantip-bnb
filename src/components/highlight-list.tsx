"use client";

import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import type React from "react";

export const HighlightList: React.FC = () => {
  const highlights = useAppSelector((state) => state.highlights.data);

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-bold">ไฮไลท์</h3>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {highlights.map((highlight, index) => (
          <Link
            href={highlight.post_url}
            target="_blank"
            key={index}
            className="border border-transparent hover:border-border rounded-2xl hover:shadow-lg transition hover:-translate-y-1"
          >
            <img
              src={highlight.image_url.at(-1)}
              alt={highlight.name}
              className="rounded-2xl"
            />

            <div className="px-4 pb-4 pt-2">
              <h3 className="text-base sm:text-lg font-bold line-clamp-1">
                {highlight.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
