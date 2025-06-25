// Projects.jsx
import React from "react";
import Card from "./Card";
import "./Projects.scss";

export default function Projects() {
  return (
    <section id="projects" className="projects py-10 px-4 max-w-screen-xl mx-auto">
      <h1 data-aos="fade-up" className="font-bold text-[28px] sm:text-3xl text-center mb-10 px-2">
        A small selection of recent projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <Card />
      </div>
    </section>
  );
}