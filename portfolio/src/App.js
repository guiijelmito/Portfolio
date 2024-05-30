import React from "react";
import Contato from "./componentes/Contato.jsx";
import Navbar from "./componentes/Navbar";
import Projetos from "./componentes/Projetos";
import Habilidades from "./componentes/Habilidades";
import Formacao from "./componentes/Formacao.jsx";
import Qualificacoes from "./componentes/Qualificacoes.jsx";
import Sobre from "./componentes/Sobre.jsx";

export default function App() {
  return (
    <main>
      <Navbar />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Formacao />
      <Qualificacoes />
      <Contato />
    </main>
  );
}