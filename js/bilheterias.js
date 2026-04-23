/* querySelector: selecionar o primeiro elemento que combina com o 
selector/valor informado */
const corpoTabelaBilheterias = document.querySelector(
  "[data-tabela-bilheteria]",
);

const resumoBilheterias = document.querySelector("[data-resumo-bilheterias]");

/* querySelectorAll: retorna todos que possuem o atributo informado */
const botoesBilheterias = document.querySelectorAll("[data-limite]");

/* Operador ?? define um valor padrão caso o lado esquerdo venha nulo ou undefined */
const filmesBilheterias = window.catalogoFilmes?.bilheterias ?? [];

/* Objetivo:
- Substituir a escrita manual de vários <td>
- Cria cada celula da tabela pelo JS para reaproveitar a mesma lógica
*/
function criarCelula(texto) {
  // createElement: criar um novo elemento HTML pelo JS
  const td = document.createElement("td");

  // textContent: altera o texto visivel do elemento
  td.textContent = texto;

  return td;
}

/* Objetivo:
- Substitui as linhas fixas que antes estavam escritas no HTML
- Montar cada <tr> dinamicamente, baseado nos dados dos filmes
*/
function criarLinhasBilheteria(filmes) {
  const linha = document.createElement("tr");
  const celulaNome = document.createElement("td");

  if (filmes.link) {
    const link = document.createElement("a");
    link.href = filmes.link;
    link.textContent = filmes.nome;

    // appendChild: colocar um elemento dentro do outro
    celulaNome.appendChild(link);
  } else {
    celulaNome.textContent = filmes.nome;
  }

  // append: adiciona vários filhos de uma vez dentro do espaço indicado
  linha.append(
    celulaNome,
    criarCelula(filmes.ano),
    criarCelula(filmes.bilheteria),
  );
  return linha;
}

/* Objetivo:
- Controlar o estado visual e funcional dos botões
- desativa o botão que já está sendo aplicado 
*/
function atualizarBotoes(limiteAtual) {
  botoesBilheterias.forEach((botao) => {
    const limiteBotao = Number(botao.dataset.limite);

    botao.disabled = limiteBotao === limiteAtual;
  });
}

/* Objetivo: 
- A principal responsável por atualizar a interface (html/css)
- Decide quais filmes mostrar
- Preenche o tbody e atualizar o texto de resumo exibido
*/
function renderizarBilheterias(limite) {
  // slice: pega apenas uma parte do array
  const filmesVisiveis = filmesBilheterias.slice(0, limite);

  // map: percorrer a lista/objeto e aplicar a transformação indicada
  // ou seja, vamos percorrer a lista de filmesVisiveis e transformar em <tr>
  const linhas = filmesVisiveis.map(criarLinhasBilheteria);

  corpoTabelaBilheterias.replaceChildren(...linhas);

  resumoBilheterias.textContent = `Mostrando ${filmesVisiveis.length} de ${filmesBilheterias.length}`;
  atualizarBotoes(limite);
}

botoesBilheterias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const limite = Number(botao.dataset.limite);
    renderizarBilheterias(limite);
  });
});

renderizarBilheterias(5);
