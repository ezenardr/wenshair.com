import type { Metadata } from 'next';
import { playfair, poppins } from '@/styles/_fonts';
import '@/styles/main.scss';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    title: 'WensHair - Premium BarberShop',
    metadataBase: new URL('https://wenshair.com'),
    description: 'Votre solution en matière de coiffure',
    verification: {
        google: 'FpHEu-Ne6e05onWPJYr6-MYdKktelhNnFTf0JYXXq4k',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body
                className={[
                    `${playfair.variable}`,
                    `${poppins.variable}`,
                    'dark',
                ].join(' ')}
            >
                {children}
                <Toaster richColors />
                <ScrollToTop />
            </body>
        </html>
    );
}
