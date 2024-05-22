import React from "react";
import { certificados } from "../data";
import CertIcon from "./icons/certificado.svg";

export default function Formacao() {
  return (
    <section id="qualificacoes">
      <div className="container px-5 py-10 mx-auto text-center">
        <img src={CertIcon} alt='Ícone de certificado' className="inline-block w-20 h-20 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
          Qualificações
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white mb-12">
          Certificados de cursos e formações que realizei
        </p>
        <div className="flex flex-row -m-4 items-center ">
          {certificados.map((certificado) => (
            <a
              href={certificado.link}
              key={certificado.title}
              className="sm:w-1/2 w-full">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded"
                  src={certificado.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="leading-relaxed mt-3 text-white font-bold-3">
                    {certificado.title}
                  </h1>
                  <p className="leading-relaxed mb-7 text-white italic">{certificado.subtitle}, {certificado.date}</p>
                  <hr className="border-1 border-gray-700 w-1/2 mb-6 place-content-center mx-auto" />
                  <p className="leading-relaxed text-white ">{certificado.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}