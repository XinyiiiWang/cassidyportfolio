import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cassidy Portfolio",
  description: "Cassidy Portfolio",
};

const backgroundStyle = {
  backgroundImage: "url(/img/background.png)",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={backgroundStyle}>
        <div className="flex h-full">{children}</div>
      </body>
    </html>
  );
}
