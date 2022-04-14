import React from 'react'
import styled from 'styled-components'

const CartaoServico = styled.div`
background-color: rgb(211, 211, 211);
border: 2px solid black;
display: flex;
flex-direction: column;
align-items: center;
width: 325px;
padding: 20px;
margin: 15px;

h4, p, div {
    margin-top: 2vh;
}
`

export default class CardServico extends React.Component {

  mascDataString = (dataString) => {
    const date = new Date(dataString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  } 

    render() {

        return (
          <>
            <CartaoServico>
              <h4> {this.props.titulo} </h4>
              <p> Preço: {this.props.preco} </p>
              <p> Prazo: {this.mascDataString(this.props.prazo)} </p>

              <div>
                <button onClick={() => this.props.irParaDetalhes(this.props.servico.id)}> Ver detalhes </button>
                <button> Adicionar ao Carrinho </button>
              </div>
            </CartaoServico>

          </>
        );
    }
}