import CardApresentacao from "@/components/templates/CardApresentacao";
import CardContatos from "@/components/templates/CardContatos";
import Pagina from "@/components/templates/Pagina";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-col">
        <CardApresentacao
          src="/assets/images/eu.jpeg"
          titulo="Apresentação"
          altText="Meu rosto"
          texto="Estudante de Ciência da Computação na Universidade Federal de Ouro Preto, atualmente cursando o 6° período. Sempre gostei de computadores e tenho profundo interesse em tecnologia e programação.
Trabalho como freelancer online desde 2020. Gosto muito de estabelecer rotas de comunicação claras e assertivas, elaborando  e executando projetos juntamente aos meus clientes.
Tenho conhecimento de linguagens de programação como C, C++, Python, Java e Typescript. Sou organizado e resolutivo, e tenho experiência com liderança de equipes. Todas essas habilidades combinadas me ajudam na resolução de problemas e na execução de projetos com melhor clareza e qualidade.
Estou sempre estudando e buscando novos aprendizados, e quero oportunidades de crescer e adquirir experiência."
        ></CardApresentacao>
        <span className="text-colors-dark-match pl-4 text-5xl pt-14 font-bold">
          Contacts
        </span>
        <div className="flex flex-1 gap-6 align-middle items-center mt-6">
          <CardContatos
            icone={FaLinkedin}
            titulo="My Linkedin"
            href="https://www.linkedin.com/in/thiago-liuth-2b960922a/"
          ></CardContatos>
          <CardContatos
            icone={FaGithub}
            titulo="My Github"
            href="https://github.com/TLiuth"
          ></CardContatos>
          <CardContatos
            icone={MdEmail}
            titulo="Send me an email!"
            href="mailto:thiagoliuth@gmail.com"
          ></CardContatos>
        </div>
      </div>
    </Pagina>
  );
}
