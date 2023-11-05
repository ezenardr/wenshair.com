'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonPrimary } from '../Buttons/Buttons';
import Style from './navigation.module.scss';
import Logo from '@/img/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className={Style.navigation}>
            <Link href="/" className={Style.logoLink}>
                <Image
                    className={Style.logo}
                    src={Logo}
                    alt="Logo"
                    width={75}
                    height={75}
                    loading="eager"
                />
            </Link>
            <ul className={`${Style.navList} ${isOpen && Style.isOpen}`}>
                <li>
                    <Link
                        className={`${Style.navLink} ${Style.active}`}
                        href="/"
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link className={Style.navLink} href="/gallery">
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link className={Style.navLink} href="#pricing">
                        Pricing
                    </Link>
                </li>
                <li>
                    <ButtonPrimary path="#booking">Book Now</ButtonPrimary>
                </li>
            </ul>
            <div
                className={Style.iconBox}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <AiOutlineMenu className={Style.icon} />
            </div>
        </nav>
    );
}
