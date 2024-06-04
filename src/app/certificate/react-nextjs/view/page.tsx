/* eslint-disable @next/next/no-img-element */
import cert_background from "/public/react-nextjs-cert.png";
import { BASE_URL, VIEW_URL } from "@/lib/constants";
import CopyButton from "../../_components/copy-button";
import DownloadButton from "../../_components/download-button";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const iconButtonStyles = "bn hover-bg-light-gray pv2 ph3 grow";

export default function Page({ searchParams }: PageProps) {
  const { firstName, lastName, course } = searchParams;

  const rebuiltSearchParams = new URLSearchParams({
    firstName: firstName as string,
    lastName: lastName as string,
    course: course as string,
  }).toString();

  const certificateUrl = BASE_URL + VIEW_URL + "?" + rebuiltSearchParams;

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
            <p className="w-90 overflow-text pl3">{certificateUrl}</p>

            <CopyButton
              iconButtonStyles={iconButtonStyles}
              certificateUrl={certificateUrl}
            />
            <DownloadButton iconButtonStyles={iconButtonStyles} />
          </span>
        </div>
      </div>
    </main>
  );
}
