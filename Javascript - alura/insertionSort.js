const livros = require('./listaLivros')
const troca = require(`./troca`)

function inserctionSort(lista) {
    
    for (let atual = 1; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise);

            analise--
        }
    }
    console.log(lista);

}

inserctionSort(livros);
