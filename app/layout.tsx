import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wisdom's 👨‍💻 Porfolio | Transforming Concepts into Seamless User Experiences",
  description: "Hi I'm Wisdom, a Frontend web Developer based in Lagos.",
  openGraph: {
    title: "Wisdom's 👨‍💻 Portfolio | Frontend Developer",
    type: "website",
    description: "Hi I'm Wisdom, a Fontend web Developer based in Lagos.",
    siteName: "Wisdom's 👨‍💻 Portfolio | Transforming Concepts into Seamless User Experiences",
    images: [
      {
        url: "https://wisdom-ofogba.vercel.app/icon.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
