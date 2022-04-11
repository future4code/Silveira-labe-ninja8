import React from "react";
import Cabecalho from "../components/Cabecalho";
import styled from 'styled-components'

const PaginaInicial = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
top: 20vh;
`
const TituloPagina = styled.h1`
padding-bottom: 25px;
`
const Botoes = styled.div`
display: flex;
margin-top: 10px;
`

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Cabecalho />
        <PaginaInicial>
          <TituloPagina> LabeNinjas </TituloPagina>
          <h3> O talento certo, no momento certo </h3>
          <Botoes>
            <button> Quero ser um ninja </button>
            <button> Contratar um ninja </button>
          </Botoes>
        </PaginaInicial>
      </div>
    );
  }
}
