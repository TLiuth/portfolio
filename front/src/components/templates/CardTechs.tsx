import React from "react";

interface cardTechsProps {
  icone: any;
  titulo: string;
}
export default function CardTechs(props: cardTechsProps) {
  return (
    <div
      className="flex flex-col items-center align-middle 
    justify-center h-24 w-24 sm:h-28 sm:w-28 md:h-30 md:w-30 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-slate-300
    hover:border-custom-middleBlue shadow-md hover:shadow-xl transition-all duration-300"
    >
      <props.icone
        size={20}
        className="w-5 h-5 sm:w-[25px] sm:h-[25px] text-custom-darkBlueSecondary"
        stroke={2}
      />
      <span className="text-custom-darkBlueSecondary pt-2 sm:pt-3 text-sm sm:text-base md:text-xl text-center">
        {props.titulo}
      </span>
    </div>
  );
}
