import React from 'react'
import CardProdutosCarrinho from '../components/CardProdutosCarrinho'

export default class PaginaCarrinho extends React.Component {
    render() {

        return (
            <>
                <CardProdutosCarrinho voltaParaContrato={this.props.vaiParaContrato}/>
            </>
        )
    }
}