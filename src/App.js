import React from "react";
import { AppContainer } from "./components/AppContainer";
import Cabecalho from "./components/Cabecalho";
import styled, { createGlobalStyle } from "styled-components";

const EstiloGeral = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
}
`;

function App() {
  return (
    <div>
      <EstiloGeral />
      {/* <AppContainer /> */}
      <Cabecalho />
    </div>
  );
}

export default App;
