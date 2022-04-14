import React from 'react'

export default class CardProdutosCarrinho extends React.Component {

    render () {

        return (
          <>
            <div>
              <p> nome </p>
              <p> Preço </p>
              <button> Remover </button>
            </div>

            <div>
              <p> Total </p>
              <button> Finalizar </button>
              <button onClick={this.props.voltaParaContrato}> Voltar </button>
            </div>
          </>
        );
    }
}