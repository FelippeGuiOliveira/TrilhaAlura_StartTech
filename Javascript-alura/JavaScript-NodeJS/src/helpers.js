function filtraOcorrencias (paragrafos) {
    return Object.keys(paragrafos).filter(chave => paragrafos[chave] > 1)
}

function montaSaidaArquivo (listaPalavras) {
    let textoFinal = '';
    
    //filtro para apagar paragrafos vazios
    const paragrafosVazio = listaPalavras.filter(paragrafos => {
        const pragVazio = filtraOcorrencias(paragrafos)
        return pragVazio.length > 0
    })

    paragrafosVazio.forEach((paragrafos, indice) => {
        const duplicadas = filtraOcorrencias(paragrafos).join(', ')
        textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`
    });
    return textoFinal
}

export { montaSaidaArquivo }