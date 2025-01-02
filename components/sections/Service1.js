'use client'
import { useState } from 'react'
import Link from "next/link"
export default function Service1({showActionLink = true}) {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <section className="service-section pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                Ce que nous offrons
                            </div>
                            <h2 className="stitle">
                                <span className="fw-400">Services</span> d’Excellence
                            </h2>
                        </div>
                        {showActionLink && <Link href={"/service"} className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            Voir tout nos services
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>}
                    </div>
                    {/*Service Tabing section*/}
                    <div className="row g-xxl-6 g-4">
                        <div className="service-tabing-wrap Faqs-section">
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 1 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(1)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                01
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href={"/service"} className="white-clr whitehover">
                                                    Coupes de cheveux
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Que vous soyez à la recherche d'une coupe tendance ou d'un rafraîchissement rapide, nous proposons des coupes modernes, classiques ou personnalisées, adaptées à chaque style.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Adaptabilité
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Précision
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Confort
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Durabilité
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab1.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 2 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(2)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                02
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href={"/service"} className="white-clr whitehover">
                                                   Taille et entretien de barbe
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Offrez à votre barbe l'attention qu'elle mérite. Que ce soit pour une taille nette, un contour précis ou une coupe complète, nous utiliserons des techniques adaptées à la texture de votre barbe et à vos préférences personnelles.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Précision
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Confort
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Adaptabilité
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Soin
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab2.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 3 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(3)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                03
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href={"/service"} className="white-clr whitehover">
                                                    Dreadlocks
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                               Nous utilisons des produits naturels adaptés à tous les types de cheveux, garantissant des locks solides, bien définies et en parfaite santé.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Personnalisation
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Durabilité
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Soin Naturel
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Entretien Facile
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab3.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${isAccordion === 4 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(4)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                04
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href={"/service"} className="white-clr whitehover">
                                                    Soins capillaires
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Prenez soin de vos cheveux grâce à nos traitements spécialisés conçus pour nourrir, réparer et revitaliser votre chevelure.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Précision
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Rafraîchissement
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Commodité
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Soutien
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab4.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Service Tabing section*/}
                </div>
            </section>
        </>
    )
}
