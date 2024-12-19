import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-version-one zindex1 position-relative">
                <div className="container">
                    <div className="footer-topversion-one pt-20 pb-20">
                        <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        A Propos
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4304" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#f2d129" />
                                                    <stop offset={1} stopColor="#f2d129" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Plus qu'un simple salon, nous sommes un lieu où vous pouvez prendre soin de vous et repartir avec une confiance renouvelée.
                                    </p>
                                    <ul className="common-social d-flex align-items-center gap-2">
                                        <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <Link href="https://web.facebook.com/wens.amilcar" target={"_blank"}
                                                  className="d-center">
                                                <svg width={10} height={16} viewBox="0 0 10 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                        <path
                                                            d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z"
                                                            fill="white"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6308_28">
                                                            <rect width={10} height={16} fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <Link href="https://www.instagram.com/wenshair/" target={"_blank"}
                                                  className="d-center">
                                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.9995 0.590942C8.03687 0.590942 7.66507 0.603897 6.50147 0.656852C5.34014 0.710033 4.54744 0.893897 3.85382 1.16367C3.13634 1.44231 2.52772 1.81503 1.92138 2.42162C1.31458 3.02799 0.941863 3.63662 0.662326 4.3539C0.39188 5.04776 0.207795 5.84071 0.155523 7.00162C0.10348 8.16526 0.0898438 8.53731 0.0898438 11.5C0.0898438 14.4628 0.103025 14.8334 0.155751 15.9971C0.209159 17.1584 0.393016 17.9512 0.662554 18.6448C0.941409 19.3623 1.31412 19.9709 1.9207 20.5773C2.52682 21.1841 3.13543 21.5578 3.85246 21.8364C4.54653 22.1062 5.33946 22.29 6.50056 22.3432C7.66416 22.3962 8.03574 22.4091 10.9981 22.4091C13.961 22.4091 14.3317 22.3962 15.4953 22.3432C16.6566 22.29 17.4502 22.1062 18.1443 21.8364C18.8615 21.5578 19.4693 21.1841 20.0754 20.5773C20.6822 19.9709 21.0549 19.3623 21.3344 18.645C21.6026 17.9512 21.7867 17.1582 21.8412 15.9973C21.8935 14.8337 21.9071 14.4628 21.9071 11.5C21.9071 8.53731 21.8935 8.16549 21.8412 7.00185C21.7867 5.84049 21.6026 5.04776 21.3344 4.35412C21.0549 3.63662 20.6822 3.02799 20.0754 2.42162C19.4686 1.81481 18.8618 1.44208 18.1436 1.16367C17.4482 0.893897 16.655 0.710033 15.4937 0.656852C14.3301 0.603897 13.9597 0.590942 10.9961 0.590942H10.9995ZM10.0209 2.55685C10.3114 2.5564 10.6354 2.55685 10.9995 2.55685C13.9122 2.55685 14.2574 2.56731 15.4076 2.61958C16.4712 2.66822 17.0484 2.84594 17.433 2.99526C17.942 3.19299 18.305 3.42935 18.6866 3.81117C19.0684 4.19299 19.3047 4.55662 19.5029 5.06571C19.6522 5.44981 19.8302 6.02708 19.8786 7.09071C19.9308 8.24071 19.9422 8.58617 19.9422 11.4975C19.9422 14.4089 19.9308 14.7543 19.8786 15.9043C19.8299 16.968 19.6522 17.5453 19.5029 17.9293C19.3052 18.4384 19.0684 18.8009 18.6866 19.1825C18.3047 19.5644 17.9423 19.8007 17.433 19.9984C17.0489 20.1484 16.4712 20.3257 15.4076 20.3743C14.2576 20.4266 13.9122 20.438 10.9995 20.438C8.08665 20.438 7.74143 20.4266 6.59146 20.3743C5.52786 20.3253 4.95061 20.1475 4.56584 19.9982C4.05677 19.8005 3.69314 19.5641 3.31134 19.1823C2.92953 18.8005 2.69317 18.4378 2.495 17.9284C2.34568 17.5443 2.16774 16.9671 2.11933 15.9034C2.06706 14.7534 2.0566 14.408 2.0566 11.4948C2.0566 8.58162 2.06706 8.23799 2.11933 7.08799C2.16796 6.02435 2.34568 5.44708 2.495 5.06253C2.69272 4.55344 2.92953 4.18981 3.31134 3.80799C3.69314 3.42617 4.05677 3.18981 4.56584 2.99162C4.95038 2.84162 5.52786 2.66435 6.59146 2.61549C7.5978 2.57003 7.98779 2.5564 10.0209 2.55412V2.55685ZM16.8225 4.36821C16.0998 4.36821 15.5135 4.9539 15.5135 5.67685C15.5135 6.39958 16.0998 6.98594 16.8225 6.98594C17.5452 6.98594 18.1316 6.39958 18.1316 5.67685C18.1316 4.95412 17.5452 4.36776 16.8225 4.36776V4.36821ZM10.9995 5.89776C7.90574 5.89776 5.39741 8.40617 5.39741 11.5C5.39741 14.5939 7.90574 17.1012 10.9995 17.1012C14.0933 17.1012 16.6007 14.5939 16.6007 11.5C16.6007 8.40617 14.0931 5.89776 10.9993 5.89776H10.9995ZM10.9995 7.86367C13.0076 7.86367 14.6358 9.49162 14.6358 11.5C14.6358 13.5082 13.0076 15.1364 10.9995 15.1364C8.99116 15.1364 7.36326 13.5082 7.36326 11.5C7.36326 9.49162 8.99116 7.86367 10.9995 7.86367Z"
                                                        fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                            <Link href="https://www.tiktok.com/@wenshair1" target={'_blank'} className="d-center">
                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.48733 17.0737C9.15607 17.0737 10.5089 15.879 10.5089 14.0521V0.5H14.1325C13.9293 2.97153 16.3862 5.35897 19.0958 5.30437V8.71184C16.7785 8.71184 14.8081 7.73201 14.1222 7.18824V14.0521C14.1222 17.0737 11.7452 20.5 7.48733 20.5C3.22942 20.5 0.904297 17.0737 0.904297 14.0521C0.904297 9.78751 5.41734 7.3142 8.40643 7.91871V11.3894C8.25606 11.3362 7.86828 11.2576 7.53798 11.2576C5.85537 11.1955 4.4658 12.5602 4.4658 14.0521C4.4658 15.7209 5.81858 17.0737 7.48733 17.0737Z"
                                                        fill="white"/>
                                                </svg>

                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                            <Link href="https://www.youtube.com/@loyaltyHT" className="d-center">
                                                <svg width={18} height={12} viewBox="0 0 18 12" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z"
                                                        fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                            <Link href="https://www.youtube.com/@loyaltyHT" className="d-center">
                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                          d="M12.0259 0.198048C14.8119 0.334971 17.408 1.48384 19.3908 3.46799C21.5058 5.58431 22.67 8.39748 22.6688 11.3892C22.6663 17.5628 17.6405 22.5859 11.4665 22.5859C9.14477 22.5859 7.2998 21.8725 6.1085 21.2231L0.169922 22.7801L1.75922 16.9779C0.77889 15.2799 0.263045 13.3538 0.263853 11.3803C0.266332 5.20683 5.29172 0.184204 11.4663 0.184204L12.0259 0.198048ZM6.38361 19.196L6.72366 19.3977C8.15323 20.2456 9.79189 20.6943 11.4627 20.6949H11.4664C16.5984 20.6949 20.7753 16.52 20.7774 11.3885C20.7783 8.90187 19.8108 6.56367 18.0528 4.80463C16.2949 3.04548 13.9571 2.07613 11.4702 2.07533C6.33424 2.07533 2.15731 6.24981 2.15527 11.3809C2.15457 13.1394 2.64681 14.852 3.57885 16.3336L3.80024 16.6858L2.85962 20.12L6.38361 19.196ZM17.1101 14.0517C17.0402 13.9349 16.8536 13.865 16.5737 13.7249C16.2938 13.5849 14.9176 12.9081 14.6611 12.8146C14.4045 12.7214 14.2179 12.6747 14.0313 12.9547C13.8447 13.2348 13.3083 13.865 13.1449 14.0517C12.9817 14.2384 12.8184 14.2618 12.5386 14.1217C12.2586 13.9818 11.3567 13.6863 10.2876 12.7331C9.45545 11.9913 8.89369 11.0751 8.7304 10.795C8.56716 10.515 8.71299 10.3635 8.85311 10.2241C8.97905 10.0987 9.13307 9.89728 9.27303 9.73391C9.41298 9.57059 9.4596 9.45382 9.55294 9.26718C9.64622 9.08043 9.59956 8.91711 9.5296 8.77707C9.4596 8.63696 8.89983 7.25987 8.66659 6.69968C8.43933 6.1542 8.20857 6.22805 8.03677 6.21943C7.87369 6.21135 7.68691 6.20957 7.50034 6.20957C7.31371 6.20957 7.01047 6.27954 6.75389 6.55969C6.49732 6.83973 5.77421 7.51664 5.77421 8.89363C5.77421 10.2708 6.77723 11.601 6.91718 11.7878C7.05714 11.9746 8.89094 14.8003 11.6988 16.0122C12.3666 16.3005 12.888 16.4726 13.2945 16.6015C13.9651 16.8145 14.5753 16.7845 15.0576 16.7124C15.5954 16.6321 16.7137 16.0356 16.9469 15.3822C17.1801 14.7285 17.1801 14.1684 17.1101 14.0517Z"
                                                          fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down"
                                        data-aos-duration={1900}>
                                        Liens Rapides
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)"
                                                  stroke="url(#paint0_linear_6308_4304)" strokeWidth={2}/>
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_43041" x1="4.02912"
                                                                y1="0.000277584" x2={80} y2="0.000110496"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#f2d129"/>
                                                    <stop offset={1} stopColor="#f2d129" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in"
                                        data-aos-duration={1400}>
                                        <li>
                                            <Link href={"/about"}
                                                  className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr"/>
                                                </span>
                                                A Propos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/service"}
                                                  className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr"/>
                                                </span>
                                                Nos Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/pricing"}
                                                  className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr"/>
                                                </span>
                                                Nos Tarifs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/faq"}
                                                  className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr"/>
                                                </span>
                                                FAQS
                                            </Link>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <Link href={"/blog-list"} className="d-flex align-items-center gap-2 flink-items pra-clr">*/}
                                        {/*        <span className="ani-icons">*/}
                                        {/*            <i className="fas fa-angle-double-right pra-clr" />*/}
                                        {/*        </span>*/}
                                        {/*        Our Blogs*/}
                                        {/*    </Link>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down"
                                        data-aos-duration={1900}>
                                        Services
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4305)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4305" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#f2d129" />
                                                    <stop offset={1} stopColor="#f2d129" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href={"/service"} className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Coupes de cheuveux
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/service"} className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Coupe de barbe
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/service"} className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Coiffure enfant
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/service"} className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Entretien et retouches
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down"
                                        data-aos-duration={1900}>
                                        Let's talk
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)"
                                                  stroke="url(#paint0_linear_6308_4306)" strokeWidth={2}/>
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4306" x1="4.02912"
                                                                y1="0.000277584" x2={80} y2="0.000110496"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#f2d129"/>
                                                    <stop offset={1} stopColor="#f2d129" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Contactez-nous et réservez votre rendez-vous dès aujourd’hui pour une expérience
                                        unique !
                                    </p>

                                        <Link href={"/contact"}
                                              className="d-flex w-100 align-items-center justify-content-center gap-sm-3 gap-2 touch-btn cmn-btn">
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up"/>
                                        </span>
                                            Get In Touch
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="footer-bottom-version-one d-sm-flex gap-sm-0 gap-4 d-grid align-items-center justify-content-sm-between justify-content-center bg2-clr px-xxl-7 px-6 py-xxl-6 py-xl-6 py-7 mb-xxl-10 mb-lg-9 mb-sm-8 mb-5"
                        data-aos="zoom-in-up" data-aos-duration={1600}>
                        <Link href="/" className="footer-logov1 m-sm-0 m-auto">
                            <img width={200} src="/assets/img/logo/logo.png" alt="img"/>
                        </Link>
                        {/*<Link href="/#mains" className="footer-topscroll d-center themebg">*/}
                        {/*    <i className="fas fa-arrow-up" />*/}
                        {/*</Link>*/}
                        <p className="pra-clr">
                            &copy; {new Date().getFullYear()} Tous Droits Réservé par <Link target={'_blank'}
                                                                                            href="https://webwazedigital.com"
                                                                                            className="theme-clr">Web
                            Waze Digital <i className="fa fa-external-link"></i></Link>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
