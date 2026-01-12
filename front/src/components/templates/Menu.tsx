import MenuItem from "./MenuItem";
import { RiCodeView } from "react-icons/ri";
import { MdOutlineDataThresholding } from "react-icons/md";
import { MdDraw } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

export default function Menu() {
  return (
    <aside className="relative flex flex-col w-80 pt-20 bg-colors-dark-match p-6 border-r border-zinc-800 ">
      <nav className="flex flex-col gap-2">
        <MenuItem texto="Página Inicial" href="/" icone={IoMdHome} />
        <MenuItem texto="Programação" href="/programacao" icone={RiCodeView} />
        <MenuItem
          texto="Análise de Dados"
          href="/dados"
          icone={MdOutlineDataThresholding}
        />
        <hr className="text-colors-contrast-match mt-5" />
        <MenuItem
          texto="Mapas"
          href="/mapas"
          icone={MdDraw}
          font="font-pixel"
        />
        <MenuItem texto="Escrita" href="/escrita" icone={FaPenFancy} />
      </nav>
      <Link
        className="group bg-colors-contrast-match rounded-2xl px-4 py-4 flex justify-center items-center gap-2 hover:bg-colors-contrast-darker absolute top-170 left-1/2 -translate-x-1/2 w-64"
        href="/assets/files/curriculo.pdf"
        download="ThiagoAyolphiLiuth_AnalistaDeDados.pdf"
      >
        <FaFileDownload size={25} />
        <span className="text-2xl">Baixar Currículo</span>
      </Link>
    </aside>
  );
}
