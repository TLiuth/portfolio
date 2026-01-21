"use client";

import Projeto from "@/constants/projetos.entity";
import Carousel from "./Carousel";
import Image from "next/image";

export default function ProjetosCarousel(props: { projetos: Projeto[] }) {
  return (
    <Carousel
      items={props.projetos}
      renderItem={(projeto) => (
        <div className="bg-colors-light-match grid grid-cols-1 md:grid-cols-2 flex-1 rounded-2xl p-3 sm:p-4 md:p-5 gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <Image
              height={270}
              width={400}
              className="rounded-2xl bg-zinc-600 shadow-2xl shadow-black border-2 border-black w-full md:w-auto h-auto md:h-[270px] max-h-[270px] object-cover"
              src={projeto.imagemUrl}
              alt={projeto.descricao}
            ></Image>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900">
              {projeto.titulo}
            </span>
            <span className="text-sm sm:text-base md:text-xl text-zinc-700">
              {projeto.descricao}
            </span>
          </div>
        </div>
      )}
    />
  );
}
