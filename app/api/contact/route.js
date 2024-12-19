import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req) {
    //mail credential
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const barber = process.env.NEXT_PUBLIC_EMAIL_BARBER;

    //request data
    const { firstname, lastname, email, number, plan, schedule, message } = await req.json();

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
        await transporter.sendMail({
            from: username,
            to: barber,
            subject: `Nouvelle réservation pour Wens-Hair`,
            html: `
           <!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouvelle Réservation</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      color: #333333;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
      "
    >
      <!-- Header -->
      <div
        style="
          background-color: #f2d129;
          color: #ffffff;
          text-align: center;
          padding: 20px;
          font-size: 24px;
          font-weight: bold;
        "
      >
        Nouvelle Réservation
      </div>

      <!-- Content -->
      <div style="padding: 20px; line-height: 1.6">
        <p style="margin: 0 0 10px">Bonjour <strong>Kerwens</strong>,</p>
        <p style="margin: 0 0 10px">
          Une nouvelle commande ou réservation a été effectuée via
          wenshair.com. Voici les détails :
        </p>
        <ul style="margin: 10px 0 20px; padding: 0 0 0 20px">
          <li style="margin: 5px 0">
            <strong>Nom du client :</strong> ${firstname} ${lastname}
          </li>
          <li style="margin: 5px 0">
            <strong>Service réservé :</strong> ${plan}
          </li>
          <li style="margin: 5px 0">
            <strong>Date et heure :</strong> ${schedule}
          </li>
          <li style="margin: 5px 0"><strong>Email :</strong> ${email}</li>
          <li style="margin: 5px 0"><strong>Téléphone :</strong> ${number}</li>
          <li style="margin: 5px 0"><strong>Message :</strong> ${message}</li>
        </ul>
        <p style="margin: 0 0 20px">
          Merci de confirmer la réservation ou de préparer votre matériel si
          nécessaire.
        </p>
      </div>

      <!-- Footer -->
      <div
        style="
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #666666;
          background-color: #f9f9f9;
        "
      >
        <p style="margin: 0">
          &copy; 2025 Web Waze Digital. Tous droits réservés.
        </p>
        <p style="margin: 5px 0 0">
          Pour toute assistance, contactez-nous à
          <a
            href="mailto:contact@webwazedigital.com"
            style="color: #333333; text-decoration: underline"
            >contact@webwazedigital.com</a
          >.
        </p>
      </div>
    </div>
  </body>
</html>
            `,
        });
        return NextResponse.json({ message: 'Réservation Réussie' });
    } catch (error) {
        console.log(error);
        NextResponse.json({ message: 'Failed' });
    }
}