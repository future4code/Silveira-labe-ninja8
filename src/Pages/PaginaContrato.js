import React from 'react'
import CardServico from '../components/CardServicos'
import Filtros from '../components/filtros'
import Ordenacao from '../components/Ordenacao'

export default class PaginaContrato extends React.Component {

    
    render () {
        return (
            <>
               {/* {<Filtros/>} */}
                <Ordenacao/>
                <CardServico irParaDetalhes={this.props.irParaDetalhes}/>

            </>
        )
    }
}