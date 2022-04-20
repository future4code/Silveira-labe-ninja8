import React from "react";
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
        <PaginaInicial>
          <TituloPagina> LabeNinjas </TituloPagina>
          <h3> O talento certo, no momento certo </h3>
          <Botoes>
            <button onClick={this.props.vaiParaCadastro}> Quero ser um ninja </button>
            <button onClick={this.props.vaiParaContrato}> Contratar um ninja </button>
          </Botoes>
        </PaginaInicial>
      </div>
    );
  }
}
