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

# Atividade 3 — Continuação com foco em JavaScript e DOM

Agora vamos usar **JavaScript com DOM** para deixar o projeto mais interativo.

A ideia desta etapa é ensinar como:

- selecionar elementos do HTML com JavaScript
- alterar textos e classes
- criar elementos dinamicamente
- responder a eventos de clique e digitação
- atualizar o conteúdo da página sem reescrever o HTML inteiro

### **Task 1 — Criar a base JavaScript do projeto**

Organize a parte de JavaScript em arquivos separados, seguindo a mesma ideia usada no CSS:

- um arquivo JS global para comportamentos compartilhados - OK
- arquivos específicos para cada página que terá interação - OK
- conexão dos scripts nas páginas HTML - OK

### **Task 2 — Destacar no menu a página atual**

Use DOM para:

- selecionar os links da navegação - OK
- descobrir qual página está aberta no navegador - OK
- adicionar uma classe no link correspondente - OK
- destacar visualmente a página atual no menu - OK

### **Task 3 — Montar a tabela de bilheterias com DOM**

Em vez de deixar todas as linhas prontas no HTML, use JavaScript para:

- um arquivo com os dados dos filmes para reaproveitar nas páginas - OK
- ler os dados do ranking de bilheterias - OK
- criar as linhas da tabela com `createElement` - OK
- inserir as linhas no `tbody` - OK
- criar botões para alternar entre **Top 3** e **Top 5** - OK
- atualizar um texto mostrando quantos filmes estão sendo exibidos - OK

### **Task 4 — Criar uma busca dinâmica na página da Netflix**

Use DOM para:

- capturar o que o usuário digita em um campo de busca
- filtrar os filmes pelo nome
- atualizar a tabela em tempo real
- mostrar quantos filmes foram encontrados

### **Task 5 — Mostrar e esconder curiosidades na página Avatar**

Na página de detalhes do filme, use JavaScript para:

- criar uma área de curiosidades
- preencher essa área com itens vindos de um array
- mostrar ou esconder o conteúdo com um botão
- trocar o texto do botão conforme o estado da interface

---

## Comandos para iniciar o repositorio no github

echo "# piratex-tv" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/bruna-lins/piratex-tv.git
git push -u origin main

U - Untracked = Não rastreado
A - Added = Adicionado
M - Modified = Modificado

BRANCH = Ramificação do repositório. Extremamente útil para trabalhar coisas novas ou em equipe.

_git checkout -b JS-DOM_ -> Cria uma nova branch e se move para ela
_git checkout main_ -> se move para a branch indicada (no caso, main)
_git push origin JS-DOM_ -> após o primeiro push, esse é o padrão: JS-DOM deve ser trocado pela sua _branch_ atual
_git pull origin main_ -> ele "puxa" as alterações que existem no Github para nosso ambiente local (nosso computador).

DIFF -> O antes vs. o depois
