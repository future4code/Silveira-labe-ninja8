import React from 'react'

export default class Filtros extends React.Component {

    render (){

        return (
            <div>
                <input type='number' placeholder='Valor mínimo'/>
                <input type='number' placeholder='Valor máximo'/>
                <input type='text' placeholder='Busca por título ou descrição'/>
                <select>
                    <option> Sem ordenação </option>
                    <option> Menor Valor </option>
                    <option> Maior Valor </option>
                    <option> Título </option>  
                    <option> Prazo </option> 
                </select>
            </div>
        )
    }
}