'use client';
import Style from './form.module.scss';
import { FormEvent } from 'react';

export default function ContactForm() {
    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
    }
    return (
        <form className={Style.form} onSubmit={(e) => submitHandler(e)}>
            <div className={Style.inputBox}>
                <input type="text" name="Nom" required />
                <label htmlFor="Nom">Nom et prénom</label>
            </div>
            <div className={Style.inputBox}>
                <input type="email" name="email" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className={Style.inputBox}>
                <input type="tel" name="phone" required />
                <label htmlFor="phone">Téléphone</label>
            </div>

            <div className={Style.wrapper}>
                <div className={Style.card}>
                    <input type="radio" name="options" value="simple" />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        BASIC
                    </label>
                </div>
                <div className={Style.card}>
                    <input type="radio" name="options" value="barbe" />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        +BARBE
                    </label>
                </div>
                <div className={Style.card}>
                    <input type="radio" name="options" value="sourcils" />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        SOURCILS
                    </label>
                </div>
                <div className={Style.card}>
                    <input type="radio" name="options" value="contour" />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        CONTOUR
                    </label>
                </div>
                <div className={Style.card}>
                    <input type="radio" name="options" value="contour" />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        Autres+
                    </label>
                </div>
            </div>
            <input
                type="datetime-local"
                aria-label="date"
                className={Style.date}
            />
            <button type="submit">
                ENVOYER
                <span></span>
            </button>
        </form>
    );
}
