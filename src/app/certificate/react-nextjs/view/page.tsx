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
        className="w-90 h-90 flex flex-column justify-center items-center" // w-90, h-90 for natural padding
        style={{ maxWidth: "min(800px, 95%)", height: "74%" }} // 1.0 x 0.95 = 0.95
        // 0.7725 x 0.95 = 0.733875, allows certificate resizing when window is resizing
      >
        <div
          id="section-to-print"
          className="flex flex-col justify-center items-center mt5"
          style={{
            backgroundImage: `url(${cert_background.src})`,
            minWidth: "100%", // 2000px / 2000px = 1
            minHeight: "77%", // 1545px / 2000px = 0.7725
            backgroundSize: "contain", // contain, so that the image is resized to fit container
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <span
            style={{
              fontSize: "10px",
            }}
          >
            {firstName + " " + lastName}
          </span>
        </div>

        <div
          id="section-to-exclude"
          className="flex justify-between items-center f7 w-100 ma4"
        >
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
