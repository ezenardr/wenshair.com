import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/main.css"
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})
export const metadata = {
    title: 'WensHair - Premium BarberShop',
    description: "Plus qu'un simple salon, nous sommes un lieu où vous pouvez vous détendre, prendre soin de vous et repartir avec une confiance renouvelée.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}>{children}</body>
        </html>
    )
}
