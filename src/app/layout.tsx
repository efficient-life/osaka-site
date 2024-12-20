import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <header className="static">
          <button className="fixed top-0 right-0 grid place-items-center z-50">
            <Image
              src="/top/hamburger.svg"
              height={99}
              width={100}
              alt="ハンバーガーボタン"
            />
          </button>
          <button className="fixed right-[36px] bottom-[40px] z-50">
            <Image
              src={"/top/follow-us.svg"}
              height={90}
              width={90}
              // height={67.5}
              // width={67.5}
              alt="polka-dot3"
            />
          </button>
          {/* <button className="absolute size-[120px] rounded-full border-2 border-black z-50 -top-7 -right-7 grid place-items-center">
            <div className="space-y-2 mt-3">
              <Image
                src="/hamburger-menu.svg"
                height={24}
                width={44}
                alt="hamburger-menu"
              />
              <p className="text-sm text-black">MENU</p>
            </div>
          </button> */}
        </header>
        {children}
      </body>
    </html>
  );
}
