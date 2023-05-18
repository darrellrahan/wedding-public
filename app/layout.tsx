import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Akbar & Retha - Wedding Invitation",
  description: "Undangan Pernikahan Akbar & Retha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${merriweather.className} bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
