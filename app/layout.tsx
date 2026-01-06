import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-playfair',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Marhaba Haji - Umrah & Hajj Packages',
    description: 'Start your sacred journey to Mecca and Medina. Fast, Secure and hassle-free Umrah visa processing with guaranteed approval and expert support.',
    keywords: ['Umrah', 'Hajj', 'Pilgrimage', 'Makkah', 'Madinah', 'Visa', 'Travel'],
    openGraph: {
        title: 'Marhaba Haji - Umrah & Hajj Packages',
        description: 'Start your sacred journey to Mecca and Medina. Fast, Secure and hassle-free Umrah visa processing.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
            <body className="font-sans antialiased bg-white text-gray-900">
                {children}
            </body>
        </html>
    );
}
