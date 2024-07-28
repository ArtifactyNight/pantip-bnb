import { AppConfig } from "@/utils/AppConfig";
import { LucidePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ContainerWrapper } from "./container-wrapper";
import { SpotlightBar } from "./spotlight-bar";
import { Button } from "./ui/button";

export const SiteHeader: React.FC = () => {
  return (
    <header className="border-b border-border py-4 bg-background">
      <ContainerWrapper className="mx-auto flex justify-between items-center max-md:justify-center">
        <Link className="lg:w-[10%] max-md:hidden" href="/">
          <Image
            src={AppConfig.logo}
            alt={AppConfig.name}
            width={50}
            height={50}
          />
        </Link>
        <SpotlightBar />
        <div className="lg:w-[10%] max-md:hidden">
          <Button
            variant="ghost"
            className="rounded-full font-semibold text-base px-4 py-2"
          >
            <LucidePlus className="size-5 mr-2" />
            ตั้งกระทู้
          </Button>
        </div>
      </ContainerWrapper>
    </header>
  );
};
