"use client";

import React, { Component } from "react";
import "./__projects.scss";
import { projects } from "./data";
import ProjectCard from "./Project";

export default class Projects extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
    this.handleScroll();

    const cards = document.querySelectorAll(".projects__card");
    cards.forEach((card, index) => {
      if ((index + 1) % 2 === 0) {
        card.classList.add("second_card", "second-card");
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  }

  handleScroll = () => {
    const items = document.querySelectorAll(".projects__about_prod p");
    const windowHeight = window.innerHeight;

    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;

      if (itemTop < windowHeight && itemBottom > 0) {
        item.classList.add("hovered");
      } else {
        item.classList.remove("hovered");
      }
    });
  };

  render() {
    return (
      <section id="projects" className="projects py-10 px-4 sm:px-6 lg:px-8">
        <div className="projects__container max-w-6xl mx-auto">
          <h1
            data-aos="fade-up"
            className="font-bold text-[24px] sm:text-3xl text-center mb-10"
          >
            A small selection of recent projects
          </h1>

          <div className="grid grid-cols-1 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}