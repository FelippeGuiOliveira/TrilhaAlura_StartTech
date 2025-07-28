import fs from 'fs'
import trataErros from './err/funcaoerr.js'
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';
import path from 'path'

const program = new Command;

// Define a versão do programa e as opções de linha de comando que o usuário pode passar
program
.version("0.0.1")
.option("-t, --texto <string>", "caminho do arquivo que será lido pelo programa")
.option("-d, --destino <string>", "caminho onde o arquivo sera criado e salvo")
.action((options) => {
  const { texto, destino } = options

  // Verifica se os dois parâmetros obrigatórios foram fornecidos
  if ( !texto || !destino ) {
    console.error(chalk.red("erro: favor inserir caminho de origem e destino"))
    program.help
      return;
  }

  // Converte os caminhos para caminhos absolutos
  const caminhoTexto = path.resolve(texto)
  const caminhoDestino = path.resolve(destino)

  // Tenta processar o arquivo e gerar um novo arquivo de saída
  try{
    processaArquivo(texto, destino)
    console.log(chalk.green("Arquivo criado com sucesso!"));
  } catch(erro) {
    // Exibe erro caso algo dê errado no processamento
    console.log("Ocorreu um erro no processamento do arquivo", erro);
  }
})

program.parse()

// Função que realiza a leitura do arquivo de texto e processa seu conteúdo
function processaArquivo(caminhoTexto, caminhoDestino) {
  fs.readFile(caminhoTexto, 'utf-8', (erro, texto) => {
    try {
      if (erro) throw erro

      // Conta as palavras do texto lido
      const resultado = contaPalavras(texto);

      // Gera e salva um novo arquivo com os resultados
      criaESalvaArquivo(resultado, caminhoDestino, caminhoTexto)
  } catch (erro) {
    // Trata erros que podem ocorrer durante o processo
      trataErros(erro);
    }
  });
}

async function criaESalvaArquivo(listaPalavras, endereco, caminhoTexto) {
    // Obtém o nome do arquivo original
    const nomeArquivo = path.basename(caminhoTexto)

    // Cria o caminho completo para o novo arquivo
    const arquivoNovo = path.join(endereco, nomeArquivo)

    // Converte a lista de palavras para um texto formatado
    const textoPalavras = montaSaidaArquivo(listaPalavras)

    try {
        // Salva o conteúdo formatado em um novo arquivo
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
    } catch (erro) {
      // Relança o erro para ser tratado pela função que chamou
        throw erro;
    }
}

// function criaESalvaArquivo(listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = montaSaidaArquivo(listaPalavras)
    
//     //Escreve um novo arquivo com as informações da primeira variável chamada com o resultado da segunda variálvel chamada 
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//     //Envia uma mensagem indicando que o arquivo foi crado com sucesso
//     .then(() => {
//         console.log('Arquivo criado com sucesso');
//     })
//     //Envia uma mensagem indicandoum erro na criação do arquivo
//     .catch((erro => {
//         throw erro
//     }))
//     //Envia uma mensagem indicando que tudo foi finalizado
//     .finally(() => {
//         console.log('Operação finalizada com sucesso');
//     })
// }

//node ./src/cli.js -t ./arquivos/texto-web.txt -d ./resultados/