import React from 'react'
import CardServico from '../components/CardServicos'
import Filtros from '../components/Filtros'
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