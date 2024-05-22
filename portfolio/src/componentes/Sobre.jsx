import React from "react";
import StudentIcon from "./icons/coding.svg";
import { contatos } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Olá! eu sou o Guilherme de Souza
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 text-gray-200 leading-relaxed ">
            Sou um estudante de Sistemas de Informação, com ótimas habilidades de comunicação verbal e escrita,
            facilitando a interação com colegas de equipe e clientes. Grande disposição para o desenvolvimento pessoal e profissional,
            que permite contribuir positivamente para o sucesso da empresa
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Me contate
            </a>

            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Veja meus projetos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={StudentIcon}
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-row  px-10 py-20 md:flex-row items-start">
        <ul className="flex flex-row justify-center">
          {contatos.map((contato) => (
            <li key={contato.title} className='skill_logo'>
              <a href={contato.link}>
                <img src={contato.icon} alt={contato.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
