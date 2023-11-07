'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonPrimary } from '../Buttons/Buttons';
import Style from './navigation.module.scss';
import Logo from '@/img/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [sticky, setSticky] = useState<boolean>(false);
    const pathName = usePathname();
    console.log(pathName);
    function toggleScticky() {
        if (window.scrollY > 50) setSticky(true);
        else setSticky(false);
    }
    useEffect(function () {
        document.addEventListener('scroll', toggleScticky);
        return () => document.removeEventListener('scroll', toggleScticky);
    }, []);
    return (
        <nav className={`${Style.navigation} ${sticky && Style.sticky}`}>
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
                <li onClick={() => setIsOpen(false)}>
                    <Link
                        className={`${Style.navLink} ${
                            pathName === '/' ? Style.active : ''
                        }`}
                        href="/"
                    >
                        Accueil
                    </Link>
                </li>
                <li onClick={() => setIsOpen(false)}>
                    <Link
                        className={`${Style.navLink} ${
                            pathName === '/gallery' ? Style.active : ''
                        }`}
                        href="/gallery"
                    >
                        Gallery
                    </Link>
                </li>
                <li onClick={() => setIsOpen(false)}>
                    <Link className={Style.navLink} href="#pricing">
                        Pricing
                    </Link>
                </li>
                <li onClick={() => setIsOpen(false)}>
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
