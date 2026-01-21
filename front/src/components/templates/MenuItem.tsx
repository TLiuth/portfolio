import Link from "next/link";
import React from "react";

interface MenuItemProps {
  icone?: any;
  texto: string;
  href: string;
  font?: string;
  onClick?: () => void;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div className="group flex items-center gap-2 pl-4 p-2 hover:bg-colors-contrast-match hover:rounded-2xl">
      <props.icone
        size={22}
        stroke={1.5}
        className="text-colors-contrast-match group-hover:text-white"
      />
      <Link
        href={props.href}
        className="text-lg sm:text-xl text-zinc-300 group-hover:text-zinc-900"
        onClick={props.onClick}
      >
        <span className={props.font}>{props.texto}</span>
      </Link>
    </div>
  );
}
