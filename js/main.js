const linksNavegacao = document.querySelectorAll("nav a");

const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

/* forEach percorre todos os links selecionados para comparar um por um */
linksNavegacao.forEach((link) => {
  const destino = link.getAttribute("href");

  if (destino === paginaAtual) {
    /* classList.add adiciona uma classe CSS ao elemento indicado*/
    link.classList.add("link-ativo");
  }
});

/*
        [ <a href="index.html">Início</a> ]
        [ <a href="bilheterias.html">Bilheterias</a> -> injeta CSS para destaque visual ]
        [ <a href="netflix.html">Netflix</a> ]

*/
