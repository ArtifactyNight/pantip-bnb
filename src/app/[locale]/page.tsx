import { ContainerWrapper } from "@/components/container-wrapper";
import { RoomList } from "@/components/room-list";

export default function Page() {
  return (
    <ContainerWrapper className="mt-4 h-screen">
      <RoomList />
    </ContainerWrapper>
  );
}
