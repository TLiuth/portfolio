"use client";

import Pagina from "@/components/templates/Pagina";
import React from "react";

export default function error() {
  return (
    <Pagina className="items-center justify-center align-middle">
      <span className="text-black text-6xl text-bold">
        Ocorreu um erro ao carregar informações
      </span>
    </Pagina>
  );
}
