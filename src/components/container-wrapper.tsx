import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import type React from "react";

interface ContainerWrapperProps extends PropsWithChildren {
  className?: string;
}

export const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(className, "container mx-auto px-4 md:px-8")}>
      {children}
    </div>
  );
};
