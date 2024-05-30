import React from "react";
import { contatos } from "../data";

export default function Contato() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", nome, email, mensagem }),
    })
      .then(() => alert("Mensagem enviada!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mb-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Avenida+BPS+2243&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-[#252525] relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ENDEREÇO
              </h2>
              <p className="mt-1 text-[#49e68f]">
                Avenida BPS 2243, Apto 23 - Cruzeiro, Itajubá - MG
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-[#49e68f] leading-relaxed">
                cezarguilherme81@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                CELULAR
              </h2>
              <p className="leading-relaxed text-[#49e68f]">(35) 99963-8484</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          onSubmit={handleSubmit}
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Me contrate
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            Contrate-me e eleve seu projeto! Com paixão e muita curiosidade, ofereço soluções sob medida e um compromisso inabalável com a qualidade. Vamos transformar ideias em sucesso juntos!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#49e68f] border-0 py-2 px-6 focus:outline-none hover:bg-[#3bad6e] rounded text-lg">
            Enviar
          </button>
        </form>
      </div>

      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {contatos.map((contato) => (
          <div className="flex-grow text-center">
            <a key={contato.title}
              href={contato.link}
              target="blank"
              rel="noopener noreferrer">
              <img
                className="w-10 h-10 mx-auto"
                src={contato.icon}
                alt={contato.title} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}