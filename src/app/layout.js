import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Analytics from "@/components/Analytics";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TweakTail | Visual Tailwind CSS Editor for Faster UI Development",
  description:
    "Build Tailwind components visually, export production-ready code instantly. TweakTail helps developers and designers create UIs 10x faster without CSS headaches.",
  twitter: {
    card: "summary_large_image",
    title: "TweakTail: The Visual Tailwind Editor",
    description:
      "The visual editor for developers who want to customize and export Tailwind components in seconds.",
    creator: "@Ashraful__malik",
    siteName: "Tweaktail",
    images: [
      {
        url: "/tweaktail-twitterCard.png",
        width: 800,
        height: 600,
        alt: "Tweaktail image",
      },
    ],
  },
  openGraph: {
    title: "TweakTail: The Visual Tailwind Editor",
    description:
      "The visual editor for developers who want to customize and export Tailwind components in seconds.",
    siteName: "Tweaktail",
    locale: "en_US",
    type: "website",
    url: "https://tweaktail.xyz",
    images: ["/tweaktail-twitterCard.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js)  */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1MVY8NXB7M"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
