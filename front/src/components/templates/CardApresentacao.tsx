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
      className="gap-5 flex w-100% p-10  rounded-2xl"
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
        className="rounded-2xl shadow-2xl shadow-black border-2 border-black"
        src={props.src}
        alt={altText}
      ></Image>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{props.titulo}</span>
        <span className="text-1xl">{props.texto}</span>
      </div>
    </div>
  );
}
