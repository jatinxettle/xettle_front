import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["500", "700"],
});

export const metadata = {
    title: "Fin-tech Software Development | Xettle.net",
    verification: { google: "vCfgnA3NzYM0MQcSROsl_BjSWB63Jjr_OuYzPg9xAT0" },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <link rel="icon" href="./favicon.ico" sizes="any" />
            </head>
            <body className=" relative z-[-9999] overflow-x-hidden">
                <div className={`${roboto.className} relative z-[-9999]`}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
            <GoogleAnalytics gaId="G-FC0WY4V6WZ" />
        </html>
    );
}
