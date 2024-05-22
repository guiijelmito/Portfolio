  import React from "react";
  import { habilidades } from "../data";
  import ChipIcon from "./icons/chip.svg";

  export default function Habilidades() {
    return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <img src={ChipIcon} alt="chip" className="mx-auto inline-block w-20 h-20 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Habilidades &amp; Tecnologias
            </h1>
            <p className="text-base text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Habilidades e tecnologias que domino ou possuo experiência
            </p>
          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {habilidades.map((habilidade) => (
              <div key={habilidade.title} className="p-2 sm:w-1/2 w-full">
                <div className=" rounded flex p-4 h-full items-center bg-gray-200">
                  <img alt="habilidade" src={habilidade.icon} className="w-10 h-10" />
                  <span className="title-font font-medium text-black ml-5">
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