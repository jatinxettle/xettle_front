import './globals.css'
import { Roboto } from 'next/font/google'
import { Toaster } from 'sonner'
import Header from '@/Components/Header'
import { Footer } from '@/Components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '700'],
})

export const metadata = {
    title: 'Fin-tech Software Development | Xettle.net',
    verification: { google: 'vCfgnA3NzYM0MQcSROsl_BjSWB63Jjr_OuYzPg9xAT0' },
    description:
        'Empowering financial inclusion with secure, innovative solutions like Micro ATM and KYC Verification for seamless, accessible digital transactions.',
}

export const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite', // Correct type, "WebSite" should have a capital 'S'
    url: 'https://www.xettle.net', // Replace with your website's URL
    name: 'Xettle', // Name of your website
    description:
        'Empowering financial inclusion with secure, innovative solutions like Micro ATM and KYC Verification for seamless, accessible digital transactions.', // Short description of your website
    publisher: {
        '@type': 'Organization', // Correct type for publisher (your organization)
        name: 'Xettle', // Name of the publisher organization
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta {...metadata} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta
                    property="og:title"
                    content="Fin-tech Software Development | Xettle.net"
                />
                <meta
                    property="og:description"
                    content="Empowering financial inclusion with secure, innovative solutions like Micro ATM and KYC Verification for seamless, accessible digital transactions."
                />
                <meta
                    property="og:image"
                    content="https://www.xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&w=1200&q=75"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://xettle.net/" />
                <link rel="canonical" href="https://xettle.net/" />
                <link rel="icon" href="./favicon.ico" sizes="any" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
            </head>
            <body className=" relative z-[-9999] overflow-x-hidden">
                <div className={`${roboto.className} relative z-[-9999]`}>
                    <Toaster position="top-right" />
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
            <GoogleAnalytics gaId="G-FC0WY4V6WZ" />
        </html>
    )
}
