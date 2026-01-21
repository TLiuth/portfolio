import { PiDevToLogo } from "react-icons/pi";
import { IoMenu, IoClose } from "react-icons/io5";

interface CabecalhoProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Cabecalho({ menuOpen, setMenuOpen }: CabecalhoProps) {
  return (
    <header className="flex justify-between items-center bg-colors-header-footer border-b border-colors-dark-match px-4 sm:px-6 py-3 relative z-50">
      <div className="flex gap-3 items-center boxed pl-0 sm:pl-5">
        <button
          className="md:hidden text-colors-contrast-match p-2 -ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>

        <PiDevToLogo className="text-colors-contrast-match text-3xl sm:text-4xl"></PiDevToLogo>
        <span className="font-bold text-white text-sm sm:text-base">
          My Portfolio
        </span>
      </div>
    </header>
  );
}
