"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

type DownloadButtonProps = {
  iconButtonStyles: string;
};

export default function DownloadButton({
  iconButtonStyles,
}: DownloadButtonProps) {
  return (
    <Button asChild onClick={() => window.print()}>
      <DownloadIcon
        className={iconButtonStyles}
        width={"1rem"}
        height={"1rem"}
      />
    </Button>
  );
}
