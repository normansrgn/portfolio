"use client";

import {
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0C0E23] text-[#90A1B9] py-6 mt-10 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left flex items-center gap-2">
          <FaEnvelope />
          <div>normanmagic2004@gmail.com</div>
        </p>
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/normansrgn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#615FFF] transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://t.me/psibladeabuze" // замени на свою ссылку
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#615FFF] transition-colors duration-200"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://instagram.com/normansrgn" // замени на свою ссылку
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#615FFF] transition-colors duration-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
