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
import GitHubWIcon from "./componentes/icons/github-w.svg";
import VscodeIcon from "./componentes/icons/vscode.svg";
import AnacondaIcon from "./componentes/icons/anaconda.svg";
import JupyterIcon from "./componentes/icons/jupyter.svg";
import UnifeiIcon from "./componentes/icons/unifei.svg";
import EmilioMouraIcon from "./componentes/icons/emilio.jpeg";
import LinkedinIcon from "./componentes/icons/linkedin.svg";
import EmailIcon from "./componentes/icons/gmail.svg";
import ZapIcon from "./componentes/icons/zapzap.svg";
import LogaliIcon from "./componentes/icons/logali.gif";
import BrazilIcon from "./componentes/icons/brazil.svg";
import USAIcon from "./componentes/icons/usa.svg";
import CertHTML from "./componentes/icons/cert-html.jpg";
import CertPostgre from "./componentes/icons/cert-postgresql.jpg";

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
  },
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
    title: "Linkedin",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/guilherme-de-souza-b96563148/" 
  },

  {
    title: "GitHub",
    icon: GitHubWIcon,
    link: "https://github.com/guiijelmito"
  },
];

export const idiomas = [
  {
    title: "Português",
    image: BrazilIcon,
    level: "Nativo"
  },

  {
    title: "Inglês",
    image: USAIcon,
    level: "Avançado"
  }
];

export const certificados = [
  {
    title: "HTML e CSS: Classes, posicionamento e Flexbox",
    date: "2023",
    subtitle: "Alura",
    image: CertHTML,
    link: "https://cursos.alura.com.br/certificate/bba1beaa-49e8-4929-9564-440f8b88ef76",
    items: ["Primeiros passos", "Fontes", "Botões", "Posicionamento de elementos", "Uso de Flexbox"]
  },

  {
    title: "PostgreSQL",
    date: "2024",
    subtitle: "Alura",
    image: CertPostgre,
    link: "https://cursos.alura.com.br/certificate/0e4798eb-037e-4688-93fc-a06b9be4d1dc",
    items: ["Primeiros passos", "Operações CRUD", "Consultas com filtros", "Relacionamentos", "Uso de CASCADE"]
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
