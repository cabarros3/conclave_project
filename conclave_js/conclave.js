const entrada = require("prompt-sync")({ sigint: false });

/*
 - Este é projeto conclave
 - Consiste em criar um programa que simule o conclave, o processo de votação para eleger um novo papa
 - primeiro o programa deve cadastrar 5 cardeais, ou a quantidade definida pelo usuário, e atribuir automaticamente um id para cada um dos cardeais
 - Depois deve iniciar automáticamente a votação secreta
 - Deve mostrar os cardeais cadastrados e os ids deles que deverão ser escolhidos para votar
 - Para eleger um papa, o cardeal precisa obter 2/3 dos votos
 - então encerrar a votação e mostrar o resultado
 - se a votação não eleger um papa, volta ao inicio
*/

// =================================
// declaração de variáveis e funções
// =================================

let cardeais = []; // salva os nomes e números dos cardeais em um vetor (uma lista de objetos)

// função para pegar a entrada do usuário e guardar os cardeais cadastrados
function nominateCardinals() {
  console.log("====================================");
  console.log("Cardinals Registration");
  console.log("====================================\n");

  // pergunta quantos cardeais participarão do conclave
  let qtd = Number(
    entrada("How many cardinals will participate in the conclave? ")
  );

  for (let i = 0; i < qtd; i++) {
    let nome = entrada(`Type the name of the cardeal ${i + 1}: `);
    let cardeal = {
      id: i + 1,
      nome: nome,
      votos: 0, // cardeais começam com 0 votos (todos)
    };
    cardeais.push(cardeal);
    console.log(
      `✅ The cardeal ${cardeal.nome} (ID: ${cardeal.id}) was insert into the system`
    );
  }

  console.log("\n✅ All cardinals have been registered!\n");
}

// função para votar nos cardeais cadastrados
function vote() {
  console.log("====================================");
  console.log("Voting Round");
  console.log("====================================\n");

  console.log("List of cardinals up to election: ");
  cardeais.forEach((c) => console.log(`${c.id} - ${c.nome}`));
  console.log("0 - Finish voting");

  while (true) {
    let voto = entrada("Please, insert your vote (or 0 to finish): ");

    if (voto === "0") {
      console.log("\n✅ Voting finished!\n");
      break; // encerra votação
    }

    voto = Number(voto);

    // Verifica se o voto é válido
    if (voto >= 1 && voto <= cardeais.length) {
      cardeais[voto - 1].votos++; // usa o índice correspondente, id começa em 1, mas indice começa em 0. então subtrai para pegar o índice.
      console.log(`🗳️  Vote recorded for ${cardeais[voto - 1].nome}\n`);
    } else {
      console.log("❌ Invalid vote. Please try again.\n");
    }
  }
}

// função para contar os votos
function countVotes() {
  console.log("\n📊 Result of the voting:");
  cardeais.forEach((c) => console.log(` Cardinal ${c.nome}: ${c.votos} votos`));
}

// função para mostrar o novo papa
function showNewPope() {
  // somar os votos
  let totalVotos = 0;
  for (let i = 0; i < cardeais.length; i++) {
    totalVotos += cardeais[i].votos;
  }

  // Calcular 2/3
  // se a divisão não for exata, arredondar pra cima.
  let necessario = (2 * totalVotos) / 3;
  if (necessario % 1 !== 0) {
    // se não for inteiro
    necessario = parseInt(necessario) + 1; // arredonda pra cima
  }

  // verifica quem atingiu o necessário
  let eleito = null;
  for (let i = 0; i < cardeais.length; i++) {
    if (cardeais[i].votos >= necessario) {
      eleito = cardeais[i];
      break; // se verdadeiro, pode parar
    }
  }

  // mostra resultado da eleição
  if (eleito !== null) {
    console.log(
      "\nHabemus Papam! 🎉 The new Pope is " +
        eleito.nome +
        ", with " +
        eleito.votos +
        " votes."
    );
  } else {
    console.log("\nNo Pope was elected. A new ballot is required.");
  }

  return eleito;
}

// ========
// conclave
// ========

console.log("====================================");
console.log("Conclave: the rising of a new pope");
console.log("====================================");
console.log("This is an anonymous election\n");

nominateCardinals();

let papaEleito = null;

while (papaEleito === null) {
  // antes de cada rodada, zera os votos
  for (let i = 0; i < cardeais.length; i++) {
    cardeais[i].votos = 0;
  }

  vote();
  countVotes();

  papaEleito = showNewPope();

  if (papaEleito === null) {
    console.log("\nNo Pope was elected. 🔥 A new ballot will begin...\n");
  }
}
