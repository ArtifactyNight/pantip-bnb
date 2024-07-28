"use client";

import {
  selectClubs,
  selectIsShowMore,
  toggleIsShowMore,
} from "@/lib/features/clubs";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export const ClubsCard: React.FC = () => {
  const items = useAppSelector(selectClubs);
  const isShowMore = useAppSelector(selectIsShowMore);
  const dispatch = useAppDispatch();

  if (items.length === 0) return null;

  const handleShowMore = () => {
    dispatch(toggleIsShowMore());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center">คลับ</h3>
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
            <li key={tag.id}>
              <Link
                href="#"
                target="_blank"
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
