import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { PageLoader } from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Nguyen Hoang Gia Bao — Full-Stack & Game Developer",
  description:
    "Full-stack web developer and indie game creator based in Ho Chi Minh City. Building polished web products and immersive games.",
  themeColor: "#060306",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
        />
      </head>
      <body>
        <PageLoader />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
