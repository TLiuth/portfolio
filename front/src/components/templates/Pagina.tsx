"use client";
import { useState } from "react";
import { Menbere } from "next/font/google";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-custom-lightBlue">
      <Cabecalho menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="flex-1 flex flex-col md:flex-row boxed">
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="flex-1 p-4 sm:p-6 md:p-8 bg-custom-lightBlue">
          {props.children}
        </main>
      </div>
      <Rodape />
    </div>
  );
}
