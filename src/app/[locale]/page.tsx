import { ClubsCard } from "@/components/clubs-card";
import { ContainerWrapper } from "@/components/container-wrapper";
import { CtaList } from "@/components/cta-list";
import { Footer } from "@/components/footer";
import { HighlightList } from "@/components/highlight-list";
import { RoomList } from "@/components/room-list";
import { SiteHeader } from "@/components/site-header";
import { TagsCard } from "@/components/tags-card";

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="sticky top-0 z-10">
        <SiteHeader />
        <RoomList />
      </div>

      <CtaList />

      <ContainerWrapper className="flex gap-4 flex-row-reverse items-start max-lg:flex-col">
        <section className="space-y-4 w-full lg:w-[700px]">
          <TagsCard />
          <ClubsCard />
        </section>
        <HighlightList />
      </ContainerWrapper>

      <Footer />
    </div>
  );
}
