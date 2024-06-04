import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

type DownloadButtonProps = {
  iconButtonStyles: string;
};

export default function DownloadButton({
  iconButtonStyles,
}: DownloadButtonProps) {
  return (
    <Button asChild>
      <DownloadIcon
        className={iconButtonStyles}
        width={"1rem"}
        height={"1rem"}
      />
    </Button>
  );
}
