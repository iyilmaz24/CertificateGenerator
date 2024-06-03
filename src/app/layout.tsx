import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tachyons/css/tachyons.min.css";
import "./styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Certifcate Portal",
  description: "View, share, and download your online certificates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} vh-100 vw-100 f4 default-app`}>
        {children}
      </body>
    </html>
  );
}
