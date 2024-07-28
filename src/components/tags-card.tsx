"use client";

import {
  selectIsShowMore,
  selectTags,
  toggleIsShowMore as toggleShowMore,
} from "@/lib/features/tags";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export const TagsCard: React.FC = () => {
  const items = useAppSelector(selectTags);
  const isShowMore = useAppSelector(selectIsShowMore);
  const dispatch = useAppDispatch();

  if (items.length === 0) return null;

  const handleShowMore = () => {
    dispatch(toggleShowMore());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center">แท็กยอดฮิต</h3>
        <button
          className="text-primary hover:text-primary/80 transition text-sm"
          onClick={handleShowMore}
        >
          {isShowMore ? "ย่อ" : "ดูทั้งหมด"}
        </button>
      </div>
      <div className="shadow-md rounded-xl border overflow-hidden">
        <ul className="divide-y">
          {items.slice(0, isShowMore ? items.length : 3).map((tag) => (
            <li key={tag.slug}>
              <Link
                href="#"
                className="text-primary hover:text-violet-700 transition py-2 px-4 block hover:bg-muted text-sm font-semibold"
              >
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
