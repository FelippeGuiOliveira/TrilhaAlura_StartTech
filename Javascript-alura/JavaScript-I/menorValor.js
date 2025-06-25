//colocar o array abaixo em um arquivo separado para ter informações mais completas
//const precoLivros = [25, 15, 30, 50, 45, 20];
const livros = require(`./listaLivros`)

function menorValor(arrProdutos, posicaoInicial) {    
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        //código de busca do valor mais barato
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}

// teste da função
// console.log(menorValor(livros, 0)); 
module.exports = menorValor;
