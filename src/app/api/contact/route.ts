import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req: NextRequest) {
    //mail credential
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const barber = process.env.NEXT_PUBLIC_EMAIL_BARBER;

    //request data
    const { name, email, number, option, dateFormat } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'mail.infomaniak.com',
        port: 465,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false,
        },

        auth: {
            user: username,
            pass: password,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: username,
            to: barber,
            subject: `Nouvelle réservation pour Wens-Hair`,
            html: `
            <h1 style="text-align : center">Nouvelle Réservation</h1>
            <p>Nom : ${name}</p>
            <p>Mail : ${email}</p>
            <p>Numéro de téléphone : ${number}</p>
            <p>Option : ${option}</p>
            <p>Date : ${dateFormat}</p>
            `,
        });

        return NextResponse.json({ message: 'Success: email was sent' });
    } catch (error) {
        console.log(error);
        NextResponse.json({ message: 'COULD NOT SEND MESSAGE' });
    }
}
