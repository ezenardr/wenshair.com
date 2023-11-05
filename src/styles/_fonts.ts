import { Poppins, Playfair } from 'next/font/google';

// export const merriweather = Merriweather({
//     subsets: ['latin'],
//     weight: ['300', '400', '700'],
//     display: 'swap',
//     variable: '--font-family-primary',
//     fallback: ['serif', 'Georgia'],
// });
export const playfair = Playfair({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    display: 'swap',
    variable: '--font-family-primary',
    adjustFontFallback: false,
});
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '600'],
    display: 'swap',
    variable: '--font-family-secondary',
    adjustFontFallback: false,
});
