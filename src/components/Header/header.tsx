"use client";

import { useState } from "react";
import "./header.scss";

const links: string[] = ["About", "Projects", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="burger__container w-full bg-[#0C0E23] py-4 shadow-md" data-aos="fade-up">
      {/* Контейнер как в Home */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-end">
          {/* Можно добавить логотип/название слева */}
          {/* <div className="text-white text-lg font-semibold">Vardan</div> */}

          {/* Десктопное меню */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 items-center">
              {links.map((link) => (
                <li key={link}>
                  <a
                    className="text-[#90A1B9] hover:text-[#615FFF] transition-colors duration-200"
                    href={`#${link.toLowerCase()}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Бургер справа (мобильный) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню — плавная анимация */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4">
            <ul className="flex flex-col gap-4 items-center">
              {links.map((link) => (
                <li key={link}>
                  <a
                    className="text-[#90A1B9] hover:text-[#615FFF] text-lg transition-colors duration-200"
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}