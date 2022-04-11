import React from "react";
import styled from "styled-components";

const EstiloCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgb(120, 103, 191);
`;

class Cabecalho extends React.Component {
  state = {};
  render() {
    return (
      <EstiloCabecalho>
        <h1> Labeninjas </h1>
        <div>
          <button> Home </button>
          <button> Carrinho </button>
        </div>
      </EstiloCabecalho>
    );
  }
}

export default Cabecalho;
