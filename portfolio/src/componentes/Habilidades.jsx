import React from "react";
import { habilidades } from "../data";
import { ReactComponent as ChipIcon } from "../icons/chip.svg";

export default function Habilidades() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Habilidades &amp; Tecnologias
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Habilidades e tecnologias que eu domino ou que possuo experiência.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {habilidades.map((habilidade) => (
            <div key={habilidade.title} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {habilidade.icon}
                <span className="title-font font-medium text-white">
                  {habilidade.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}