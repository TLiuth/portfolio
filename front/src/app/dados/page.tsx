import Pagina from "@/components/templates/Pagina";
import Image from "next/image";
import CardTechs from "@/components/templates/CardTechs";
import { FaG, FaPython } from "react-icons/fa6";
import { SiPandas } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import getProjetos from "@/data/service/obterProjetos";
import ProjetosCarousel from "@/components/templates/ProjetosCarousel";

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
          <CardTechs icone={FaPython} titulo="Python"></CardTechs>
          <CardTechs icone={SiPandas} titulo="Pandas"></CardTechs>
          <CardTechs icone={SiJupyter} titulo="Jupyter Lab"></CardTechs>
          <CardTechs icone={SiPandas} titulo="Pandas"></CardTechs>
          <CardTechs
            icone={SiApacheairflow}
            titulo="Apache Airflow"
          ></CardTechs>
          <CardTechs icone={SiPandas} titulo="Pandas"></CardTechs>
        </div>
        <span className="text-4xl text-colors-dark-match">Projetos</span>
        <div className="flex flex-col flex-1 gap-5">
          <ProjetosCarousel
            projetos={projetos.filter((projeto) => projeto.tipo === "dados")}
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
