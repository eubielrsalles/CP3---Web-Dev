const meusJogos = [
    // Legal jogar com mods
    { nome: "Minecraft", valor: 90, tipo: "sandbox", temPraJogar: true },
    { nome: "Grand Theft Auto V", valor: 150, tipo: "acao", temPraJogar: true },
    { nome: "The Witcher 3: Wild Hunt", valor: 120, tipo: "rpg", temPraJogar: true },
    // Claramente um dos piores jogos ja feitos
    { nome: "FIFA 24", valor: 250, tipo: "esportes", temPraJogar: false },
    { nome: "Cyberpunk 2077", valor: 200, tipo: "rpg", temPraJogar: true },
    { nome: "Red Dead Redemption 2", valor: 180, tipo: "aventura", temPraJogar: true },
    // SUUS
    { nome: "Among Us", valor: 25, tipo: "casual", temPraJogar: true },
    // Goat da franquia
    { nome: "Assassin's Creed Black Flag", valor: 170, tipo: "aventura", temPraJogar: false },
    { nome: "Titanfall 2", valor: 95, tipo: "acao", temPraJogar: true },
    { nome: "Terraria", valor: 120, tipo: "sandbox", temPraJogar: true },
    { nome: "God of War Ragnarök", valor: 299, tipo: "acao", temPraJogar: true },
    // Primero que joguei
    { nome: "Pokemon Y", valor: 150, tipo: "plataforma", temPraJogar: true }
];

// Pega elementos da página.
const botaoTodos = document.getElementById('mostrarTodosOsJogos');
const formularioFiltro = document.getElementById('menuDeSelecao');
const escolherTipo = document.getElementById('tipoDeJogo');
const soDisponiveis = document.getElementById('soTemNoEstoque');
const areaDeExibicao = document.getElementById('prateleiraDeJogos');

// Função para mostrar os jogos.
function mostrarJogos(listaDeJogosParaDesenhar) {
    areaDeExibicao.innerHTML = ''; // Limpa a tela.

    // Se a lista estiver vazia, mostra mensagem.
    if (listaDeJogosParaDesenhar.length === 0) {
        areaDeExibicao.innerHTML = '<p style="color: red; text-align: center; font-weight: bold;">GAME OVER! Não achamos nenhum jogo com essas opções.</p>';
        return;
    }

    // Cria e adiciona cada card de jogo.
    listaDeJogosParaDesenhar.forEach(umJogo => {
        const caixinhaDoJogo = document.createElement('div');
        caixinhaDoJogo.classList.add('caixinha-de-jogo');

        // Define status de disponibilidade.
        const statusAtual = umJogo.temPraJogar ? 'status-disponivel' : 'status-esgotado';
        const textoStatus = umJogo.temPraJogar ? 'Dá pra Jogar!' : 'Esgotado!';

        caixinhaDoJogo.innerHTML = `
            <h3>${umJogo.nome}</h3>
            <p>Preço: R$ ${umJogo.valor.toFixed(2).replace('.', ',')}</p>
            <p>Tipo: ${umJogo.tipo.charAt(0).toUpperCase() + umJogo.tipo.slice(1)}</p>
            <p>Estado: <span class="${statusAtual}">${textoStatus}</span></p>
        `;
        areaDeExibicao.appendChild(caixinhaDoJogo);
    });
}

// Ao clicar em "Ver Todos os Jogos".
botaoTodos.addEventListener('click', () => {
    mostrarJogos(meusJogos); // Mostra todos os jogos.
    formularioFiltro.reset(); // Limpa filtros.
});

// Ao enviar o formulário de filtro.
formularioFiltro.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita recarregar a página.

    const tipoSelecionado = escolherTipo.value;
    const querSoDisponiveis = soDisponiveis.checked;

    let jogosParaFiltrar = meusJogos; // Começa com todos.

    // Filtra por tipo, se escolhido.
    if (tipoSelecionado !== 'todos') {
        jogosParaFiltrar = jogosParaFiltrar.filter(jogo => jogo.tipo === tipoSelecionado);
    }

    // Filtra por disponibilidade, se marcado.
    if (querSoDisponiveis) {
        jogosParaFiltrar = jogosParaFiltrar.filter(jogo => jogo.temPraJogar === true);
    }

    mostrarJogos(jogosParaFiltrar); // Exibe os jogos filtrados.
});

// Mostra os jogos ao carregar a página.
document.addEventListener('DOMContentLoaded', () => {
    mostrarJogos(meusJogos);
});