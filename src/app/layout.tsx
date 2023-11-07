import type { Metadata } from 'next';
import { playfair, poppins } from '@/styles/_fonts';
import '@/styles/main.scss';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export const metadata: Metadata = {
    title: 'WensHair - Premium BarberShop',
    description: 'Generated by create next app',
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
                <ScrollToTop />
            </body>
        </html>
    );
}
