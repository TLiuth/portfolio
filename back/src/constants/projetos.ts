import Projeto from "src/projeto/projeto.entity";

const projetos : Projeto[] = [
    {
        id: 1,
        tipo: "programacao",
        titulo: "FTP Interface",
        descricao: "Tkinter interface for a communication app using FTP protocol, connecting a client to a server on the same network.",
        imagemUrl: "/assets/images/FTP_Tkinter.png"
    },
    {
        id: 2,
        tipo: "programacao",
        titulo: "Portfólio (Este site)",
        descricao: "Frontend feito com o Framework React, Next e Tailwind, e Backend feito com React e Nest",
        imagemUrl: "/assets/images/portfolioSite.png"
    },
    {
        id: 3,
        tipo: "programacao",
        titulo: "Árvore Rubro Negra - Estrutura de Dados",
        descricao: "Projeto para fazer uma árvore binária do tipo rubro negra para balanceamento de índices",
        imagemUrl: "/assets/images/red_black_tree.png"
    }
,
    {
        id: 4,
        tipo: "dados",
        titulo: "CLI - Command Line Interface",
        descricao: "CLI para utilização de aplicação de download de panoramas de endereços e para validação dos números presentes nos mesmos. Código em Python e integração com o Paddle OCR",
        imagemUrl: "/assets/images/cliPanoms.png"
    },
    {
        id: 5,
        tipo: "programacao",
        titulo: "Hangman",
        descricao: "Hangman game made in Java for Object Oriented Programming",
        imagemUrl: "/assets/images/hangman_poo.png"
    },
    {
        id: 6,
        tipo: "dados",
        titulo: "Automação de Fluxo ETL com Airflow",
        descricao: "Integrei uma API autoral do TerraLAB com uma aplicação de utilização do Paddle OCR para realizar a automação da validação de endereços em um projeto interno.",
        imagemUrl: ""
    }
]

export default projetos