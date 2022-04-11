import React from "react";
import Cabecalho from "../components/Cabecalho";
import styled from 'styled-components'

const PaginaProdutos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
max-width: 50%;
top: 10vh;
`

const CaixaInputs = styled.div`
display: flex;
flex-direction: column;
margin: 5vh;
width: 50%;

input, select, button {
    margin: 1vh;
}
`

export default class PaginaCadastro extends React.Component {
  render() {
    return (
      <>
        <Cabecalho />
        <PaginaProdutos>
            <h1> Cadastre seu serviço </h1>

            <CaixaInputs>
                <input type='text' placeholder='Produto'/>
                <input type='text' placeholder='Descrição'/>
                <input type='number' placeholder='Preço'/>
                <select size="5" multiple> 
                    <option> Cartão de crédito </option>
                    <option> Cartão de débito </option>
                    <option> PayPal </option>
                    <option> Boleto bancário </option>
                    <option> Pix </option>    
                </select>
                <input type='date'/>
                <button> Cadastrar serviço </button>
            </CaixaInputs>
        </PaginaProdutos>
      </>
    );
  }
}
