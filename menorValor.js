const livros = require('./produtos');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(`o livro mais barato é o ${livros[maisBarato].titulo} e ele custa ${livros[maisBarato].preco}`);