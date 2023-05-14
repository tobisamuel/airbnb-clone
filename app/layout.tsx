import "./globals.css";

import Navbar from "@/components/Navbar";
import { cereal } from "@/fonts/fonts";

export const metadata = {
  title: "AirBnB Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cereal.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
