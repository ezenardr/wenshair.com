'use client';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import Link from 'next/link';
import Logo from '@/img/logo.png';
import Qr from '@/img/qr-code.webp';
import Why from '@/img/why-us.png';
import Profile from '@/img/profile2.webp';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';
import { ImLocation2 } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { MdArrowRight } from 'react-icons/md';
import { ButtonPrimary, ButtonSecondary } from '@/components/Buttons/Buttons';
import ContactForm from '@/components/ContactForm/ContactForm';
import Navigation from '@/components/Navigations/Navigation';
import ImagesCarousel from '@/components/ImagesCarousel/ImagesCarousel';
import Style from './page.module.scss';

const variants = (direction: string, delay: number) => {
    return {
        variants: fadeIn(direction, delay),
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.7 },
    };
};
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
        <>
            <header className={Style.header}>
                <Navigation />
                <motion.h1 {...variants('up', 0)}>
                    Premium <br />{' '}
                    <span className={Style.accent}>WensHair</span> <br />
                    Barbershop
                </motion.h1>
                <div className={Style.heroTextBox}>
                    <motion.div
                        {...variants('up', 0.1)}
                        className={Style.heroContentBox}
                    >
                        <p className={Style.contentTitle}>Rapide</p>
                        <div className={Style.diamond}></div>
                        <p className={Style.contentText}>
                            Avec une expertise rapide, Soyez prêt à briller en
                            un rien de temps.
                        </p>
                    </motion.div>
                    <motion.div
                        {...variants('up', 0.1)}
                        className={Style.heroContentBox}
                    >
                        <p className={Style.contentTitle}>Cool</p>
                        <div className={Style.diamond}></div>
                        <p className={Style.contentText}>
                            Le style est notre marque. Une ambiance
                            décontractée, où l&apos;élégance est la norme.
                        </p>
                    </motion.div>
                    <motion.div
                        {...variants('up', 0.1)}
                        className={Style.heroContentBox}
                    >
                        <p className={Style.contentTitle}>Abordable</p>
                        <div className={Style.diamond}></div>
                        <p className={Style.contentText}>
                            Le raffinement n&apos;a pas de prix.! Obtenez un
                            look de star sans vider votre portefeuille.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    {...variants('up', 0.2)}
                    className={Style.contactBox}
                >
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
                            <Link
                                href="tel:+1(514)5574194"
                                className={Style.info}
                            >
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
                </motion.div>
            </header>
        </>
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
            <div className={Style.whyUsContainer}>
                <motion.div {...variants('right', 0)}>
                    <Image
                        alt="man getting facial"
                        src={Why}
                        width={700}
                        height={500}
                        loading="eager"
                    />
                </motion.div>
                <div className={Style.textBox}>
                    <motion.h2
                        {...variants('left', 0.1)}
                        className={Style.title}
                    >
                        Raison de me Préférer?
                    </motion.h2>
                    <ul className={Style.textList}>
                        {reasons.map((reason) => {
                            return (
                                <motion.li
                                    {...variants('left', 0.2)}
                                    key={Math.random()}
                                >
                                    <MdArrowRight className={Style.icon} />
                                    <p>{reason}</p>
                                </motion.li>
                            );
                        })}
                    </ul>
                    <ButtonPrimary path="#booking">
                        Faites Votre Réservation !
                    </ButtonPrimary>
                </div>
            </div>
        </section>
    );
}
function PricingSection() {
    return (
        <section className={Style.sectionPricing} id="pricing">
            <div className={Style.pricingContainer}>
                <motion.h2 {...variants('up', 0)} className={Style.title}>
                    Mes Tarifs
                </motion.h2>
                <div className={Style.pricing}>
                    <div className={Style.items}>
                        <motion.div
                            {...variants('up', 0.1)}
                            className={Style.item}
                        >
                            <p>Coupe Simple</p>
                            <p>$30+</p>
                        </motion.div>
                        <motion.div
                            {...variants('up', 0.1)}
                            className={Style.item}
                        >
                            <p>Avec Barbe</p>
                            <p>$35+</p>
                        </motion.div>
                        <motion.div
                            {...variants('up', 0.1)}
                            className={Style.item}
                        >
                            <p>Contour</p>
                            <p>$15+</p>
                        </motion.div>
                    </div>
                    <div className={Style.items}>
                        <motion.div
                            {...variants('up', 0.1)}
                            className={Style.item}
                        >
                            <p>Sourcils</p>
                            <p>$10+</p>
                        </motion.div>
                        <motion.div
                            {...variants('up', 0.1)}
                            className={Style.item}
                        >
                            <p>Autres</p>
                            <p>Sur Demande</p>
                        </motion.div>
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
                <ImagesCarousel />
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
                    <motion.h2
                        {...variants('right', 0.1)}
                        className={Style.title}
                    >
                        A Propos
                    </motion.h2>
                    <motion.p {...variants('up', 0.1)} className={Style.text}>
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
                    </motion.p>
                    <motion.p {...variants('up', 0.3)}>
                        Kerwens TELISME
                    </motion.p>
                    <motion.p {...variants('up', 0.3)}>Barber</motion.p>
                </div>
                <motion.div {...variants('up', 0)} className={Style.imgBox}>
                    <Image
                        src={Profile}
                        width={450}
                        height={400}
                        alt="Propriétaier"
                        loading="eager"
                    />
                </motion.div>
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
