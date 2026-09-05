import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evaluation workspace",
  description: "Private interface evaluation workspace.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
