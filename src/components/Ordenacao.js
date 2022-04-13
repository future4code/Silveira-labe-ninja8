import React from "react";

class Ordenacao extends React.Component {
  state = {
    ordenadoPor: "",
    ordenacaoDirecao: "",
  };

  onChangeOrdenaPor = (event) => {
    this.setState({
      ordenadoPor: event.target.value,
    });
  };
  onChangeOrdenaDirecao = (event) => {
    this.setState({
      ordenacaoDirecao: event.target.value,
    });
  };

  limpaInputs = () => {
    this.setState({
      ordenadoPor: "",
      ordenacaoDirecao: "",
    });
  };

  render() {
    return (
      <div>
        <select
          onChange={this.onChangeOrdenaPor}
          value={this.state.ordenadoPor}
        >
          <option value={""}> Ordenar por </option>
          <option value={"tituloOuDescricao"}> Título ou Descrição </option>
          <option value={"preco"}> Preço </option>
          <option value={"prazo"}> Prazo </option>
        </select>

        <select
          onChange={this.onChangeOrdenaDirecao}
          value={this.state.ordenacaoDirecao}
        >
          <option value={""}> Ordem </option>
          <option value={"crescente"}> Crescente </option>
          <option value={"descrescente"}> Decrescente </option>
        </select>
      </div>
    );
  }
}

export default Ordenacao;
