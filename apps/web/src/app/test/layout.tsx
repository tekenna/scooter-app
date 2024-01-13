import "../globals.css";
import "ui/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ola",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
