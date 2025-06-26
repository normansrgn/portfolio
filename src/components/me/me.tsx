"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./me.scss";

import react from "./icons/react.svg";
import ts from "./icons/ts.svg";
import redux from "./icons/refux.svg";
import scss from "./icons/scss.svg";
import next from "./icons/next.svg";
import tailwind from "./icons/tailwind.svg";
import node from "./icons/node.svg";

const fullTextDesktop = `
About me
I'm a Frontend Developer. 
A self-taught frontend developer with over 3 years of industry experience.
I build dynamic and responsive web applications that balance user needs and business goals, ensuring both functionality and a seamless user experience.
`;

const fullTextMobile = `About me
I'm a Frontend Developer. 
A self-taught frontend developer with over 3 years of industry experience.
I build dynamic and responsive web applications that balance user needs and business goals, ensuring both functionality and a seamless user experience.`;

export default function Me() {
  const [text, setText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Следим за шириной экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind breakpoint: sm
    };

    handleResize(); // сразу определить при загрузке
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Анимация печати текста
  useEffect(() => {
    let index = 0;
    const selectedText = isMobile ? fullTextMobile : fullTextDesktop;

    const interval = setInterval(() => {
      setText(selectedText.slice(0, index));
      index++;
      if (index > selectedText.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section id="about" className="me  py-6">
      <div className="mx-auto flex-col">
        <div className="me__title-block" data-aos="fade-up">
          <span className="text-[#90A1B9] text-[21px]">Hi all. I am</span>
          <div className="me__title text-[#F8FAFC] text-[50px]">Vardan Sargsyan</div>
          <span className="text-[#615FFF] text-[23px]">&gt; Front-end developer</span>
        </div>

        <div className="me__link mt-[15px] flex flex-col gap-[10px]" data-aos="fade-up">
          <span className="text-[#90A1B9]">// find my profile on Github:</span>
          <div className="me__title">
            <span className="text-[#615FFF]">const</span>{" "}
            <span className="text-[#00D5BE]">githubLink =</span>{" "}
            <a href="https://github.com/normansrgn" target="_blank" rel="noreferrer">
              <span className="ghlink text-[#FFA1AD]">"https://github.com/normansrgn"</span>
            </a>
          </div>
        </div>

        <div
          className="about__me mt-[30px] text-[#90A1B9] text-[15px] whitespace-pre-wrap"
          data-aos="fade-up"
        >
          <span className="about__text typewriter block h-fit">{text}</span>
        </div>

        <div className="mt-[40px] me__card" data-aos="fade-up">
          <div className="row flex items-center gap-[10px]">
            <div
              data-aos="fade-up"
              className="card card_fist bg-[#0C0E23] rounded-[10px] h-[202px] p-[20px] flex items-center"
            >
              <div className="card__title-block ml-[10px]">
                <span className="block text-[#90A1B9] text-sm mb-2">The Inside Scoop</span>
                <div className="card__title text-white text-lg font-semibold">
                  Currently building a <br /> JS Animation library
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="card card__stack w-[100%] bg-[#0C0E23] rounded-[10px] h-[202px] p-[20px] flex items-center"
            >
              <div className="card__title-block flex flex-col ml-[10px] gap-[7px]">
                <div className="flex flex-col">
                  <div className="block text-[#FFFFFF] text-[26px] mb-2">My tech stack</div>
                  <span className="text-[#90A1B9]">I constantly try to improve</span>
                </div>

                <div className="urls flex gap-[10px] flex-wrap">
                  <Image alt="react" src={react} />
                  <Image alt="typescript" src={ts} />
                  <Image alt="tailwind" src={tailwind} />
                  <Image alt="nextjs" src={next} />
                  <Image alt="scss" src={scss} />
                  <Image alt="redux" src={redux} />
                  <Image alt="nodejs" src={node} />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="cardFull flex flex-col items-center p-[40px] gap-[14px] bg-[#0C0E23] rounded-[10px] mt-[10px]"
          >
            <div className="cardFull_title font-bold text-[24px] text-center">
              Do you want to start a project <br /> together?
            </div>
            <button className="p-[15px] w-[240px] cursor-pointer bg-[#161A31] rounded-[10px]">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}