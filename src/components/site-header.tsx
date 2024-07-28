import type React from "react";
import { SpotlightBar } from "./spotlight-bar";
import { AppConfig } from "@/utils/AppConfig";
import Image from "next/image";
import { ContainerWrapper } from "./container-wrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import { LucidePlus } from "lucide-react";

export const SiteHeader: React.FC = () => {
  return (
    <header className="border-b border-border py-4 bg-background sticky top-0 z-10">
      <ContainerWrapper className="mx-auto flex justify-between items-center">
        <Link className="w-[10%]" href="/">
          <Image
            src={AppConfig.logo}
            alt={AppConfig.name}
            width={50}
            height={50}
          />
        </Link>
        <SpotlightBar />
        <div className="w-[10%]">
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
