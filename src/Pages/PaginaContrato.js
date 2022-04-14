import React from 'react'
import CardServico from '../components/CardServicos'
import Filtros from '../components/Filtros'
import { BASE_url } from '../constants/urls'
import Ordenacao from '../components/Ordenacao'
import Axios from 'axios'
import CardProdutosCarrinho from '../components/CardProdutosCarrinho'

export default class PaginaContrato extends React.Component {

    state = {
        servicos: []
    };

    componentDidMount() {
        this.resgataListaProdutos();
    }

    resgataListaProdutos = async () => {
        const url = `${BASE_url}/jobs`;
        try {
            const listaDeServicos = await Axios.get(url, {headers: {
                Authorization: "bdfba6d4-d485-47b5-94e1-096ed9cca2bf"
            }
        });
            this.setState({servicos: listaDeServicos.data.jobs});
            console.log(listaDeServicos.data.jobs);

        }catch(err){alert(err.message)};
    };
    
    render () {
        const listaDeServicosMapeada = this.state.servicos.map((servico) => {
            return <CardServico 
            key={servico.id}
            titulo={servico.title}
            preco={servico.price}
            prazo={servico.dueDate}
            servico={servico}
            irParaDetalhes={this.props.irParaDetalhes}

            />
        })
        return (
            <>
               {/* {<Filtros/>} */}
                <Ordenacao/>
                <div>
                    {listaDeServicosMapeada}
                </div>

            </>
        )
    }
}