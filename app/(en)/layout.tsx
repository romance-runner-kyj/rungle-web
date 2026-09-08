import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pages.rungle.app"),
  title: "Rungle",
  description:
    "An iOS app that imports your running records, picks the best shots from your photos and videos, and turns them into record overlays and reels to share",
};

// 영어판 루트 레이아웃 — (ko)와 같은 꼴이고 lang만 다르다. html 속성은 루트 레이아웃만 정할 수 있어 둘로 나눴다.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
