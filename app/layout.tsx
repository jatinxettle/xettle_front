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
    title: 'Xettle: Business Software Solutions & Services',
    verification: { google: 'vCfgnA3NzYM0MQcSROsl_BjSWB63Jjr_OuYzPg9xAT0' },
    description:
        'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.',
    openGraph: {
        title: 'Xettle: Business Software Solutions & Services',
        description:
            'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.',
        url: 'https://xettle.net/',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xhRJxCrwQT8b3OYIjFyVD0uWiTlCsR9Dqg&s',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Xettle: Business Software Solutions & Services',
        description:
            'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.',
        image: 'https://www.xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&w=1200&q=75',
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

                <link rel="canonical" href="https://xettle.net/" />
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
