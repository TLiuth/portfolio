import { FaTrademark } from "react-icons/fa";

export default function Rodape() {
  return (
    <footer className="bg-colors-header-footer border-t relative sm:fixed sm:bottom-0 left-0 w-full">
      <div className="flex justify-center sm:justify-end border-colors-dark-match px-4 sm:px-6 py-3 boxed">
        <span className="text-sm sm:text-base">All rights reserved</span>
        <FaTrademark className="text-custom-middleBlue"></FaTrademark>
      </div>
    </footer>
  );
}
