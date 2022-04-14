import React from 'react'

export default class PaginaDetalhes extends React.Component {

    render() {

        return(
            <div>
                <h1> Título Produto </h1>
                <ul>
                    <li> Descrição: sjjsll </li>
                    <li> Preço: 00,00 </li>
                    <li> Formas de pagamento: furto </li>
                </ul>

                <button onClick={this.props.vaiParaContrato}> voltar </button>
                <button> Adicionar ao carrinho </button>
            </div>
        )
    }
}