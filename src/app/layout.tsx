import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TastyBud Kitchen - Restaurant Table Reservation",
  description: "Book your table at TastyBud Kitchen for a delightful dining experience. Reserve now for a cozy and memorable meal.",
  keywords: ["restaurant", "table reservation", "TastyBud Kitchen", "dining", "book a table", "restaurant reservation", "food", "dining experience"],
  authors: [
    {
      name: "TastyBud Kitchen",
      url: "https://www.tastybudkitchen.com",
    },
  ],
  openGraph: {
    title: "TastyBud Kitchen - Book a Table",
    description: "Reserve your spot at TastyBud Kitchen for a delicious meal and great atmosphere.",
    url: "https://www.tastybudkitchen.com",
    type: "website",
    images: [
      {
        url: "/images/restaurant-image.jpg",
        width: 1200,
        height: 630,
        alt: "TastyBud Kitchen Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TastyBud Kitchen - Restaurant Reservation",
    description: "Book your table at TastyBud Kitchen for a delightful dining experience.",
    images: [
      {
        url: "/images/restaurant-image.jpg",
        width: 1200,
        height: 630,
        alt: "TastyBud Kitchen Dining",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className} h-full flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
