/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import cert_background from "/public/react-nextjs-cert.png";
import { DownloadIcon, CopyIcon } from "@radix-ui/react-icons";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const iconButtonStyles = "bn hover-bg-light-gray pv2 ph3 grow";

export default function Page({ searchParams }: PageProps) {
  const { firstName, lastName } = searchParams;
  console.log(firstName, lastName);

  return (
    <main className="vw-100 vh-100 flex flex-column items-center">
      <div
        className="w-90 h-90 flex flex-column justify-center items-center"
        style={{ maxWidth: "min(800px, 95%)", height: "auto" }} // critical to scaling/resizing
      >
        <img className="ma4 mt5" src={cert_background.src} alt="Certificate" />

        <div className="flex justify-between items-center f7 w-100">
          <span
            className="w-100 placeholder br3 tc
            flex justify-between items-center"
          >
            <p className="w-90 overflow-text pl3">
              http://localhost:3000/certificate/react-nextjs/view
            </p>
            <Button asChild>
              <CopyIcon
                className={iconButtonStyles}
                width={"1rem"}
                height={"1rem"}
              />
            </Button>
            <Button asChild>
              <DownloadIcon
                className={iconButtonStyles}
                width={"1rem"}
                height={"1rem"}
              />
            </Button>
          </span>
        </div>
      </div>
    </main>
  );
}
