import {
  LucideCompass,
  LucideHome,
  LucideMessageCircleHeart,
  LucideStar,
  LucideThumbsUp,
} from "lucide-react";
import { ContainerWrapper } from "./container-wrapper";
import { CtaButton } from "./cta-button";

export const CtaList: React.FC = () => {
  return (
    <ContainerWrapper className="space-y-4">
      <h3 className="text-xl font-bold">ทางลัด</h3>
      <div className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        <CtaButton
          href="#"
          text="หน้าแรก"
          icon={<LucideHome className="size-5" />}
        />
        <CtaButton
          href="#"
          text="My Feed"
          icon={<LucideMessageCircleHeart className="size-5" />}
        />
        <CtaButton
          href="#"
          text="Pantip Pick"
          icon={<LucideThumbsUp className="size-5" />}
        />
        <CtaButton
          href="#"
          text="Pantip Hitz"
          icon={<LucideStar className="size-5" />}
        />
        <CtaButton
          href="#"
          text="Explore"
          icon={<LucideCompass className="size-5" />}
        />
      </div>
    </ContainerWrapper>
  );
};
