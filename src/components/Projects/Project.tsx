"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  disc: string;
  url: string;
  img: string;
  index: number; // добавлен индекс
};

export default function ProjectCard({ title, disc, url, img, index }: ProjectCardProps) {
  const isReverse = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 ${
        isReverse ? "lg:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-5 max-w-xl">
        <h1 className="text-[#ccd6f6] text-[30px] md:text-[40px] font-bold">{title}</h1>
        <p
          className={`text-[#e2e8f0] text-[14px] p-6 rounded-[14px] backdrop-blur-lg leading-relaxed transition-all duration-500 bg-[radial-gradient(ellipse_at_15%_21%,rgba(105,59,147,0.2),rgba(110,191,244,0.04)_77%,rgba(70,144,213,0)_100%)]
          hover:shadow-[0_0_26px_1px_rgb(80,39,134)] ${
            isReverse ? "lg:hover:translate-x-10" : "lg:hover:-translate-x-10"
          }`}
        >
          {disc}
        </p>
      </div>

      <div data-aos="fade-up">
        <a href={url} target="_blank" rel="noreferrer">
          <Image
            src={img}
            alt={title}
            width={800}
            height={450}
            className="rounded-lg transition-shadow hover:shadow-[0_0_26px_1px_rgb(80,39,134)]"
          />
        </a>
      </div>
    </div>
  );
}