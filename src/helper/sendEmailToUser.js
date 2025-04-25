"use server";
import nodemailer from 'nodemailer';
// import fs from 'fs';
// import path from 'path';
import { userTemplate } from '@/emailTemplate/send-email-to-user';

// Function to send a welcome email
export const sendEmailToUser = async (data) => {
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
        // const templatePath = path.join(process.cwd(), 'src/emailTemplate/send-email-to-user.html');
        // const template = fs.readFileSync(templatePath, 'utf-8');
        const template = userTemplate();

        // Replace placeholders with actual subscriber details
        const emailContent = template
            .replaceAll('{{name}}', data.name)
            .replace('{{email}}', data.email)
            .replace('{{query}}', data.query)
            .replace('{{Year}}', new Date().getFullYear().toString())

        // Define email options
        const mailOptions = {
            from: `WebWeave Creations ${process.env.EMAIL_USER}`,
            to: data.email,
            subject: 'Thank You for Contacting WebWeave Creations!',
            html: emailContent,
            headers: {
                'List-Unsubscribe': '<mailto:contact.webweavecreations@gmail.com>, <https://webweavecreations.in>'
            }   
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Welcome email sent successfully');
    } catch (error) {
        console.error('Error sending welcome email', error);
    }
};
