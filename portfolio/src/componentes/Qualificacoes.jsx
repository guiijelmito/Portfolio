import React from "react";
import { certificados } from "../data";
import CertIcon from "./icons/certificado.svg";

export default function Formacao() {
  return (
    <section id="qualificacoes">
      <div className="container mb-7 px-5 py-10 mx-auto text-center">
        <img src={CertIcon} alt='Ícone de certificado' className="inline-block w-20 h-20 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
          Qualificações
        </h1>
      </div>
      <div className="flex flex-row mb-10 -m-4 items-center ">
        {certificados.map((certificado) => (
          <a
            href={certificado.link}
            key={certificado.title}
            target="blank"
            className="sm:w-1/2 w-full">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-contain object-center rounded"
                src={certificado.image}
              />
              <div className=" flex flex-col px-8 py-10 relative z-10 h-full w-full aspect-[1/1] border-4 border-gray-800 bg-gray-900 transition-opacity ease-in duration-700 opacity-0 hover:opacity-100">
                <h1 className="leading-relaxed mt-3 text-white font-bold-3 text-center">
                  {certificado.title}
                </h1>
                <p className="leading-relaxed mb-7 text-white text-center">{certificado.subtitle}, {certificado.date}</p>
                <hr className="border-1 border-gray-700 w-5/6 mb-6 place-content-center mx-auto" />
                <ul className="text-center">
                  {certificado.items.map((item) => (
                    <li className="text-white" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
