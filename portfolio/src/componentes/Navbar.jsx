import React from "react";

import TelIcon from "./icons/telephone.svg";
import Logo from "./icons/Preview.png";

export default function Navbar() {
  return (
   <header className="md:sticky top-0 z-10 h-30">
      <div className="container flex place-content-centerflex-wrap p-5 md:flex-row">
        <a className='flex flex-row gap-5 '>
          <img src={Logo} href alt="Logo" className='logo'/>
          
          <p className='text-gray-200 mr-4 ml-4 mt-4'><b>Portfólio</b> </p>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l gap-3 md:border-gray-700 ml-3 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-gray-400 hover:text-white border-3">
            Projetos
          </a>

          <a href="#skills" className="mr-5  text-gray-400 hover:text-white border-3">
            Habilidades e Competências
          </a>

          <a href="#testimonials" className="mr-5  text-gray-400 hover:text-white border-3">
            Formação Acadêmica
          </a>

        </nav>
        <a
          href="#contact"
          className="inline-flex p-7 items-center bg-gray-200 border-solid border-black py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-xl mt-4 md:mt-0 ml-5">
          Contate-me
          <img src={TelIcon} alt="Telefone" className="w-7 h-7 ml-2" />
        </a>
      </div>
    </header>
  );
}
