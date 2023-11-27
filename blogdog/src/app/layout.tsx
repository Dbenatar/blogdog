import type { Metadata } from "next";
import { Inter, Advent_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const advent = Advent_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Dog",
  description: "A blog by dogs for dogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={advent.className}>{children}</body>
    </html>
  );
}
