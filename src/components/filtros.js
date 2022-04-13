import React from 'react'

export default class Filtros extends React.Component {
    state = {
      
      filtrar: "",
      filtrarPor: "",
      
    };
  
    onChangeFiltraPor = (event) => {
      this.setState({
        filtrarPor: event.target.value
      });
    };
    
  
    onChangeFiltrar = (event) => {
      this.setState({
        filtrar: event.target.value
      });
    };
  
    limpaInputs = () => {
      this.setState({
        filtrar: "",
        filtrarPor: "",
      });
    };
  
    render() {
      const produtosFiltrados = this.state.produtos.filter((produto) => {
        
        if (this.state.filtrarPor === "tituloOuDescricao") {
  
          return (
            produto.titulo.includes(this.state.filtrar) ||
            produto.descricao.includes(this.state.filtrar)
          );
        }
  
        if (this.state.filtrarPor === "precoMaximo") {
          return produto.preco <= Number(this.state.filtrar)
          
        }
  
        if (this.state.filtrarPor === "precoMinimo") {
          return produto.preco >= Number(this.state.filtrar)
         }
        
        if (this.state.filtrarPor === "prazo") {
          console.log(new Date(this.state.filtrar))
          return produto.prazo >= new Date(this.state.filtrar)
        } 
      });
  
      return (
        <div>
          <input onChange={this.onChangeFiltrar} value={this.state.filtrar} />
          <select onChange={this.onChangeFiltraPor} value={this.state.filtrarPor}>
            <option value={""}> Filtrar por </option>
            <option value={"tituloOuDescricao"}> Título ou Descrição </option>
            <option value={"precoMaximo"}> Preço Máximo</option>
            <option value={"precoMinimo"}> Preço Mínimo</option>
            <option value={"prazo"}> Prazo </option>
          </select>
  
          
  
          <button onClick={this.limpaInputs}>Limpar Filtros e Ordenação</button>
  
          <div>
            <ol>
              {produtosFiltrados.map((produto) => {
                return (
                  <li>
                    {produto.titulo} - {produto.descricao} - {produto.preco}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      );
    }
  }