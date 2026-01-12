import { Menbere } from "next/font/google";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  return (
    <div className="flex flex-col min-h-screen bg-custom-lightBlue">
      <Cabecalho />
      <div className="flex-1 flex boxed">
        <Menu />
        <main className="flex-1 p-8 bg-custom-lightBlue">{props.children}</main>
      </div>
      <Rodape />
    </div>
  );
}
