import Link from "next/link";
import React from "react";

interface MenuItemProps {
  icone?: any;
  texto: string;
  href: string;
  font?: string;
}

export default function MenuItem(props: MenuItemProps) {
  console.log(props.font);
  return (
    <div className="group flex items-center gap-2 pl-4 p-2 hover:bg-colors-contrast-match hover:rounded-2xl">
      <props.icone
        size={22}
        stroke={1.5}
        className="text-colors-contrast-match group-hover:text-white"
      />
      <Link href={props.href} className="text-xl">
        <span className={props.font}>{props.texto}</span>
      </Link>
    </div>
  );
}
