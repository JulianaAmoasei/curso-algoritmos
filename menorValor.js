const livros = require('./produtos');

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;
  
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

console.log(menorValor(livros, 0))

module.exports = menorValor