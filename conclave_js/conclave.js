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

// Pegar e guardar os nomes, ids e votos dos cardeais
console.log(
  "Please, type the names and numbers of the cardeals runing for pope"
);
let cardeais = []; // salva os nomes e números dos cardeais em um vetor (uma lista de objetos)

// for para pegar os cardeais e guardar no array
function nominateCardinals() {
  for (let i = 0; i < 5; i++) {
    let nome = entrada(`Type the name of the cardeal ${i + 1}: `);
    let cardeal = {
      id: i + 1,
      nome: nome,
      votos: 0, // cardeais começam com 0 votos (todos)
    };
    cardeais.push(cardeal);
    console.log(
      `The cardeal ${cardeal.nome} (ID: ${cardeal.id}) was insert into the system`
    );
  }
}

// console.log(cardeais);

// inicio da votação
console.log("====================================");
console.log("Conclave: the rising of a new pope");
console.log("====================================");

console.log("This is an anonymous election");

function vote() {
  for (let i = 0; i < cardeais.length; i++) {
    console.log("List of cardinales up to election: ");
    cardeais.forEach((c) => console.log(`${c.id} - ${c.nome}`));

    let voto = Number(entrada("Please, insert your vote: "));

    // Verifica se o voto é válido
    if (voto >= 1 && voto <= cardeais.length) {
      cardeais[voto - 1].votos++; // usa o índice correspondente, id começa em 1, mas indice começa em 0. então subtrai para pegar o índice.
    } else {
      console.log("Invalid vote");
      i--; // repete a votação deste cardeal
    }
  }
}

// função para contar os votos
function countVotes() {
  console.log("\nResultado da votação:");
  cardeais.forEach((c) =>
    console.log(` Cardinale ${c.nome}: ${c.votos} votos`)
  );
}

// função para mostrar o novo papa
function showNewPope() {}

// chamando as funções
nominateCardinals();
vote();
countVotes();
