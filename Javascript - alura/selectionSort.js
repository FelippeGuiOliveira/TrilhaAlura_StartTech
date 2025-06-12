const livros = require(`./listaLivros`);
const menorValor = require("./menorValor");

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);
    let livrosAtual = livros[atual];
    let livrosMenorPreço = livros[menor];

    livros[atual] = livrosMenorPreço;
    livros[menor] = livrosAtual;
}

// No lugar da parte de elemento do foreach indicado por "livro" podemos usar _ que indica que os elementos do array não serão utilizados
// livros.forEach((livro, indice) => {
//  let menor = menorValor(livros, indice)

//  let livroAtual = livros[indice];
//  let livroMenorPreco = livros[menor];

//  livros[indice] = livroMenorPreco
//  livros[menor] = livroAtual 
// })

console.log(livros);
