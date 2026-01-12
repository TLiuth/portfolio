"use client";

import Projeto from "@/constants/projetos.entity";
import Carousel from "./Carousel";
import Image from "next/image";

export default function ProjetosCarousel(props: { projetos: Projeto[] }) {
  return (
    <Carousel
      items={props.projetos}
      renderItem={(projeto) => (
        <div className="bg-colors-light-match h-25% grid grid-cols-2 flex-1 rounded-2xl p-5 gap-2">
          <div className="flex flex-col items-center">
            <Image
              height={270}
              width={400}
              className="rounded-2xl bg-zinc-600 shadow-2xl shadow-black border-2 border-black h-[270px] w-auto object-cover"
              src={projeto.imagemUrl}
              alt={projeto.descricao}
            ></Image>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-zinc-900">
              {projeto.titulo}
            </span>
            <span className="text-xl text-zinc-700">{projeto.descricao}</span>
          </div>
        </div>
      )}
    />
  );
}
