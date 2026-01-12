import Pagina from "@/components/templates/Pagina";
import Image from "next/image";
import CardTechs from "@/components/templates/CardTechs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaG, FaPython } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import getProjetos from "@/data/service/obterProjetos";
import CardApresentacao from "@/components/templates/CardApresentacao";
import Carousel from "@/components/templates/Carousel";
import ProjetosCarousel from "@/components/templates/ProjetosCarousel";
import { FaDocker } from "react-icons/fa";

export default async function Home() {
  const projetos = await getProjetos();
  console.log(">> >>> >>> Projetos:");
  console.log(projetos);
  projetos.map((projeto) => console.log(projeto));
  return (
    <Pagina>
      <div className="flex flex-col flex-1 gap-6">
        <span className="text-4xl text-colors-dark-match">Tecnologias</span>
        <div className="grid grid-cols-6 gap-x-1 gap-y-4">
          <CardTechs icone={FaReact} titulo="React"></CardTechs>
          <CardTechs icone={SiNextdotjs} titulo="Nest"></CardTechs>
          <CardTechs icone={SiTypescript} titulo="Typescript"></CardTechs>
          <CardTechs icone={TbBrandCpp} titulo="C++"></CardTechs>
          <CardTechs icone={FaPython} titulo="Python"></CardTechs>
          <CardTechs icone={VscVscodeInsiders} titulo="VSCode"></CardTechs>
          <CardTechs icone={FaGithub} titulo="Github"></CardTechs>
          <CardTechs icone={SiTailwindcss} titulo="Tailwind"></CardTechs>
          <CardTechs icone={FaDocker} titulo="Docker"></CardTechs>
        </div>
        <span className="text-4xl text-colors-dark-match">Projetos</span>
        <div className="flex flex-col flex-1 gap-5">
          <ProjetosCarousel
            projetos={projetos.filter(
              (projeto) => projeto.tipo === "programacao"
            )}
          ></ProjetosCarousel>
          {/* {projetos.map((projeto) => (
            <CardApresentacao
              titulo={projeto.titulo}
              texto={projeto.descricao}
              src={projeto.imagemUrl}
            ></CardApresentacao>
          ))} */}
        </div>
      </div>
    </Pagina>
  );
}
