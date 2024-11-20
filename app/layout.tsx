import './globals.css'
import { Roboto } from 'next/font/google'
import { Toaster } from 'sonner'
import Header from '@/Components/Header'
import { GoogleAnalytics } from '@next/third-parties/google'

import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('@/Components/Footer'), {
    ssr: false, // Disable server-side rendering for this component if it's client-only
    loading: () => <></>, // Optional loading state
})

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '700'],
})

export const metadata = {
    title: 'Xettle: Business Software Solutions & Services',
    verification: { google: 'vCfgnA3NzYM0MQcSROsl_BjSWB63Jjr_OuYzPg9xAT0' },
    description:
        'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.',
    openGraph: {
        title: 'Xettle: Business Software Solutions & Services',
        description:
            'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.',
        url: 'https://xettle.net/',
        image: 'https://i.postimg.cc/Hkd6pFfY/Untitled-design.jpg',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Xettle: Business Software Solutions & Services',
        description:
            'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.',
        image: 'https://i.postimg.cc/Hkd6pFfY/Untitled-design.jpg',
        creator: '@xettle_tech', // Twitter handle
    },
}

export const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.xettle.net',
    name: 'Xettle',
    description:
        'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.',
    publisher: {
        '@type': 'Organization',
        name: 'Xettle',
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
                <meta name="title" content={metadata.title} />
                <meta name="description" content={metadata.description} />
                <meta
                    name="google-site-verification"
                    content={metadata.verification.google}
                />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={metadata.openGraph.title} />
                <meta
                    property="og:description"
                    content={metadata.openGraph.description}
                />
                <meta property="og:url" content={metadata.openGraph.url} />
                <meta property="og:image" content={metadata.openGraph.image} />
                <meta property="og:type" content={metadata.openGraph.type} />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content={metadata.twitter.card} />
                <meta name="twitter:title" content={metadata.twitter.title} />
                <meta
                    name="twitter:description"
                    content={metadata.twitter.description}
                />
                <meta name="twitter:image" content={metadata.twitter.image} />
                <meta
                    name="twitter:creator"
                    content={metadata.twitter.creator}
                />

                <link
                    rel="canonical"
                    href="https://www.xettle.net/services/kyc-and-validation"
                />
                <link rel="icon" href="./favicon.ico" sizes="any" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
            </head>
            <body className="relative z-[-9999] overflow-x-hidden">
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
