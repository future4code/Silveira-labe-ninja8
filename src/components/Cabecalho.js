import React from "react";
import styled from "styled-components";

const EstiloCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgb(120, 103, 191);
`;

export default class Cabecalho extends React.Component {

  render() {
    return (
      <EstiloCabecalho>
        <h1> Labeninjas </h1>
        <div>
          <button onClick={this.props.voltarParaInicial}> Home </button>
          <button onClick={this.props.vaiParaCarrinho}> Carrinho </button>
        </div>
      </EstiloCabecalho>
    );
  }
}


