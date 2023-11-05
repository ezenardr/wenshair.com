import Link from 'next/link';
import Style from './page.module.scss';
import Logo from '@/img/logo.png';
import Qr from '@/img/qr-code.webp';
import Why from '@/img/why-us.png';
import Image4 from '@/img/4.webp';
import Image8 from '@/img/8.webp';
import Image9 from '@/img/9.webp';
import Image12 from '@/img/12.webp';
import Profile from '@/img/profile2.webp';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';
import { ImLocation2 } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { MdArrowRight } from 'react-icons/md';
import { ButtonPrimary, ButtonSecondary } from '@/components/Buttons/Buttons';
import ContactForm from '@/components/ContactForm/ContactForm';
import Navigation from '@/components/Navigations/Navigation';
export default function Home() {
    return (
        <>
            <Header />
            <WhyUs />
            <PricingSection />
            <GallerySection />
            <SectionAbout />
            <SectionBooking />
        </>
    );
}

function Header() {
    return (
        <header className={Style.header}>
            <Navigation />
            <h1>
                Premium <br /> <span className={Style.accent}>WensHair</span>{' '}
                <br />
                Barbershop
            </h1>
            <div className={Style.heroTextBox}>
                <div className={Style.heroContentBox}>
                    <p className={Style.contentTitle}>Rapide</p>
                    <div className={Style.diamond}></div>
                    <p className={Style.contentText}>
                        Avec une expertise rapide, Soyez prêt à briller en un
                        rien de temps.
                    </p>
                </div>
                <div className={Style.heroContentBox}>
                    <p className={Style.contentTitle}>Cool</p>
                    <div className={Style.diamond}></div>
                    <p className={Style.contentText}>
                        Le style est notre marque. Une ambiance décontractée, où
                        l&apos;élégance est la norme.
                    </p>
                </div>
                <div className={Style.heroContentBox}>
                    <p className={Style.contentTitle}>Abordable</p>
                    <div className={Style.diamond}></div>
                    <p className={Style.contentText}>
                        Le raffinement n&apos;a pas de prix.! Obtenez un look de
                        star sans vider votre portefeuille.
                    </p>
                </div>
            </div>
            <div className={Style.contactBox}>
                <div className={Style.contact}>
                    <div className={Style.contactLogo}>
                        <Image
                            className={Style.logo}
                            src={Logo}
                            alt="Logo"
                            width={100}
                            height={100}
                            loading="eager"
                        />
                        <p className={Style.logoTitle}>Traveling Barber</p>
                    </div>
                    <div className={Style.infoBox}>
                        <div className={Style.info}>
                            <ImLocation2 className={Style.icon} />
                            <p>Montréal, QC</p>
                        </div>
                        <Link href="tel:+1(514)5574194" className={Style.info}>
                            <span className={Style.contactIcon}>
                                <FaPhone className={Style.icon} />
                            </span>
                            +1 (514) 557-4194
                        </Link>
                        <Link
                            href="mailto:wenshair1@gmail.com"
                            className={Style.info}
                        >
                            <span className={Style.contactIcon}>
                                <GrMail className={Style.icon} />
                            </span>
                            wenshair1@gmail.com
                        </Link>
                    </div>
                </div>
                <div className={Style.qrBox}>
                    <Image
                        src={Qr}
                        alt="Qr code link"
                        width={150}
                        height={175}
                        loading="eager"
                    />
                    <ButtonSecondary path="#booking">
                        Réservation
                    </ButtonSecondary>
                </div>
            </div>
        </header>
    );
}
function WhyUs() {
    const reasons = [
        'Coupes sur mesure correspondant au style de chaque client',
        'Produits de haute qualité pour un résultat impeccable',
        'Une coiffure qui reflète votre personnalité',
        'Prise de rendez-vous rapide et pratique via notre site web',
        'Equipements confortables et une coiffure relaxante',
        'Conseils de coiffage pour prolonger la fraîcheur de votre coupe',
        'Prix compétitifs pour des services de haute qualité',
        'Service rapide et efficace',
    ];
    return (
        <section className={Style.sectionWhyUs}>
            <Image
                alt="man getting facial"
                src={Why}
                width={700}
                height={500}
                loading="eager"
            />
            <div className={Style.textBox}>
                <h2 className={Style.title}>Raison de me Préférer?</h2>
                <ul className={Style.textList}>
                    {reasons.map((reason) => {
                        return (
                            <li key={Math.random()}>
                                <MdArrowRight className={Style.icon} />
                                <p>{reason}</p>
                            </li>
                        );
                    })}
                </ul>
                <ButtonPrimary path="#booking">
                    Faites Votre Réservation !
                </ButtonPrimary>
            </div>
        </section>
    );
}
function PricingSection() {
    return (
        <section className={Style.sectionPricing} id="pricing">
            <div className={Style.pricingContainer}>
                <h2 className={Style.title}>Mes Tarifs</h2>
                <div className={Style.pricing}>
                    <div className={Style.items}>
                        <div className={Style.item}>
                            <p>Coupe Simple</p>
                            <p>$30+</p>
                        </div>
                        <div className={Style.item}>
                            <p>Avec Barbe</p>
                            <p>$35+</p>
                        </div>
                        <div className={Style.item}>
                            <p>Contour</p>
                            <p>$15+</p>
                        </div>
                    </div>
                    <div className={Style.items}>
                        <div className={Style.item}>
                            <p>Sourcils</p>
                            <p>$10+</p>
                        </div>
                        <div className={Style.item}>
                            <p>Autres</p>
                            <p>Sur Demande</p>
                        </div>
                    </div>
                </div>
                <ButtonSecondary path="#booking">
                    Prenez Rendez-Vous
                </ButtonSecondary>
            </div>
        </section>
    );
}
function GallerySection() {
    return (
        <section className={Style.sectionGallery}>
            <div className={Style.galleryContainer}>
                <h2 className={Style.title}>Mes Réalisations</h2>
                <div className={Style.carousel}>
                    <Image
                        src={Image8}
                        width={250}
                        height={250}
                        alt="Barbershop client"
                        loading="eager"
                    />
                    <Image
                        src={Image4}
                        width={250}
                        height={250}
                        alt="Barbershop client"
                        loading="eager"
                    />
                    <Image
                        src={Image9}
                        width={250}
                        height={250}
                        alt="Barbershop client"
                        loading="eager"
                    />
                    <Image
                        src={Image12}
                        width={250}
                        height={250}
                        alt="Barbershop client"
                        loading="eager"
                    />
                </div>
                <ButtonPrimary path="/gallery">Voir Plus</ButtonPrimary>
            </div>
        </section>
    );
}
function SectionAbout() {
    return (
        <section className={Style.sectionAbout}>
            <div className={Style.aboutContainer}>
                <div className={Style.textBox}>
                    <h2 className={Style.title}>A Propos</h2>
                    <p className={Style.text}>
                        Je mets un point d&apos;honneur à offrir bien plus
                        qu&apos;une simple coupe de cheveux. Je suis passionné
                        par mon métier et je m&apos;efforce constamment de
                        rester à la pointe des tendances et des techniques pour
                        vous offrir des services de la plus haute qualité. Je
                        suis fier de connaître chacun de mes clients par leur
                        prénom et de comprendre leurs préférences en matière de
                        coiffure. Mon objectif est de vous aider à vous sentir
                        et à paraître au mieux, quel que soit le style que vous
                        choisissiez.
                    </p>
                    <p>Kerwens TELISME</p>
                    <p>Barber</p>
                </div>
                <div className={Style.imgBox}>
                    <Image
                        src={Profile}
                        width={450}
                        height={400}
                        alt="Propriétaier"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
}
function SectionBooking() {
    return (
        <section className={Style.sectionBooking} id="booking">
            <div className={Style.bookingContainer}>
                <div className={Style.textBox}>
                    <Image
                        className={Style.logo}
                        src={Logo}
                        alt="Logo"
                        width={200}
                        height={200}
                        loading="eager"
                    />
                    <p className={Style.title}>
                        Formulaire de Prise de Rendez-vous
                    </p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
