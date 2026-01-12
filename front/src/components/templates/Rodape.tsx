import { FaTrademark } from "react-icons/fa";

export default function Rodape() {
  return (
    <footer className="bg-colors-header-footer border-t fixed bottom-0 left-0 w-full">
      <div className="flex justify-end  border-colors-dark-match px-6 py-3 boxed">
        <span>All rights reserved</span>
        <FaTrademark className="text-custom-middleBlue"></FaTrademark>
      </div>
    </footer>
  );
}
