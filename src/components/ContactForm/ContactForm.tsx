'use client';
import Style from './form.module.scss';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type DateValue = Date | number | string;

export default function ContactForm() {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [number, setNumber] = useState<string>();
    const [option, setOption] = useState<string>();
    const [date, setDate] = useState<DateValue>(new Date());
    const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
    const router = useRouter();
    function resetForm() {
        setDisabledBtn(false);
        setDate(new Date());
        setOption('');
        setNumber('');
        setEmail('');
        setName('');
    }
    async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisabledBtn(true);
        toast.loading('Veuillez Patientez...');
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };
        const newDate = new Date(date);
        const dateFormat = newDate.toLocaleDateString('fr-FR', options);
        try {
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    number,
                    option,
                    dateFormat,
                }),
            });
            if (!res.ok)
                toast.error(
                    "Réservation échoué. Veuillez réessayer. Si l'erreur persiste, contactez le support"
                );
            toast.success(
                'Réservation réussie. Le salon vous contactera sous peu'
            );
            resetForm();
            router.push('/');
        } catch (error) {
            toast.error('Server Error');
        }
    }
    return (
        <form className={Style.form} onSubmit={(e) => submitHandler(e)}>
            <div className={Style.inputBox}>
                <input
                    type="text"
                    name="Nom"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <label htmlFor="Nom">Nom et prénom</label>
            </div>
            <div className={Style.inputBox}>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className={Style.inputBox}>
                <input
                    type="tel"
                    name="phone"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    required
                />
                <label htmlFor="phone">Téléphone</label>
            </div>

            <div className={Style.wrapper}>
                <div className={Style.card}>
                    <input
                        type="radio"
                        name="options"
                        value="simple"
                        onChange={(e) => setOption(e.target.value)}
                    />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        BASIC
                    </label>
                </div>
                <div className={Style.card}>
                    <input
                        type="radio"
                        name="options"
                        value="barbe"
                        onChange={(e) => setOption(e.target.value)}
                    />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        +BARBE
                    </label>
                </div>
                <div className={Style.card}>
                    <input
                        type="radio"
                        name="options"
                        value="sourcils"
                        onChange={(e) => setOption(e.target.value)}
                    />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        SOURCILS
                    </label>
                </div>
                <div className={Style.card}>
                    <input
                        type="radio"
                        name="options"
                        value="contour"
                        onChange={(e) => setOption(e.target.value)}
                    />
                    <span className={Style.check}></span>
                    <label htmlFor="options" className={Style.label}>
                        CONTOUR
                    </label>
                </div>
                <div className={Style.card}>
                    <input
                        type="radio"
                        name="options"
                        value="autres"
                        onChange={(e) => setOption(e.target.value)}
                    />
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
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit" disabled={disabledBtn}>
                ENVOYER
                <span></span>
            </button>
        </form>
    );
}
