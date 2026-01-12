import { PiDevToLogo } from "react-icons/pi";

export default function Cabecalho() {
  return (
    <header className="pl-20 flex justify-between items-center bg-colors-header-footer border-b border-colors-dark-match px-6 py-3">
      <div className="flex gap-3 items-center boxed pl-5">
        <PiDevToLogo className="text-colors-contrast-match text-4xl"></PiDevToLogo>
        <span className="font-bold text-white">My Portfolio</span>
      </div>
    </header>
  );
}
