import React from "react";
import Cabecalho from "../components/Cabecalho";
import styled from "styled-components";

const PaginaProdutos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 50%;
  top: 10vh;
`;

const CaixaInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh;
  width: 50%;

  input,
  select,
  button {
    margin: 1vh;
  }
`;

export default class PaginaCadastro extends React.Component {
  state = {
    inputProduto: "",
    inputDescricao: "",
    inputPreco: "",
    inputPagamento: {
      cartaoDeCredito: false,
      cartaoDeDebito: false,
    },
    inputData: "",
  };

  onChangeInputProduto = (event) => {
    this.setState({ inputProduto: event.target.value });
  };

  onChangeInputDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };

  onChangeInputPreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };

  onChangeSelectPagamento = (event, name) => {
    const copiaPagamento = {...this.state.inputPagamento};
    copiaPagamento[name] = event.target.checked

    this.setState({ inputPagamento: copiaPagamento });
  };

  onChangeInputData = (event) => {
    this.setState({ inputData: event.target.value });
  };

  limparInputs = () => {
    this.setState({
      inputProduto: "",
      inputDescricao: "",
      inputPreco: "",
      inputPagamento: "",
      inputData: "",
    });
  };

  render() {
    return (
      <>
        <PaginaProdutos>
          <h1> Cadastre seu serviço </h1>

          <CaixaInputs>
            <input
              onChange={this.onChangeInputProduto}
              value={this.state.inputProduto}
              type="text"
              placeholder="Produto"
            />
            <input
              onChange={this.onChangeInputDescricao}
              value={this.state.inputDescricao}
              type="text"
              placeholder="Descrição"
            />
            <input
              onChange={this.onChangeInputPreco}
              value={this.state.inputPreco}
              type="number"
              placeholder="Preço"
            />
            <select
              onChange={this.onChangeSelectPagamento}
              value={this.state.inputPagamento}
              // multiple
            >
              <option> Cartão de crédito </option>
              <option> Cartão de débito </option>
              <option> PayPal </option>
              <option> Boleto bancário </option>
              <option> Pix </option>
            </select>
            <label>
              <input
                type="checkbox"
                checked={this.state.inputPagamento.cartaoDeCredito}
                onChange={(event) => this.onChangeSelectPagamento(event, "cartaoDeCredito")}
              />
              Cartão de Crédito
            </label>

            <label>
              <input
                type="checkbox"
                checked={this.state.inputPagamento.cartaoDeDebito}
                onChange={(event) => this.onChangeSelectPagamento(event, "cartaoDeDebito")}
              />
              Cartão de Débito
            </label>

            <input
              onChange={this.onChangeInputData}
              value={this.state.inputData}
              type="date"
            />
            <button onClick={this.limparInputs}> Cadastrar serviço </button>
          </CaixaInputs>
        </PaginaProdutos>
      </>
    );
  }
}
