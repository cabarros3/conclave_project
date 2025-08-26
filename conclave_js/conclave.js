const entrada = require("prompt-sync")({ sigint: false });

/*
 - Este é projeto conclave
 - Consiste em criar um programa que simule o conclave, o processo de votação para eleger um novo papa
 - primeiro o programa deve cadastrar 5 cardeais e atribuir automaticamente um id para cada um dos cardeais
 - Depois deve iniciar automáticamente a votação secreta
 - Deve mostrar os cardeais cadastrados e os ids deles que deverão ser escolhidos para votar
 - Para eleger um papa, o cardeal precisa obter 2/3 dos votos(no mínimo 4 votos em 5)
 - então encerrar a votação e mostrar o resultado
*/

// Pegar e guardar os nomes e ids dos cardeais
console.log("Cadastre 5 cardeais");
let cardeais = []; // salva os nomes e números dos cardeais em um vetor (uma lista de objetos)

for (let i = 0; i < 5; i++) {
  let nome = entrada(`Digite o nome do cardeal ${i + 1}: `);
  let cardeal = {
    id: i + 1,
    nome: nome,
    votos: 0,
  };
  cardeais.push(cardeal);
  console.log(`O cardeal ${cardeal.nome} (ID: ${cardeal.id}) foi cadastrado`);
}

console.log(cardeais);

// criar contadores para cada cardeal
console.log("==========================");
console.log("Voto Secreto");
console.log("==========================");
