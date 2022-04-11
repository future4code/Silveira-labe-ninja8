import React from "react";
import { AppContainer } from "./components/AppContainer";
import Cabecalho from "./components/Cabecalho";
import styled, { createGlobalStyle } from "styled-components";
import PaginaInicial from "./Pages/PaginaInicial";
import PaginaCadastro from "./Pages/PaginaCadastro";
import PaginaContrato from "./Pages/PaginaContrato";
import Filtros from "./components/filtros";
import CardServico from "./components/CardServicos";

const EstiloGeral = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
  position: relative;
}
`;

function App() {
  return (
    <div>
      <EstiloGeral />
      <CardServico/>
      {/* <Filtros/> */}
     {/* <PaginaCadastro/> */}
      {/* {<PaginaInicial/>} */}
      {/* <AppContainer /> */}
     {/* <Cabecalho /> */}
    </div>
  );
}

export default App;
