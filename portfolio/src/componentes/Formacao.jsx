import React from "react";
import { formacoes } from "../data";
import { ReactComponent as LivroIcon } from "../icons/studies.svg";

export default function Formacao() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <LivroIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Formação Acadêmica
        </h1> 
        <div className="flex flex-wrap m-4">
          {formacoes.map((formacao) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6">{formacao.title}</p>
                <div className="inline-flex items-center">
                  {formacao.icon}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {formacao.description}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
