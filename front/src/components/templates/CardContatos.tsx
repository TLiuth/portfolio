import Image from "next/image";
import Link from "next/link";

interface CardContatosProps {
  icone: any;
  titulo: string;
  altText?: string;
  corFundo?: string;
  corBorda?: string;
  href: string;
}

export default function CardContatos(props: CardContatosProps) {
  const altText = props.altText ? props.altText : "";

  return (
    <div
      className="group flex items-center w-full sm:flex-1 gap-2 sm:gap-3 p-2 sm:p-3 h-24 sm:h-32 rounded-2xl hover:!bg-colors-dark-match"
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
      <Link
        className="flex flex-1 items-center justify-center gap-2 sm:gap-3 text-zinc-900 group-hover:text-colors-light-match"
        href={props.href}
        target="_blank"
      >
        <props.icone
          size={40}
          className="w-10 h-10 sm:w-[60px] sm:h-[60px] text-zinc-900 group-hover:text-colors-light-match"
          stroke={1.5}
        />
        <span className="text-lg sm:text-2xl font-bold">{props.titulo}</span>
      </Link>
    </div>
  );
}
