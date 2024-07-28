import { AppConfig } from "@/utils/AppConfig";
import type React from "react";
import { ContainerWrapper } from "./container-wrapper";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-center">
      <ContainerWrapper className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground w-full">
            © {new Date().getFullYear()} {AppConfig.name}. All rights reserved.
          </div>
        </div>
      </ContainerWrapper>
    </footer>
  );
};
