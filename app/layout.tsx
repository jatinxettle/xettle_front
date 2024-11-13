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
}

export const socialMeta = {
    instagram: {
        title: 'Fin-tech Software Development | Xettle.net | IG: @xettle_technologies',
        description:
            'Empowering financial inclusion with secure, innovative solutions like Micro ATM and KYC Verification for seamless, accessible digital transactions.',
        image: 'https://www.xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&amp;w=1200&amp;q=75',
        url: 'https://instagram.com/xettle_technologies',
    },
    twitter: {
        title: 'Fin-tech Software Development | Xettle.net | X: @xettle_tech',
        description:
            'Empowering financial inclusion with secure, innovative solutions like Micro ATM and KYC Verification for seamless, accessible digital transactions.',
        image: 'https://www.xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&amp;w=1200&amp;q=75',
        url: 'https://twitter.com/xettle_tech',
    },
    linkedin: {
        title: 'Fin-tech Software Development | Xettle.net | LinkedIn: @xettle_technologies',
        description:
            'Empowering financial inclusion with secure, innovative solutions like Micro ATM and KYC Verification for seamless, accessible digital transactions.',
        image: 'https://www.xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&amp;w=1200&amp;q=75',
        url: 'https://linkedin.com/company/xettle_technologies',
    },
}

export const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite', // Correct type, "WebSite" should have a capital 'S'
    url: 'https://www.xettle.net', // Replace with your website's URL
    name: 'Xettle', // Name of your website
    description:
        'Empowering financial inclusion with secure, innovative Micro ATM and KYC solutions for seamless, accessible digital transactions.', // Short description of your website
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
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta
                    property="og:image"
                    content="https://www.xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&amp;w=1200&amp;q=75"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://xettle.net/" />

                {/* Instagram Meta Tags */}
                <meta
                    name="description"
                    content={socialMeta.instagram.description}
                />
                <meta
                    property="og:title"
                    content={socialMeta.instagram.title}
                />
                <meta
                    property="og:description"
                    content={socialMeta.instagram.description}
                />
                <meta
                    property="og:image"
                    content={socialMeta.instagram.image}
                />
                <meta property="og:type" content="profile" />
                <meta property="og:url" content={socialMeta.instagram.url} />

                {/* Twitter Meta Tags */}
                <meta
                    name="description"
                    content={socialMeta.twitter.description}
                />
                <meta property="og:title" content={socialMeta.twitter.title} />
                <meta
                    property="og:description"
                    content={socialMeta.twitter.description}
                />
                <meta property="og:image" content={socialMeta.twitter.image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={socialMeta.twitter.url} />

                {/* LinkedIn Meta Tags */}
                <meta
                    name="description"
                    content={socialMeta.linkedin.description}
                />
                <meta property="og:title" content={socialMeta.linkedin.title} />
                <meta
                    property="og:description"
                    content={socialMeta.linkedin.description}
                />
                <meta property="og:image" content={socialMeta.linkedin.image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={socialMeta.linkedin.url} />

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
