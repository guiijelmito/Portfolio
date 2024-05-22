import React from "react";

import ReactIcon from "./componentes/icons/react.svg";
import PythonIcon from "./componentes/icons/python.svg";
import SqlIcon from "./componentes/icons/sql.svg";
import PostgresqlIcon from "./componentes/icons/postgresql.svg";
import NumpyIcon from "./componentes/icons/numpy.svg";
import PandasIcon from "./componentes/icons/pandas.svg";
import MatplotlibIcon from "./componentes/icons/matplotlib.svg";
import CIcon from "./componentes/icons/c.svg";
import GitIcon from "./componentes/icons/git.svg";
import GithubIcon from "./componentes/icons/github.svg";
import VscodeIcon from "./componentes/icons/vscode.svg";
import AnacondaIcon from "./componentes/icons/anaconda.svg";
import JupyterIcon from "./componentes/icons/jupyter.svg";
import UnifeiIcon from "./componentes/icons/unifei.svg";
import EmilioMouraIcon from "./componentes/icons/emilio.jpeg";
import LinkedinIcon from "./componentes/icons/linkedin.svg";
import EmailIcon from "./componentes/icons/gmail.svg";
import AddressIcon from "./componentes/icons/localization.svg";
import ZapIcon from "./componentes/icons/zapzap.svg";
import LogaliIcon from "./componentes/icons/logali.gif";

export const habilidades = [
  {
    title: "React",
    icon: <img src={ReactIcon} alt="React" />
  },

  {
    title: "Python",
    icon: <img src={PythonIcon} alt="Python" />
  },

  {
    title: "SQL",
    icon: <img src={SqlIcon} alt="SQL" />
  },

  {
    title: "PostgreSQL",
    icon: <img src={PostgresqlIcon} alt="PostgreSQL" />
  },

  {
    title: "Numpy",
    icon: <img src={NumpyIcon} alt="Numpy" />
  },

  {
    title: "Pandas",
    icon: <img src={PandasIcon} alt="Pandas" />
  },

  {
    title: "Matplotlib",
    icon: <img src={MatplotlibIcon} alt="Matplotlib" />
  },

  {
    title: "C",
    icon: <img src={CIcon} alt="C" />
  },

  {
    title: "Git",
    icon: <img src={GitIcon} alt="Git" />
  },

  {
    title: "GitHub",
    icon: <img src={GithubIcon} alt="GitHub" />
  },

  {
    title: "Visual Studio Code",
    icon: <img src={VscodeIcon} alt="Visual Studio Code" />
  },

  {
    title: "Anaconda",
    icon: <img src={AnacondaIcon} alt="Anaconda" />
  },

  {
    title: "Jupyter",
    icon: <img src={JupyterIcon} alt="Jupyter" />
  }
];

export const contatos = [
  {
    title: "WhatsApp",
    icon: ZapIcon,
    link: "https://wa.link/uflobt"
  },

  {
    title: "E-mail",
    icon: EmailIcon,
    link: "mailto:cezarguilherme81@gmail.com"
  },

  {
    title: "Endereço",
    icon: AddressIcon,
    link: "https://maps.app.goo.gl/kUrEPsDtZiUiYSc47"

  },

  {
    title: "Linkedin",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/guilherme-de-souza-b96563148/" 
  },

  {
    title: "GitHub",
    icon: GithubIcon,
    link: "https://github.com/guiijelmito"
  },
];

export const projetos = [
  {
    title: "Logali",
    subtitle: "Rede social de avaliação de estabelecimentos",
    description:
      "Logáli é uma aplicação web de uma rede social, na qual visa facilitar a troca de informações entre usuários sobre diversos lugares. Funcionando como uma rede social, ela permite que os usuários compartilhem suas experiências e façam comentários sobre diferentes estabelecimentos, ajudando as pessoas a conhecerem melhor esses locais antes de visitá-los",
    image: <img src={LogaliIcon} alt="Logali" />,
    link: "https://github.com/guiijelmito/Logali",
  }
];

export const formacoes = [
  {
    title: "E.E. Emílio Moura",
    date: "2018-2020",
    subtitle: "Ensino Médio",
    icon: <img src={EmilioMouraIcon} alt="E.E Emílio Moura" />,
    description: "Durante o Ensino Médio, adquiri conhecimentos gerais e fundamentais para a minha formação acadêmica, além de desenvolver habilidades de organização, planejamento e gestão do tempo, essenciais para a vida acadêmica e profissional."
  },

  {
    title: "Universidade Federal de Itajubá (UNIFEI)",
    date: "2022-2026",
    subtitle: "Sistemas de Informação",
    description: "Aprofundei meus conhecimentos nos fundamentos e práticas de Sistemas de Informação, com ênfase na especialização em Persistência e Análise de dados, objetificando dominar as técnicas essenciais para o armazenamento eficiente, recuperação rápida e gerenciamento seguro de informações em larga escala.",
    icon: <img src={UnifeiIcon} alt="UNIFEI" />
  }
];
