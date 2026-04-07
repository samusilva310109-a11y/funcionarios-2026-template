'use strict'


/**
 * Map != ForEach
 * 
 * Apesar de ambas serem utilizadas em arrays, exite uma diferença entre o map e o foreach
 * 
 * O forEach ele apenas percorre uma array e não retorna valores por si só
 * 
 * O Map retorna uma array contendo os dados de outra Array
 * 
 */

import funcionarios from "./funcionarios.json" with { type: "json" }

function criarCard(funcionario) {
    const card = document.createElement("div")
    card.className = "card"
    
    const foto = document.createElement("img")
    foto.src = `./img/${funcionario.imagem}`
    foto.alt = `Foto de ${funcionario.nome}`
    
    const nome = document.createElement("h3")
    nome.textContent = funcionario.nome

    const cargo = document.createElement("span")
    cargo.textContent = funcionario.cargo

    card.append(foto, nome, cargo)

    return card
}

const cards = funcionarios.map(criarCard)

document.getElementById("container").replaceChildren(...cards)
// os "..." servem para "espalhar" o array

