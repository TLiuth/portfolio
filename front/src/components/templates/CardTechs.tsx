import React from "react";

interface cardTechsProps {
  icone: any;
  titulo: string;
}
export default function CardTechs(props: cardTechsProps) {
  return (
    <div
      className="flex flex-col items-center align-middle 
    justify-center size-30 rounded-2xl bg-slate-50 border-2 border-slate-300
    hover:border-custom-middleBlue shadow-md hover:shadow-xl transition-all duration-300"
    >
      <props.icone
        size={25}
        stroke={2}
        className="text-custom-darkBlueSecondary"
      />
      <span className="text-custom-darkBlueSecondary pt-3 text-xl text-center">
        {props.titulo}
      </span>
    </div>
  );
}
