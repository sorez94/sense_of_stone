import type { Metadata } from "next";
import { Forum, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const forum = Forum({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-forum",
});

// ✅ متادیتا به شکل توصیه‌شده
export const metadata: Metadata = {
    title: "Sense Of Stone",
    description: "Generated by Sorez",
    openGraph: {
        title: "Sense Of Stone",
        description: "Generated by Sorez",
        url: "https://senseofstone.co",
        siteName: "Sense Of Stone",
        images: [
            {
                url: "https://senseofstone.co/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sense Of Stone Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sense Of Stone",
        description: "Generated by Sorez",
        images: ["https://senseofstone.co/images/og-image.png"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${forum.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
