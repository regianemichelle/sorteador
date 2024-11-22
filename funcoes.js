// script.js

document.addEventListener("DOMContentLoaded", () => {
    const nomes = [];
    const inputNome = document.getElementById("nome");
    const botaoAdicionar = document.getElementById("adicionar");
    const listaNomes = document.getElementById("lista-nomes");
    const botaoSorteio = document.getElementById("sorteio");
    const resultado = document.getElementById("resultado");

    botaoAdicionar.addEventListener("click", () => {
        const nome = inputNome.value.trim();
        if (nome) {
            nomes.push(nome);
            atualizarLista();
            inputNome.value = ""; // Limpa o campo de entrada
        } else {
            alert("Por favor, digite um nome válido.");
        }
    });

    botaoSorteio.addEventListener("click", () => {
        if (nomes.length === 0) {
            alert("Adicione nomes antes de realizar o sorteio.");
            return;
        }
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        resultado.textContent = `O nome sorteado é: ${nomes[indiceSorteado]}`;
    });

    function atualizarLista() {
        listaNomes.innerHTML = ""; // Limpa a lista
        nomes.forEach((nome) => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }
});
