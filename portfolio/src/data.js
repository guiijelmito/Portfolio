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
    title: "React.js",
    icon: ReactIcon
  },

  {
    title: "Python",
    icon: PythonIcon
  },

  {
    title: "SQL",
    icon: SqlIcon
  },

  {
    title: "PostgreSQL",
    icon: PostgresqlIcon
  },

  {
    title: "Numpy",
    icon: NumpyIcon
  },

  {
    title: "Pandas",
    icon: PandasIcon
  },

  {
    title: "Matplotlib",
    icon: MatplotlibIcon
  },

  {
    title: "C",
    icon: CIcon
  },

  {
    title: "Git",
    icon: GitIcon
  },

  {
    title: "GitHub",
    icon: GithubIcon
  },

  {
    title: "Visual Studio Code",
    icon: VscodeIcon
  },

  {
    title: "Anaconda",
    icon: AnacondaIcon
  },

  {
    title: "Jupyter Notebook",
    icon: JupyterIcon
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
    image: LogaliIcon,
    link: "https://github.com/guiijelmito/Logali",
  }
];

export const formacoes = [
  {
    title: "E.E. Emílio Moura",
    date: "2018 - 2020",
    subtitle: "Ensino Médio",
    image: EmilioMouraIcon,
    description: "Durante o Ensino Médio, adquiri conhecimentos gerais e fundamentais para a minha formação acadêmica, além de desenvolver habilidades de organização, planejamento e gestão do tempo, essenciais para a vida acadêmica e profissional."
  },

  {
    title: "Universidade Federal de Itajubá (UNIFEI)",
    date: "2022 - 2026",
    subtitle: "Sistemas de Informação",
    description: "Aprofundei meus conhecimentos nos fundamentos e práticas de Sistemas de Informação, com ênfase na especialização em Persistência e Análise de dados, objetificando dominar as técnicas essenciais para o armazenamento eficiente, recuperação rápida e gerenciamento seguro de informações em larga escala.",
    image: UnifeiIcon
  }
];
