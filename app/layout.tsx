import "./globals.scss";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Главная",
  description: "Образец сайта на Next.js.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
