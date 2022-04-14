import React from "react";
import Axios from "axios";
import { BASE_url } from "../constants/urls";

export default class PaginaDetalhes extends React.Component {
  state = {
    servico: [],
  };

  componentDidMount() {
      this.mostraDetalhesDoServico();
  };

  mostraDetalhesDoServico = async () => {
    const url = `${BASE_url}/jobs/${this.props.servicoClicado}`;

    try {
      const detalhesServico = await Axios.get(url, {
        headers: {
          Authorization: "bdfba6d4-d485-47b5-94e1-096ed9cca2bf",
        },
      });
      const copiaServico = [...this.state.servico, detalhesServico.data];
      this.setState({ servico: copiaServico });
    } catch (err) {
      alert(err.message);
    }
  };

  mascDataString = (dataString) => {
    const date = new Date(dataString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  } 

  
  render() {
    const servicoFiltrado = this.state.servico.map((servico) => {
      return (
        <div>
          <h1> {servico.title} </h1>

          <ul>
            <li> Descrição: {servico.description} </li>
            <li> Preço: {servico.price} </li>
            <li> Prazo: {this.mascDataString(servico.dueDate)} </li>
            <li> Formas de pagamento: {servico.paymentMethods} </li>
          </ul>

          <div>
            <button onClick={this.props.vaiParaContrato}> Voltar </button>
          </div>
        </div>
      );
    });
    return <>{servicoFiltrado}</>;
  }
}
