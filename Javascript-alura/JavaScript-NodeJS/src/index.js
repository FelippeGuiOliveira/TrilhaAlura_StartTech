export function contaPalavras(texto) {
  const paragrafos = extraiPalavras(texto)

  //verifica se tem alguma coisa no texto que é diferente de paragafo ele ignora
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  })
  return contagem;
}

function extraiPalavras(texto) {
  //Transforma o todo o texto em letras minusculas e quebra o texto sempre que pula uma linha
  return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
  //Retira caracteres especiais das palvras para facilitar a contagem
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`´~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
  //Quebra de palavras nos espaços entre palavras
  const listaPalavras = texto.split(' ');
  
  //"biblioteca" que vai salvar as palavras que possuem mais de 3 caracteres
  const resultado = {};
  
  //Conta quantas vezes as palavras com mais de 3 letras se repete
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra)
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  })
  return resultado
}
