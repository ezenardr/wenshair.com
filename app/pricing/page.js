

import Layout from "@/components/layout/Layout"
import Link from "next/link"
function CheckIcon() {
    return <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_6574_63505" fill="white">
            <path
                d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z"/>
        </mask>
        <path
            d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z"
            fill="#f2d129" mask="url(#path-1-inside-1_6574_63505)"/>
    </svg>
}

export default function Pricing() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nos Tarifs">
                <section className="pricing-section pt-space pb-space position-relative">
                    <div className="container">
                        <div className="pricing-title mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
                            <div
                                className="radius-btn cmn-border text-capitalize d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                pricing plans
                            </div>
                            <h2 className="stitle">
                                Transparence et Excellence <span className="fw-400 d-block">Nos Tarifs</span>
                            </h2>
                        </div>
                        <div className="row g-xxl-7 g-lg-6 g-3 justify-content-center">
                            <div className="col-lg-12 col-md-6">
                                <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                    <div
                                        className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                        <div className="box">
                                            <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                Coupes de cheveux
                                            </h4>
                                            <p className="pra-clr">
                                                Nous proposons des coupes modernes, classiques ou personnalisées,
                                                adaptées à chaque style.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                        <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Adaptabilité
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Précision
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Confort
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Durabilité
                                                </span>
                                            </li>
                                        </ul>
                                        <div
                                            className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                            <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">

                                                <span className="month">
                                                    A partir de
                                                </span>
                                                $30
                                            </h4>
                                            <Link href={"/contact?plan=coupes de cheveux#book"}
                                                  className="price-under d-flex align-items-center gap-2">
                                                Book
                                                <span className="rot60 d-block">
                                                    <i className="fas fa-arrow-up"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                    <div
                                        className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                        <div className="box">
                                            <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                Taille et entretien de barbe
                                            </h4>
                                            <p className="pra-clr">
                                                Nous utiliserons des techniques adaptées à la texture de votre barbe et
                                                à vos préférences personnelles.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                        <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Précision
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Confort
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Adaptabilité
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Soin
                                                </span>
                                            </li>
                                        </ul>
                                        <div
                                            className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                            <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">

                                                <span className="month">
                                                    A partir de
                                                </span>
                                                $35
                                            </h4>
                                            <Link href={"/contact?plan=taille et entretien de barbe#book"}
                                                  className="price-under d-flex align-items-center gap-2">
                                                Book
                                                <span className="rot60 d-block">
                                                    <i className="fas fa-arrow-up"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                    <div
                                        className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                        <div className="box">
                                            <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                Dreadlocks
                                            </h4>
                                            <p className="pra-clr">
                                                Nous utilisons des produits naturels adaptés à tous les types de
                                                cheveux, garantissant des locks solides, bien définies et en parfaite
                                                santé.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                        <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Personnalisation
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Durabilité
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Soin Naturel
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Entretien Facile
                                                </span>
                                            </li>
                                        </ul>
                                        <div
                                            className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                            <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">

                                                <span className="month">
                                                    A partir de
                                                </span>
                                                $40
                                            </h4>
                                            <Link href={"/contact?plan=dreadlocks#book"}
                                                  className="price-under d-flex align-items-center gap-2">
                                                Book
                                                <span className="rot60 d-block">
                                                    <i className="fas fa-arrow-up"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                    <div
                                        className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                        <div className="box">
                                            <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                Soins capillaires
                                            </h4>
                                            <p className="pra-clr">
                                                Prenez soin de vos cheveux grâce à nos traitements spécialisés conçus pour revitaliser votre chevelure.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                        <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Précision
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Rafraîchissement
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Commodité
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                <CheckIcon/>
                                                <span className="pra-clr">
                                                    Soutien
                                                </span>
                                            </li>
                                        </ul>
                                        <div
                                            className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                            <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">

                                                <span className="month">
                                                    A partir de
                                                </span>
                                                $45
                                            </h4>
                                            <Link href={"/contact?plan=soins capillaires#book"}
                                                  className="price-under d-flex align-items-center gap-2">
                                                Book
                                                <span className="rot60 d-block">
                                                    <i className="fas fa-arrow-up"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Element */}
                    <img src="/assets/img/pricing/pricing-shape.png" alt="img" className="prcing-shape"/>
                </section>

            </Layout>
        </>
    )
}