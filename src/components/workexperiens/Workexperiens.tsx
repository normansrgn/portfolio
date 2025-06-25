import "./workexperiens.scss";
import Image from "next/image";

import img1 from "./1.svg";
import img2 from "./2.svg";
import img3 from "./3.svg";


export default function Workexperiens() {
  const cards = [
    {
      title: "Frontend Engineer Intern",
      description:
        "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        img: img1,
    },
    {
      title: "Freelance App Dev Project",
      description:
        "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      img: img2,
    },
    {
      title: "Lead Frontend Developer",
      description:
        "Developed and maintained user-facing features using modern frontend technologies.",
      img: img3,
    },
   
  ];

  return (
    <div className="workexperiens flex flex-col items-center justify-center px-4 py-10">
      <div data-aos="fade-up" className="workexperiens__title text-[25px] font-bold mb-10">
        My <span className="text-[#CBACF9]">work experience</span>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {cards.map((card, index) => {
          const isLastOdd = cards.length % 2 !== 0 && index === cards.length - 1;

          return (
            <div
            data-aos="fade-up"
              key={index}
              className={`workexperiens__card h-[150px] flex items-center gap-5 p-6 bg-[#0C0E23] rounded-[23px] ${
                isLastOdd ? "md:col-span-2" : ""
              }`}
            >
              <Image src={card.img} alt="Project preview" className="w-12 h-12" />
              <div className="workexperiens__text">
                <div className="workexperiens__text__title font-semibold text-white mb-2">
                  {card.title}
                </div>
                <div className="workexperiens__text__description text-[#BEC1DD] text-sm">
                  {card.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}