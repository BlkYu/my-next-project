import { Metadata } from "next";
import { WEB_DISCRIBE, WEB_TITLE } from "./_constants";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata:Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: {
    template: `%s | ${WEB_TITLE}`,
    default: `${WEB_TITLE}`,
  },
  description: `${WEB_DISCRIBE}`,
  openGraph: {
    title: `${WEB_TITLE}`,
    description: `${WEB_DISCRIBE}`,
    images: [`/ogp.png`],
  },
  alternates: {
    canonical: `https://localhost:3000`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
