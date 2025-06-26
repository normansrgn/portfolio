import img01 from "./images/01.jpg";
import img02 from "./images/02.jpg";
import img03 from "./images/03.jpg";
import img04 from "./images/04.png";

import { StaticImageData } from "next/image";

type Project = {
  url: string;
  title: string;
  disc: string;
  img: StaticImageData;
};

export const projects: Project[] = [
  {
    url: "https://normansrgn.github.io/graduateWork/",
    title: "WartSneaker",
    disc: "Wartsneaker is a diploma project website built on React, offering a convenient and intuitive interface for sneaker shopping. Users can browse the latest collections, explore detailed product information, and receive personalized recommendations based on their preferences. The platform allows users to create and save wishlists, track their orders, and get inspired by the latest trends in sneakers and street fashion.",
    img: img04,
  },
  {
    url: "https://normansrgn.github.io/courswork_layout/",
    title: "ANTI MERIYA",
    disc: "An online clothing store app, ANTI MERIYA, that offers a seamless shopping experience. Browse the latest collections, view detailed product information, and enjoy personalized recommendations based on your preferences. Create and save wishlists, track your orders, and get inspired by curated fashion trends and more.",
    img: img01,
  },
  {
    url: "https://normansrgn.github.io/0p1umusic/",
    title: "OPIUM Label",
    disc: "The musician profile website for OPIUM label offers an immersive experience. Explore artist profiles, discover their discography, and receive personalized recommendations based on your musical preferences.",
    img: img03,
  },
  {
    url: "https://normansrgn.github.io/dqStore/",
    title: "DQ Store",
    disc: "The online perfume store DQ Store offers an immersive shopping experience. Explore a variety of fragrances, browse detailed product descriptions, and receive personalized recommendations tailored to your preferences.",
    img: img02,
  },
];