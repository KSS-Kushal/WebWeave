import localFont from "next/font/local";
import "./globals.css";
import CustomLayout from "./customLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "WebWeave Creations",
  description: "At WebWeave Creations, we specialize in building custom websites that bring your business vision to life. Whether it's a simple landing page or a fully functional e-commerce platform, our experienced team delivers tailored solutions that meet your unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-blue-50/5`}
      >
        <CustomLayout children={children}></CustomLayout>
      </body>
    </html>
  );
}
