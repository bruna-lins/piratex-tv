MD = MARKDOWN = Útil para escrever documentações.

# Atividade 1

Você vai construir um pequeno site em HTML sobre **filmes mais populares**, dividido em 4 partes.

O site deve mostrar:

- as maiores bilheterias mundiais
- os filmes mais assistidos em bilheteria e na Netflix
- uma tabela com dados organizados
- uma página de detalhe com vídeo
- links entre as páginas

---

## Kanban da atividade

### Task 1 — Criar a página inicial

Crie a página `index.html` com:

- um título principal - OK
- uma breve introdução - OK
- uma lista com o **top 3 maiores bilheterias mundiais** - OK
- uma lista com o **top 3 filmes mais assistidos da Netflix** - OK
- um áudio representando a trilha sonora do seu filme favorito - OK

### Task 2 - Criar mais páginas

Crie duas páginas:

- `bilheterias.html` com o **top 5 das maiores bilheterias mundiais em tabela (nome, ano, bilheteria)** - OK
- `netflix.html` com o **top 5 filmes mais assistidos da Netflix em tabela (nome, ano, visualizações)** - OK

### Task 3 - Criar a página de detalhe do top 1

Crie a página `avatar.html` com:

- nome do filme - OK
- resumo curto - OK
- trailer em vídeo

### Task 4 - Tornar tudo navegável

Crie links de navegação (nav) entre as páginas:

- `index.html`
- `bilheterias.html`
- `netflix.html`
- `avatar.html`

Na tabela de bilheterias, o filme **Avatar** deve ser clicável e abrir sua página de detalhe.

# Atividade 2 — Continuação com foco em CSS

### **Task 1 — Criar o CSS global (style.css)** - OK

Crie um arquivo style.css e conecte esse arquivo em todas as páginas do projeto.

Nesse CSS global, defina estilos compartilhados, como:

- cor de fundo geral - OK
- fonte do site - OK
- aparência do título principal - OK
- estilo do menu de navegação - OK
- espaçamentos padrão - OK
- aparência base das tabelas - OK
- aparência padrão dos links - OK

### **Task 2 — Estilizar a página inicial (index.html)**

Depois do CSS global, faça ajustes específicos na página inicial:

- destacar melhor o título
- melhorar a aparência da introdução
- estilizar as listas
- melhorar visualmente a área do áudio
- trazer imagem (poster/cartaz) para os filmes

---

### **Task 3 — Estilizar as páginas de tabela (bilheterias.html e netflix.html)**

Aplicar melhorias como:

- bordas e espaçamento da tabela
- cor no cabeçalho
- melhor organização do conteúdo
- efeito visual nos links
- alinhamento das informações

---

### **Task 4 — Estilizar a página de detalhes (avatar.html)**

Aplicar melhorias como:

- destaque para o resumo
- melhor tamanho para o vídeo
- centralização dos elementos
- espaçamento entre seções
- aparência mais agradável da navegação

---

## Comandos para iniciar o repositorio no github

echo "# piratex-tv" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/bruna-lins/piratex-tv.git
git push -u origin main
