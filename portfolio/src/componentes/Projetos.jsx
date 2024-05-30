import React from "react";
import { projetos } from "../data";
import ProjIcon from "./icons/project.svg";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <img src={ProjIcon} alt="chip" className="mx-auto inline-block w-20 h-20 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps &amp; Projetos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Projetos desenvolvidos por mim, com o intuito de demonstrar minhas habilidades e competências. Também inclui projetos que participei no desenvolvimento como membro de uma equipe dentro da Universidade Federal de Itajubá (UNIFEI)
          </p>
        </div>
        <div className="flex flex-col -m-4 items-center ">
          {projetos.map((projeto) => (
            <a
              href={projeto.link}
              key={projeto.title}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={projeto.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 transition ease-in duration-500 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {projeto.title}
                  </h1>
                  <p className="leading-relaxed">{projeto.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}