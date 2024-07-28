import { AppConfig } from "@/utils/AppConfig";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {AppConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
