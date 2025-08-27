# 🕊️ Conclave Simulator

![Node.js](https://img.shields.io/badge/Node.js-14+-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## Descrição

Simulação de um **conclave**, o processo de eleição de um novo Papa.  
O programa é executado no terminal, permitindo cadastrar cardeais, realizar votação secreta, contabilizar votos e anunciar o novo Papa.  
Se nenhum cardeal atingir **2/3 dos votos**, a votação se repete automaticamente.

---

## Tabela de Conteúdo

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como Usar](#como-usar)
- [Exemplo de Execução](#exemplo-de-execução)
- [Licença](#licença)

---

## Funcionalidades

- Cadastro de cardeais com ID automático.
- Votação secreta com verificação de votos válidos.
- Cálculo automático de 2/3 dos votos para eleger o Papa.
- Loop de votação até que um Papa seja eleito.
- Consoles visuais com separadores e mensagens de acompanhamento.
- Pausas estratégicas para simular suspense entre rodadas.

---

## Tecnologias

- JavaScript (Node.js)
- [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) para entrada de dados no terminal

---

## Como Usar

1. Clone ou baixe este repositório.
2. Abra o terminal na pasta do projeto.
3. Instale todas as dependência:

```bash
npm i
```

4. Execute o programa

```bash
node conclave.js
```

5. Siga as instruções no terminal:

- Informe o número de cardeais participantes.

- Digite os nomes dos cardeais.

- Cada cardeal vota em outro cardeal.

- O programa exibirá os resultados e anunciará o Papa.

- Se nenhum cardeal atingir 2/3 dos votos, uma nova rodada é iniciada automaticamente.
