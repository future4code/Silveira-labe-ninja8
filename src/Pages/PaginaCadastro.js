import React from "react";
import { BASE_url } from "../constants/urls";
import styled from "styled-components";
import axios from "axios";
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
    inputPagamento: [],
    inputData: "",
  };
  onChangeInputProduto = (event) => {
    this.setState({ inputProduto: event.target.value });
  };
  onChangeInputDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };
  onChangeInputPreco = (event) => {
    this.setState({ inputPreco: Number(event.target.value) });

  };
  onChangeSelectPagamento = (event, name) => {
    if (event.target.checked === true) {
      //Lógica de adicionar forma de pagamento
      const copiaPagamento = [...this.state.inputPagamento, name];
      this.setState({
        inputPagamento: copiaPagamento,
      });
    } else {
      //lógica de remover forma de pagamento
      const removePagamento = [...this.state.inputPagamento]; //possivel usar filter
      const posicaoParaRemover = removePagamento.indexOf(name); //indexOf encontra a posição de algum elemento dentro de um array
      removePagamento.splice(posicaoParaRemover, 1); //splice: dado uma posição, ele remove a partir dessa posição a quantidade
      this.setState({
        inputPagamento: removePagamento,
      });
    }
  };

  onChangeInputData = (event) => {
    this.setState({ inputData: event.target.value });
  };
  cadastrarServico = async () => {
    const url = `${BASE_url}/jobs`;
    const body = {
      title: this.state.inputProduto,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethods: this.state.inputPagamento,
      dueDate: this.state.inputData,
    };
    try {
      await axios.post(url, body, {
        headers: {
          Authorization: "bdfba6d4-d485-47b5-94e1-096ed9cca2bf",
        },
      });
      this.setState({
        inputProduto: "",
        inputDescricao: "",
        inputPreco: "",
        inputPagamento: "",
        inputData: "",
      });
      alert("Produto cadastrado.");
    } catch (err) {
      alert(err.message);
    }
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

            <label>
              <input
                type="checkbox"
                checked={this.state.inputPagamento.includes("cartaoDeCredito")} // includes funcionando pois inputPagamento é um array inicialmente
                onChange={(event) =>
                  this.onChangeSelectPagamento(event, "cartaoDeCredito")
                }
              />
              Cartão de Crédito
            </label>
            <label>
              <input
                type="checkbox"
                checked={this.state.inputPagamento.includes("cartaoDeDebito")}
                onChange={(event) =>
                  this.onChangeSelectPagamento(event, "cartaoDeDebito")
                }
              />
              Cartão de Débito
            </label>
            <label>
              <input
                type="checkbox"
                checked={this.state.inputPagamento.includes("paypal")}
                onChange={(event) =>
                  this.onChangeSelectPagamento(event, "paypal")
                }
              />
              PayPal
            </label>
            <label>
              <input
                type="checkbox"
                checked={this.state.inputPagamento.includes("boleto")}
                onChange={(event) =>
                  this.onChangeSelectPagamento(event, "boleto")
                }
              />
              Boleto Bancário
            </label>
            <label>
              <input
                type="checkbox"
                checked={this.state.inputPagamento.includes("pix")}
                onChange={(event) => this.onChangeSelectPagamento(event, "pix")}
              />
              Pix
            </label>

            <input
              onChange={this.onChangeInputData}
              value={this.state.inputData}
              type="date"
            />
            <button onClick={this.cadastrarServico}> Cadastrar serviço </button>
          </CaixaInputs>
        </PaginaProdutos>
      </>
    );
  }
}