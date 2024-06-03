/* eslint-disable @next/next/no-img-element */
"use client";

import cert_background from "/public/react-nextjs-cert.png";
import Image from "next/image";

export default function Page() {
  return (
    <main className="vw-100 vh-100 flex flex-column justify-center items-center">
      <p>certifcate/react-nextjs/view</p>
      <div className="w-75vw h-75vh">
        <img
          style={{ width: "800px", height: "618px" }}
          src={cert_background.src}
          alt="Certificate"
        />
      </div>
    </main>
  );
}
