"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  disc: string;
  url: string;
  img: StaticImageData;  // <- изменено на StaticImageData
  index: number;
};

export default function ProjectCard({
  title,
  disc,
  url,
  img,
  index,
}: ProjectCardProps) {
  const isReverse = index % 2 !== 0;

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 ${
        isReverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        ref={ref}
        className={`flex flex-col gap-5 max-w-xl transition-all duration-1000 ease-out transform
        ${
          visible
            ? "opacity-100 translate-x-0"
            : isReverse
            ? "opacity-0 translate-x-20"
            : "opacity-0 -translate-x-20"
        }`}
      >
        <h1 className="project__title text-[#ccd6f6] text-[30px] md:text-[40px] font-bold">
          {title}
        </h1>
        <p
          className={`project__disc text-[#e2e8f0] text-[14px] p-6 rounded-[14px] backdrop-blur-lg leading-relaxed transition-all duration-500 bg-[radial-gradient(ellipse_at_15%_21%,rgba(105,59,147,0.2),rgba(110,191,244,0.04)_77%,rgba(70,144,213,0)_100%)]
          hover:shadow-[0_0_26px_1px_rgb(80,39,134)] ${
            isReverse ? "lg:hover:translate-x-10" : "lg:hover:-translate-x-10"
          }`}
        >
          {disc}
        </p>
      </div>

      <div>
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