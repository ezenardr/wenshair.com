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
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Plus qu'un simple salon, nous sommes un lieu où vous pouvez vous détendre, prendre soin de vous et repartir avec une confiance renouvelée.
                                    </p>
                                    <ul className="common-social d-flex align-items-center gap-2">
                                        <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <Link href="https://www.instagram.com/wenshair/" target={"_blank"}  className="d-center">
                                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.9995 0.590942C8.03687 0.590942 7.66507 0.603897 6.50147 0.656852C5.34014 0.710033 4.54744 0.893897 3.85382 1.16367C3.13634 1.44231 2.52772 1.81503 1.92138 2.42162C1.31458 3.02799 0.941863 3.63662 0.662326 4.3539C0.39188 5.04776 0.207795 5.84071 0.155523 7.00162C0.10348 8.16526 0.0898438 8.53731 0.0898438 11.5C0.0898438 14.4628 0.103025 14.8334 0.155751 15.9971C0.209159 17.1584 0.393016 17.9512 0.662554 18.6448C0.941409 19.3623 1.31412 19.9709 1.9207 20.5773C2.52682 21.1841 3.13543 21.5578 3.85246 21.8364C4.54653 22.1062 5.33946 22.29 6.50056 22.3432C7.66416 22.3962 8.03574 22.4091 10.9981 22.4091C13.961 22.4091 14.3317 22.3962 15.4953 22.3432C16.6566 22.29 17.4502 22.1062 18.1443 21.8364C18.8615 21.5578 19.4693 21.1841 20.0754 20.5773C20.6822 19.9709 21.0549 19.3623 21.3344 18.645C21.6026 17.9512 21.7867 17.1582 21.8412 15.9973C21.8935 14.8337 21.9071 14.4628 21.9071 11.5C21.9071 8.53731 21.8935 8.16549 21.8412 7.00185C21.7867 5.84049 21.6026 5.04776 21.3344 4.35412C21.0549 3.63662 20.6822 3.02799 20.0754 2.42162C19.4686 1.81481 18.8618 1.44208 18.1436 1.16367C17.4482 0.893897 16.655 0.710033 15.4937 0.656852C14.3301 0.603897 13.9597 0.590942 10.9961 0.590942H10.9995ZM10.0209 2.55685C10.3114 2.5564 10.6354 2.55685 10.9995 2.55685C13.9122 2.55685 14.2574 2.56731 15.4076 2.61958C16.4712 2.66822 17.0484 2.84594 17.433 2.99526C17.942 3.19299 18.305 3.42935 18.6866 3.81117C19.0684 4.19299 19.3047 4.55662 19.5029 5.06571C19.6522 5.44981 19.8302 6.02708 19.8786 7.09071C19.9308 8.24071 19.9422 8.58617 19.9422 11.4975C19.9422 14.4089 19.9308 14.7543 19.8786 15.9043C19.8299 16.968 19.6522 17.5453 19.5029 17.9293C19.3052 18.4384 19.0684 18.8009 18.6866 19.1825C18.3047 19.5644 17.9423 19.8007 17.433 19.9984C17.0489 20.1484 16.4712 20.3257 15.4076 20.3743C14.2576 20.4266 13.9122 20.438 10.9995 20.438C8.08665 20.438 7.74143 20.4266 6.59146 20.3743C5.52786 20.3253 4.95061 20.1475 4.56584 19.9982C4.05677 19.8005 3.69314 19.5641 3.31134 19.1823C2.92953 18.8005 2.69317 18.4378 2.495 17.9284C2.34568 17.5443 2.16774 16.9671 2.11933 15.9034C2.06706 14.7534 2.0566 14.408 2.0566 11.4948C2.0566 8.58162 2.06706 8.23799 2.11933 7.08799C2.16796 6.02435 2.34568 5.44708 2.495 5.06253C2.69272 4.55344 2.92953 4.18981 3.31134 3.80799C3.69314 3.42617 4.05677 3.18981 4.56584 2.99162C4.95038 2.84162 5.52786 2.66435 6.59146 2.61549C7.5978 2.57003 7.98779 2.5564 10.0209 2.55412V2.55685ZM16.8225 4.36821C16.0998 4.36821 15.5135 4.9539 15.5135 5.67685C15.5135 6.39958 16.0998 6.98594 16.8225 6.98594C17.5452 6.98594 18.1316 6.39958 18.1316 5.67685C18.1316 4.95412 17.5452 4.36776 16.8225 4.36776V4.36821ZM10.9995 5.89776C7.90574 5.89776 5.39741 8.40617 5.39741 11.5C5.39741 14.5939 7.90574 17.1012 10.9995 17.1012C14.0933 17.1012 16.6007 14.5939 16.6007 11.5C16.6007 8.40617 14.0931 5.89776 10.9993 5.89776H10.9995ZM10.9995 7.86367C13.0076 7.86367 14.6358 9.49162 14.6358 11.5C14.6358 13.5082 13.0076 15.1364 10.9995 15.1364C8.99116 15.1364 7.36326 13.5082 7.36326 11.5C7.36326 9.49162 8.99116 7.86367 10.9995 7.86367Z"
                                                        fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                            <Link href="/#" className="d-center">
                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.48733 17.0737C9.15607 17.0737 10.5089 15.879 10.5089 14.0521V0.5H14.1325C13.9293 2.97153 16.3862 5.35897 19.0958 5.30437V8.71184C16.7785 8.71184 14.8081 7.73201 14.1222 7.18824V14.0521C14.1222 17.0737 11.7452 20.5 7.48733 20.5C3.22942 20.5 0.904297 17.0737 0.904297 14.0521C0.904297 9.78751 5.41734 7.3142 8.40643 7.91871V11.3894C8.25606 11.3362 7.86828 11.2576 7.53798 11.2576C5.85537 11.1955 4.4658 12.5602 4.4658 14.0521C4.4658 15.7209 5.81858 17.0737 7.48733 17.0737Z"
                                                        fill="white"/>
                                                </svg>

                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Liens Rapides
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_43041" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href={"/about"} className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                A Propos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/service"} className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Nos Services
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
                                        <li>
                                            <Link href={"/contact"} className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Nous Contacter
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Services
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4305)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4305" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
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
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Newsletter
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4306)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4306" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Sign up to seargin weekly newsletter to get the latest updates.
                                    </p>
                                    <form action="#" className="foote-formv1 d-flex align-items-center justify-content-between" data-aos="zoom-in-down" data-aos-duration={1200}>
                                        <input type="email" placeholder="Enter Email Address" />
                                        <button type="submit" className="themebg d-center rounded-1">
                                            <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_6308_51)">
                                                    <path d="M24.177 2.42216C24.294 1.87753 23.7601 1.4183 23.2392 1.61705L0.645685 10.242C0.512852 10.2927 0.398516 10.3825 0.317763 10.4995C0.23701 10.6165 0.193635 10.7553 0.193361 10.8975C0.193087 11.0397 0.235926 11.1786 0.316228 11.2959C0.396529 11.4133 0.510518 11.5035 0.643154 11.5547L6.99011 14.006V21.7269C6.9901 21.8851 7.04344 22.0387 7.14153 22.1628C7.23961 22.287 7.3767 22.3744 7.53062 22.411C7.68454 22.4476 7.84631 22.4312 7.98976 22.3645C8.13322 22.2977 8.24997 22.1846 8.32116 22.0433L10.9462 16.8342L17.3522 21.5884C17.7419 21.8776 18.302 21.6936 18.4438 21.2289C24.425 1.61859 24.1664 2.47143 24.177 2.42216ZM18.5999 4.8933L7.59357 12.7316L2.85793 10.9027L18.5999 4.8933ZM8.39634 13.8863L17.9901 7.05398C9.7348 15.7628 10.166 15.3044 10.13 15.3529C10.0765 15.4248 10.223 15.1444 8.39634 18.7692V13.8863ZM17.3896 19.8649L11.7508 15.6802L21.9465 4.92423L17.3896 19.8649Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_6308_51">
                                                        <rect width={24} height={24} fill="white" transform="translate(0.193359)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-version-one d-sm-flex gap-sm-0 gap-4 d-grid align-items-center justify-content-sm-between justify-content-center bg2-clr px-xxl-7 px-6 py-xxl-6 py-xl-6 py-7 mb-xxl-10 mb-lg-9 mb-sm-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1600}>
                        <Link href="/" className="footer-logov1 m-sm-0 m-auto">
                            <img width={200} src="/assets/img/logo/logo.png" alt="img" />
                        </Link>
                        {/*<Link href="/#mains" className="footer-topscroll d-center themebg">*/}
                        {/*    <i className="fas fa-arrow-up" />*/}
                        {/*</Link>*/}
                        <p className="pra-clr">
                            &copy; {new Date().getFullYear()} Tous Droits Réservé par <Link href="https://webwazedigital.com" className="theme-clr">Web Waze Digital</Link> - Theme by Xstar &hearts;
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
