'use client';

import { useEffect, useState } from 'react';
import './me.scss';

const fullText = `/**
 * About me
 * I have 5 years of experience in web development lorem ipsum dolor sit
 * amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
 * et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
 * ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
 * in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 * Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
 */`;

export default function Me() {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) clearInterval(interval);
    }, 20); // скорость печати (мс на символ)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="me mt-[50px] py-6">
      <div className="max-w-screen-2xl mx-auto px-3 flex-col">
        {/* Заголовок */}
        <div className="me__title-block" data-aos="fade-up">
          <span className="text-[#90A1B9] text-[21px]">Hi all. I am</span>
          <div className="me__title text-[#F8FAFC] text-[50px]">Vardan Sargsyan</div>
          <span className="text-[#615FFF] text-[23px]"> &gt; Front-end developer</span>
        </div>

        {/* GitHub ссылка */}
        <div className="me__link mt-[40px] flex flex-col gap-[10px]" data-aos="fade-up">
          <span className="text-[#90A1B9]">// find my profile on Github:</span>
          <div className="me__title">
            <span className="text-[#615FFF]">const</span>{' '}
            <span className="text-[#00D5BE]">githubLink =</span>{' '}
            <a href="https://github.com/normansrgn" target="_blank" rel="noreferrer">
              <span className="ghlink text-[#FFA1AD]">"https://github.com/normansrgn"</span>
            </a>
          </div>
        </div>

        {/* Печатающийся текст */}
        <div className="about__me mt-[30px] text-[#90A1B9] text-[15px] whitespace-pre-wrap" data-aos="fade-up">
          <span className="typewriter">{text}</span>
        </div>
      </div>
    </section>
  );
}