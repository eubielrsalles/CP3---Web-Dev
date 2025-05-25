# 🎮 CP Lista de Jogos

Uma aplicação web simples e estilizada para listar e filtrar jogos disponíveis. Você pode visualizar todos os jogos cadastrados, filtrar por tipo e exibir apenas os que estão disponíveis para jogar no momento. Criado com HTML, CSS e JavaScript.

---

## 🖼️ Preview

![image](https://github.com/user-attachments/assets/ab10501e-2b49-4add-9d22-479e0162e7e7)

---

## 🚀 Funcionalidades:

- ✅ Ver todos os jogos
- 🎯 Filtrar jogos por tipo: Ação, Aventura, RPG, Estratégia, etc.
- 📦 Filtrar por disponibilidade: “Só os que dá pra jogar agora!”
- 💡 Interface dinâmica com JavaScript
- 🕹️ Visual com estilo retrô neon

---

## 🧰 Tecnologias Utilizadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="25"/> HTML5  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="25"/> CSS3  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="25"/> JavaScript

---

## 📁 Estrutura do Projeto:

```
CP-Lista-Jogos/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔗 Como acessar o projeto:

➡️ [Clique aqui para abrir o repositório](https://github.com/eubielrsalles/CP3---Web-Dev.git)

---

## 👨‍💻 Autores:

Gabriel Salles  
- LinkedIn: https://www.linkedin.com/in/gabriel-ribeiro-5bb567161/
- GitHub: https://github.com/eubielrsalles

Joan Ferreira
- LinkedIn: https://www.linkedin.com/in/joan-ferreira-campos-5b39262a0/ 
- GitHub: https://github.com/Joan45422

---

## 🧠 Lógica do Projeto:

### 🟠 Eventos que disparam ações
### 🔵 Funções Principais

#### 🔵 `mostrarJogos(listaDeJogosParaDesenhar)`
- Parâmetro: `listaDeJogosParaDesenhar` (array de jogos)
- Responsabilidade: Renderiza na tela todos os jogos da lista recebida
- Efeito: Atualiza o conteúdo da `<div id="prateleiraDeJogos">`

#### 🟠 `botaoTodos.addEventListener('click', ...)`
- Responsabilidade:
  - Exibe todos os jogos disponíveis (`mostrarJogos(meusJogos)`)
  - Reseta os campos do formulário de filtro (`formularioFiltro.reset()`)

#### 🟠 `formularioFiltro.addEventListener('submit', ...)`
- Responsabilidade:
  1. Impede o recarregamento da página (`evento.preventDefault()`)
  2. Lê o tipo de jogo e se o filtro “só disponíveis” está marcado
  3. Filtra o array `meusJogos` de acordo com os critérios
  4. Chama `mostrarJogos(jogosFiltrados)`

#### 🟠 `document.addEventListener('DOMContentLoaded', ...)`
- Responsabilidade: Exibe todos os jogos automaticamente assim que a página é carregada

---

### 🟢 Estrutura de Dados:

```js
const meusJogos = [
  { nome: "Minecraft", valor: 90, tipo: "sandbox", temPraJogar: true },
  { nome: "FIFA 24", valor: 250, tipo: "esportes", temPraJogar: false },
  { nome: "Cyberpunk 2077", valor: 200, tipo: "rpg", temPraJogar: true },
  // ... outros jogos
];
