import React from "react";
import { AppContainer } from "./components/AppContainer";
import Cabecalho from "./components/Cabecalho";
import styled, { createGlobalStyle } from "styled-components";
import PaginaInicial from "./Pages/PaginaInicial";
import PaginaCadastro from "./Pages/PaginaCadastro";
import PaginaContrato from "./Pages/PaginaContrato";
import Filtros from "./components/filtros";
import CardServico from "./components/CardServicos";
import PaginaCarrinho from "./Pages/PaginaCarrinho";

const EstiloGeral = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
  position: relative;
}
`;

export default class App extends React.Component {
  state = {
    telaAtual: 'Pagina inicial'
  };

  trocarDeTela = () => {
    switch(this.state.telaAtual) {
      case 'Pagina inicial':
        return <PaginaInicial 
        vaiParaCadastro={this.vaiParaCadastro}
        vaiParaContrato={this.vaiParaContrato}
        />
      case 'carrinho':
        return <PaginaCarrinho/>
      case 'cadastrar': 
      return <PaginaCadastro/>
      case 'contratar': 
      return <PaginaContrato/>
      default:
        return <p> Houve um erro. Página não encontrada </p>
    }
  }

  vaiParaCadastro = () => {
    this.setState({telaAtual: "cadastrar"});
  };

  vaiParaContrato = () => {
    this.setState({telaAtual: "contratar"});
  };

  vaiParaCarrinho = () => {
    this.setState({telaAtual: 'carrinho'});
  };

  voltarParaInicial = () => {
    this.setState({telaAtual: 'Pagina inicial'})
  }

  render (){
  return (
    <div>
     <Cabecalho vaiParaCarrinho={this.vaiParaCarrinho} voltarParaInicial={this.voltarParaInicial}/>
     {this.trocarDeTela()}
    </div>
  );
  };
}


