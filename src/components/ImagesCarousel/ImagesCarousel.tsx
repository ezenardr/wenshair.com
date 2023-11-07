'use client';
import { useState } from 'react';
import Image from 'next/image';
import Style from './carousel.module.scss';
import Image4 from '@/img/4.webp';
import Image8 from '@/img/8.webp';
import Image9 from '@/img/9.webp';
import Image12 from '@/img/12.webp';

export default function ImagesCarousel() {
    return (
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
    );
}
