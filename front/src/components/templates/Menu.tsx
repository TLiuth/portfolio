import MenuItem from "./MenuItem";
import { RiCodeView } from "react-icons/ri";
import { MdOutlineDataThresholding } from "react-icons/md";
import { MdDraw } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Menu({ menuOpen, setMenuOpen }: MenuProps) {
  return (
    <>
      {/* Overlay - darkens screen when menu is open on mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu sidebar */}
      <aside
        className={`
        fixed md:relative
        top-0 md:top-auto
        left-0 md:left-auto
        h-full md:h-auto
        z-50 md:z-auto
        flex flex-col
        w-80 md:w-80
        pt-16 md:pt-20
        bg-colors-dark-match
        p-4 md:p-6
        border-r-0 md:border-r border-zinc-800
        overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <nav className="flex flex-col gap-2">
          <MenuItem
            texto="Página Inicial"
            href="/"
            icone={IoMdHome}
            onClick={() => setMenuOpen(false)}
          />
          <MenuItem
            texto="Programação"
            href="/programacao"
            icone={RiCodeView}
            onClick={() => setMenuOpen(false)}
          />
          <MenuItem
            texto="Análise de Dados"
            href="/dados"
            icone={MdOutlineDataThresholding}
            onClick={() => setMenuOpen(false)}
          />
          <hr className="text-colors-contrast-match mt-5" />
          <MenuItem
            texto="Mapas"
            href="/mapas"
            icone={MdDraw}
            font="font-pixel"
            onClick={() => setMenuOpen(false)}
          />
          <MenuItem
            texto="Escrita"
            href="/escrita"
            icone={FaPenFancy}
            onClick={() => setMenuOpen(false)}
          />
        </nav>
        <Link
          className="group bg-colors-contrast-match rounded-2xl px-4 py-4 flex justify-center items-center gap-2 hover:bg-colors-contrast-darker relative md:absolute md:top-170 md:left-1/2 md:-translate-x-1/2 w-full md:w-64 mt-6 md:mt-0"
          href="/assets/files/curriculo.pdf"
          download="ThiagoAyolphiLiuth_AnalistaDeDados.pdf"
          onClick={() => setMenuOpen(false)}
        >
          <FaFileDownload size={25} />
          <span className="text-xl sm:text-2xl">Baixar Currículo</span>
        </Link>
      </aside>
    </>
  );
}
