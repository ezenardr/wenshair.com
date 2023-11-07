'use client';
import { useEffect, useState } from 'react';
import Style from './scroll.module.scss';

export default function ScrollToTop() {
    const [scrolled, setScrolled] = useState<boolean>(false);

    function toggleVisibility() {
        if (window.scrollY > 700) setScrolled(true);
        else setScrolled(false);
    }
    useEffect(function () {
        document.addEventListener('scroll', toggleVisibility);
        return () => document.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <>
            {scrolled && (
                <div
                    className={Style.btn}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <div className={Style.icon}>&#x2191;</div>
                </div>
            )}
        </>
    );
}
