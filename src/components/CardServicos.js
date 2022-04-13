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

    render() {

        return (
          <>
            <CartaoServico>
              <h4> Título genérico </h4>
              <p> Preço: Grátis </p>
              <p> Prazo: 01/01/2001 </p>

              <div>
                <button> Ver detalhes </button>
                <button> Adicionar ao Carrinho </button>
              </div>
            </CartaoServico>

            <CartaoServico>
              <h4> aaaaaaaa </h4>
              <p> Preço: 10,00 </p>
              <p> Prazo: 01/01/2001 </p>

              <div>
                <button> Ver detalhes </button>
                <button> Adicionar ao Carrinho </button>
              </div>
            </CartaoServico>

            <CartaoServico>
              <h4> CCCCCCCCC </h4>
              <p> Preço: 25,00 </p>
              <p> Prazo: 01/01/2001 </p>

              <div>
                <button> Ver detalhes </button>
                <button> Adicionar ao Carrinho </button>
              </div>
            </CartaoServico>
          </>
        );
    }
}