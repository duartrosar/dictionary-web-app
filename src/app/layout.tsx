import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata, Inter, Lora } from "next/font/google";
import Providers from "./providers";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const incosolata = Inconsolata({ subsets: ["latin"] });
const font = inter.className;

export const metadata: Metadata = {
  title: "Frontend Mentor | Dictionary web app",
  description: "Challenged by Frontend Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
