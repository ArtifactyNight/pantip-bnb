"use client";

import Link from "next/link";
import { ContainerWrapper } from "./container-wrapper";

import { Swiper, SwiperSlide } from "swiper/react";

import { useAppSelector } from "@/lib/hooks";
import "swiper/css";
import "swiper/css/bundle";

export const RoomList: React.FC = () => {
  const rooms = useAppSelector((state) => state.rooms.data);

  return (
    <div className="border-b bg-background">
      <ContainerWrapper>
        <Swiper
          className="w-full px-12 swiper-container"
          slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 10,
            },
          }}
          spaceBetween={30}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <Link
                href={room.link_url}
                target="_blank"
                className="p-4 flex flex-col items-center gap-2 text-nowrap border-b-2 border-transparent hover:border-amber-400 transition group"
              >
                <img
                  src={room.room_icon_url}
                  alt={room.name}
                  className="size-10 rounded-2xl bg-violet-700 group-hover:bg-amber-400 p-2 grow flex-1 transition"
                />
                <p className="text-xs text-muted-foreground group-hover:text-amber-400">
                  {room.name}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerWrapper>
    </div>
  );
};
