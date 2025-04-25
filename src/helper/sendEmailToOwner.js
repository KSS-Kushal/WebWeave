"use server";
import { ownerTemplate } from '@/emailTemplate/send-email-to-owner';
import nodemailer from 'nodemailer';
// import fs from 'fs';
// import path from 'path';

// Function to send a welcome email
export const sendEmailToOwner = async (data) => {
    try {
        // Create a transporter
        let transporter = nodemailer.createTransport({
            // host: "smtpout.secureserver.net",
            port: 465,
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app-specific password
            }
        });

        // Read the email template
        // const templatePath = path.join(process.cwd(), 'src/emailTemplate/send-email-to-owner.html');
        // const template = fs.readFileSync("../emailTemplate/send-email-to-owner.html", 'utf-8');
        const template = ownerTemplate();

        // Replace placeholders with actual subscriber details
        const emailContent = template
            .replaceAll('{{name}}', data.name)
            .replace('{{email}}', data.email)
            .replace('{{query}}', data.query)
            .replace('{{Year}}', new Date().getFullYear().toString())

        // Define email options
        const mailOptions = {
            from: `WebWeave Creations ${process.env.EMAIL_USER}`,
            to: "kghosh713502@gmail.com",
            subject: 'New Contact Form Submission',
            html: emailContent,
            headers: {
                'List-Unsubscribe': '<mailto:contact.webweavecreations@gmail.com>, <https://webweavecreations.in>'
            }              
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Welcome email sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending welcome email', error);
        return false;
    }
};
