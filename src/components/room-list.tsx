import rooms from "@/lib/mocks/rooms";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";

export const RoomList: React.FC = () => {
  return (
    <div className="p-4 space-y-2">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full px-12"
      >
        <CarouselContent>
          {rooms.data.map((room) => (
            <CarouselItem key={room.id} className="basis-1/12">
              <Link
                href={room.link_url}
                target="_blank"
                className="p-2 flex flex-col items-center gap-2 text-nowrap border-b-2 border-transparent hover:border-border transition"
              >
                <img
                  src={room.room_icon_url}
                  alt={room.name}
                  className="size-10 rounded-2xl bg-violet-700 p-2 grow flex-1"
                />

                <p className="text-xs text-muted-foreground">{room.name}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};
