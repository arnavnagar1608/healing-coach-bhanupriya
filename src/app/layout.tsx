import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Healing Coach Bhanupriya | Reiki, Tarot & Personal Guidance",
  description: "A gentler space to return to yourself. Healing Coach Bhanupriya offers Reiki healing, Tarot reading, and spiritual learning courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-ivory text-warm-charcoal selection:bg-pale-lavender selection:text-warm-charcoal">
        {children}
      </body>
    </html>
  );
}
