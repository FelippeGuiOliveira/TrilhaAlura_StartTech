const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

console.log("Caminho do arquivo:", link); // Verifique o caminho

fs.readFile(link, 'utf-8', (erro, texto) => {
  console.log("Conteúdo do arquivo:", texto);
});
