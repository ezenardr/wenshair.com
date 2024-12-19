'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Tilt } from 'react-tilt'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Team3 from "@/components/sections/Team3";
import Testimonial4 from "@/components/sections/Testimonial4";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

const toltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
}
export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="A Propos">
                <div>
                    <section className="pt-space pb-space section-bg">
                        <div className="container">
                            <div className="row g-6 justify-content-between">
                                <div className="col-lg-6 pe-lg-14">
                                    <div className="d-flex gap-xxl-7 gap-xl-5 gap-4 position-relative z-index-1">
                                        <div className="about-small-thumb w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                            <img src="/assets/img/about/8.webp" alt="img" className="w-100" />
                                        </div>
                                        <div className="about-small-thumb w-100 mt-xxl-10 mt-xl-7 mt-lg-5 mt-3" data-aos="zoom-in" data-aos-duration={1800}>
                                            <img src="/assets/img/about/4.webp" alt="img" className="w-100" />
                                        </div>
                                        {/*- About Arrow */}
                                        <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="about-tumb-arrow" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-samll-content">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                Nous sommes fiers
                                            </div>
                                            <h2 className="stitle d-flex align-items-center mb-xxl-8 mb-xl-7 mb-lg-6 mb-5 gap-xxl-7 gap-xl-5 gap-3" data-aos="zoom-in-left" data-aos-duration={1700}>
                                                <img src="/assets/img/element/arrow-right-storke.png" alt="img" data-aos="zoom-in-up" data-aos-duration={2000} />
                                                des Styles Uniques &amp; Authentiques
                                            </h2>
                                            <p className="white-clr mb-xxl-8 mb-xl-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1400}>
                                                Nous offrons des techniques modernes et personnalisées pour sublimer chaque style. À chaque rendez-vous, créer une nouvelle norme qui allie tradition et innovation, pour une expérience de grooming unique et harmonieuse.
                                            </p>
                                            <div className="result-progress-wrap" data-aos="zoom-in-up" data-aos-duration={1800}>
                                                <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Ambiance Conviviale et Relaxante
                                                        </span>
                                                        <span className="cons">88%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                                <div className="progres-item">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Précision et Expertise
                                                        </span>
                                                        <span className="cons">88%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Testimonial4/>
                </div>
            </Layout>
        </>
    )
}