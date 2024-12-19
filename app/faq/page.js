'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function Faq() {
    const [isAccordion, setIsAccordion] = useState(0)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ’S">
                <section className="Faqs-section pt-space pb-space">
                    <div className="container">
                        <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
                            <div className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                FAQ’S
                            </div>
                            <h2 className="stitle">
                                Frequently asked <span className="fw-400">questions</span>
                            </h2>
                        </div>
                        <div className="row g-xxl-7 g-lg-6 g-0 justify-content-center">
                            <div className="col-lg-6">
                                <div className="faq">
                                    <div className="accordion-section">
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 1 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(1)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Est-il nécessaire de prendre rendez-vous ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 1 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Oui, nous recommandons de réserver à l'avance pour garantir un créneau à l'heure souhaitée. Cependant, les clients sans rendez-vous sont également les bienvenus selon la disponibilité.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 2 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(2)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    À quelle fréquence devrais-je me couper les cheveux ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Cela dépend de votre type de cheveux et de la coupe souhaitée, mais généralement, une coupe tous les 2 à 3 semaines est idéale pour maintenir un look soigné.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 3 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(3)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Pouvez-vous m’aider à choisir une coupe de cheveux ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 3 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Absolument ! Nos barbiers expérimentés vous fourniront des conseils personnalisés en fonction de la forme de votre visage, de la texture de vos cheveux et de votre style de vie.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 4 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(4)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Proposez-vous des services de coiffure et de taille de barbe ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 4 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Oui, nous offrons une gamme complète de services, y compris des coupes de cheveux, des tailles de barbe, des modelages et des rasages à l'ancienne pour une expérience de grooming complète.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq">
                                    <div className="accordion-section">
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 5 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(5)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Combien de temps dure une coupe de cheveux ou une taille de barbe ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 5 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Une coupe de cheveux prend généralement entre 30 et 45 minutes, tandis qu’une taille de barbe ou un rasage prend environ 20 à 30 minutes, selon le service.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 6 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(6)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Proposez-vous des services pour les enfants ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 6 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Oui, nous offrons des coupes de cheveux pour enfants dans un environnement agréable et sécurisé, assurant une expérience agréable pour les plus jeunes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 7 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(7)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Que faire si je suis en retard pour mon rendez-vous ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 7 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Veuillez nous informer dès que possible si vous êtes en retard. Si vous êtes à plus de 15 minutes de retard, nous pourrions devoir reprogrammer votre rendez-vous pour garantir une qualité de service optimale pour chaque client.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 8 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(8)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Quels produits utilisez-vous dans le salon ?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion === 8 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Nous utilisons des produits professionnels de haute qualité, spécialement sélectionnés pour différents types de cheveux, afin de garantir des résultats optimaux et maintenir la santé de vos cheveux et de votre barbe.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}