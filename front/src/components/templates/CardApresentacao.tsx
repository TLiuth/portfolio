import Image from "next/image";

interface CardApresentacaoProps {
  src: string;
  titulo: string;
  texto: string;
  altText?: string;
  corFundo?: string;
  corBorda?: string;
}

export default function CardApresentacao(props: CardApresentacaoProps) {
  const altText = props.altText ? props.altText : "";

  return (
    <div
      className="gap-3 sm:gap-5 flex flex-col sm:flex-row w-full p-4 sm:p-6 md:p-10 rounded-2xl"
      style={{
        backgroundColor: props.corFundo
          ? `var(--color-${props.corFundo})`
          : "var(--color-colors-light-match)",
        borderColor: props.corBorda
          ? `var(--color-${props.corBorda})`
          : undefined,
        borderWidth: props.corBorda ? "5px" : undefined,
      }}
    >
      <Image
        height={267}
        width={200}
        className="rounded-2xl shadow-2xl shadow-black border-2 border-black object-cover w-full sm:w-auto h-auto sm:h-[267px]"
        src={props.src}
        alt={altText}
      ></Image>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold text-zinc-900">
          {props.titulo}
        </span>
        <span className="text-base sm:text-xl text-zinc-800 text-justify">
          {props.texto}
        </span>
      </div>
    </div>
  );
}
