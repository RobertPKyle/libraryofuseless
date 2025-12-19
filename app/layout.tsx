import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Library of Useless - Facts That Were Proven Wrong",
  description: "A collection of facts taught in school that have been disproven or updated since they were first announced.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
