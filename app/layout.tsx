import type { Metadata } from "next";
import { Marcellus, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Rashidi Umrah - Tours & Travels",
  description:
    "Rashidi Umrah Tours & Travels - Trusted Umrah & Hajj packages with visa assistance, flight booking, transport, and complete pilgrimage support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
