import React from "react";
import { formacoes } from "../data";
import LivroIcon from "./icons/studies.svg";

export default function Formacao() {
  return (
    <section id="formacao">
      <div className="container px-5 py-10 mx-auto text-center">
        <img src={LivroIcon} alt='Ícone de livro' className="inline-block w-20 h-20 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
          Formação acadêmica
        </h1> 
        <div className="flex flex-wrap m-4">
          {formacoes.map((formacao) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="flex flex-col items-center justify-center h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <img
                  alt="formação"
                  src={formacao.image}
                  className="w-24 h-24 flex-shrink-0 object-cover object-center"
                />
                <h2 className="leading-relaxed mb-3 mt-4 text-white font-bold">{formacao.title}</h2>
                <h3 className="leading-relaxed mb-6 text-white italic">{formacao.subtitle}</h3>
                <p className="leading-relaxed mb-6 text-white italic">{formacao.date}</p>
                <hr className="border-1 border-gray-700 w-1/2 mb-6" />
                <div className="inline-flex items-center bg-transparent">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-200 p-7 ">
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
