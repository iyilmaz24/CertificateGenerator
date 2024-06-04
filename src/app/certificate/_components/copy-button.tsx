"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";

type CopyButtonProps = {
  iconButtonStyles: string;
  certificateUrl: string;
};

export default function CopyButton({
  iconButtonStyles,
  certificateUrl,
}: CopyButtonProps) {
  return (
    <Button
      asChild
      onClick={() => navigator.clipboard.writeText(certificateUrl)}
    >
      <CopyIcon className={iconButtonStyles} width={"1rem"} height={"1rem"} />
    </Button>
  );
}
