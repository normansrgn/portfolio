// src/app/layout.tsx
'use client'; // если используешь Next.js 13+ с App Router

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



import Header from "@/components/Header/header";
import "./globals.css";
import Footer from '@/components/Footer/footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // длительность анимации
      once: true,    // только один раз при появлении
    });
  }, []);
  
  return (
    <html lang="ru">
      <body>
        <Header />

        <main style={{ minHeight: "70vh", padding: 20 }}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
