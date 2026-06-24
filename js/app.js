// ==========================================================================
// CONFIGURAÇÃO DA BASE DE DADOS UNIFICADA (Lê o carros-dados.js ou LocalStorage)
// ==========================================================================
let bancoCarros = JSON.parse(localStorage.getItem("bancoCarros")) || window.bancoCarros || [];

// Força o reset se o localStorage estiver quebrado, vazio ou desatualizado
if (!bancoCarros || bancoCarros.length === 0 || !bancoCarros[0].imagens) {
    bancoCarros = window.bancoCarros || [];
    localStorage.setItem("bancoCarros", JSON.stringify(bancoCarros));
}

// Elementos de controlo da página
const gridCarros = document.getElementById('grid-carros'); 
const inputPesquisa = document.getElementById('pesquisa');
const selectTipo = document.getElementById('filtroTipo');
const selectNegocio = document.getElementById('filtroNegocio');
const selectLocalizacao = document.getElementById('filtroLocalizacao');
const btnPesquisar = document.getElementById('btnPesquisar');

// ==========================================================================
// VITRINE & RENDERIZAÇÃO DINÂMICA (Mural de Catálogo)
// ==========================================================================
function mostrarCarros(lista) {
    if (!gridCarros) return; 
    gridCarros.innerHTML = ""; 
    
    if (lista.length === 0) {
        gridCarros.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">Nenhum veículo premium encontrado para os filtros selecionados.</p>`;
        return;
    }

    lista.forEach(carro => {
        const imagemExibicao = (carro.imagens && carro.imagens.length > 0) ? carro.imagens[0] : carro.img;

        const card = document.createElement('div');
        card.className = 'featured-card';
        card.innerHTML = `
            <img src="${imagemExibicao}" alt="${carro.nome}">
            <h3>${carro.nome}</h3>
            <p style="font-size: 13px; color: #b59410; margin-bottom: 5px;">📍 ${carro.localizacao || 'Luanda'} • ${(carro.tipo || '').toUpperCase()}</p>
            <p style="font-size: 12px; color: #718096; margin-bottom: 8px;">⚙️ ${carro.transmissao || 'Auto'} • ⚡ ${carro.cavalos || '---'} cv • 🛣️ ${(carro.quilometragem || 0).toLocaleString()} Km</p>
            <p><strong>${carro.preco.toLocaleString('pt-AO')} Kz</strong>${carro.negocio === 'alugar' ? ' <span style="font-size: 12px; color: #718096;">/ dia</span>' : ''}</p>
            
            <div style="margin: 12px 0; font-size: 0.9rem; color: #4a5568;">
                <input type="checkbox" class="compara-checkbox" data-id="${carro.id}" id="comp-${carro.id}">
                <label for="comp-${carro.id}"> Selecionar para Comparar</label>
            </div>

            <a href="detalhe-carro.html" onclick="localStorage.setItem('carroSelecionadoID', ${carro.id})">Ver Detalhes</a>
        `;
        gridCarros.appendChild(card);
    });

    adicionarBotaoComparar();
}

// ==========================================================================
// FILTRAGEM AVANÇADA
// ==========================================================================
function filtrarCarros() {
    const termoPesquisa = inputPesquisa ? inputPesquisa.value.toLowerCase() : "";
    const tipoSelecionado = selectTipo ? selectTipo.value : "todos";
    const negocioSelecionado = selectNegocio ? selectNegocio.value : "todos";
    const localizacaoSelecionada = selectLocalizacao ? selectLocalizacao.value : "todos";

    const carrosFiltrados = bancoCarros.filter(carro => {
        const correspondeNome = carro.nome.toLowerCase().includes(termoPesquisa);
        const correspondeTipo = tipoSelecionado === 'todos' || carro.tipo === tipoSelecionado;
        const correspondeNegocio = negocioSelecionado === 'todos' || !carro.negocio || carro.negocio === negocioSelecionado;
        
        const zonaShowroom = carro.localizacao || "Luanda";
        const correspondeLocal = localizacaoSelecionada === 'todos' || zonaShowroom.toLowerCase().includes(localizacaoSelecionada.toLowerCase());

        return correspondeNome && correspondeTipo && correspondeNegocio && correspondeLocal;
    });

    mostrarCarros(carrosFiltrados);
}

if (btnPesquisar) btnPesquisar.addEventListener('click', filtrarCarros);
if (inputPesquisa) inputPesquisa.addEventListener('keyup', filtrarCarros);
if (selectTipo) selectTipo.addEventListener('change', filtrarCarros);
if (selectNegocio) selectNegocio.addEventListener('change', filtrarCarros);
if (selectLocalizacao) selectLocalizacao.addEventListener('change', filtrarCarros);

// ==========================================================================
// CARREGAMENTO DINÂMICO DA PÁGINA DE DETALHES (Ficha Técnica Automatizada)
// ==========================================================================
function carregarDetalhesDoCarro() {
    const campoNome = document.getElementById("detalhe-nome");
    if (!campoNome) return; 

    const idSelecionado = parseInt(localStorage.getItem("carroSelecionadoID"));
    const carro = bancoCarros.find(item => item.id === idSelecionado);

    if (!carro) {
        campoNome.innerText = "Veículo não encontrado";
        return;
    }

    // Injeção de dados estruturais básicos
    document.getElementById("detalhe-img").src = (carro.imagens && carro.imagens.length > 0) ? carro.imagens[0] : carro.img;
    document.getElementById("detalhe-img").alt = carro.nome;
    campoNome.innerText = carro.nome;
    document.getElementById("detalhe-preco").innerText = `${carro.preco.toLocaleString('pt-AO')} Kz${carro.negocio === 'alugar' ? ' / dia' : ''}`;
    document.getElementById("detalhe-localizacao").innerText = `Showroom: ${carro.localizacao || "Luanda, Angola"}`;

    // Injeção limpa das propriedades automotivas nos novos IDs semânticos
    if (document.getElementById("detalhe-cavalos")) {
        document.getElementById("detalhe-cavalos").innerText = `${carro.cavalos || 0} Cv de Potência`;
    }
    if (document.getElementById("detalhe-cambio")) {
        document.getElementById("detalhe-cambio").innerText = `Câmbio: ${carro.transmissao || 'Automática'}`;
    }
    if (document.getElementById("detalhe-lugares")) {
        document.getElementById("detalhe-lugares").innerText = `${carro.lugares || 5} Lugares`;
    }
    if (document.getElementById("detalhe-quilometragem")) {
        document.getElementById("detalhe-quilometragem").innerText = `${(carro.quilometragem || 0).toLocaleString()} Km Rodados`;
    }
    
    // Opcionais booleanos
    if (document.getElementById("detalhe-teto")) {
        document.getElementById("detalhe-teto").innerText = carro.tetoAbrivel ? "Teto Panorâmico de Abrir" : "Teto Fechado Padrão";
    }
    if (document.getElementById("detalhe-tracao")) {
        document.getElementById("detalhe-tracao").innerText = carro.tracao4x4 ? "Tração Integral Ativa (4x4)" : "Tração Simples (4x2)";
    }

    // Vincula a ação de reserva enviando o ID na URL para o agendamento do Test Drive
    const btnReservar = document.getElementById("btn-reservar-propriedade");
    if (btnReservar) {
        btnReservar.innerText = carro.negocio === 'alugar' ? "Reservar para Aluguer" : "Agendar Test Drive";
        btnReservar.onclick = () => {
            window.location.href = `reservas.html?id=${carro.id}`;
        };
    }
}

// ==========================================================================
// SISTEMA DE GARAGEM VIRTUAL (Antigos Favoritos)
// ==========================================================================
function carregarGaragemVirtual() {
    let lista = document.getElementById("listaFavoritos");
    if (!lista) return;

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritos.length === 0) return;

    const msgVazia = document.querySelector(".empty-favorites");
    if (msgVazia) msgVazia.style.display = "none";

    lista.innerHTML = ""; 

    favoritos.forEach(nomeCarro => {
        const dadosCarro = bancoCarros.find(item => item.nome === nomeCarro) || {
            imagens: ["https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800"],
            preco: 0
        };

        const fotoExibicao = dadosCarro.imagens ? dadosCarro.imagens[0] : dadosCarro.img;

        lista.innerHTML += `
            <div class="favorite-card">
                <img src="${fotoExibicao}">
                <h3>${nomeCarro}</h3>
                <p>${dadosCarro.preco > 0 ? dadosCarro.preco.toLocaleString('pt-AO') + ' Kz' : 'Veículo Guardado'}</p>
            </div>
        `;
    });
}

// ==========================================================================
// CHAT EM TEMPO REAL
// ==========================================================================
function enviarMensagem() {
    const input = document.getElementById("mensagem");
    const chat = document.getElementById("chatMessages");

    if (!input || input.value.trim() === "") return;

    const mensagem = document.createElement("div");
    mensagem.classList.add("message", "sent");
    mensagem.textContent = input.value;
    chat.appendChild(mensagem);
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        const resposta = document.createElement("div");
        resposta.classList.add("message", "received");
        resposta.textContent = "Obrigado por contactar a OlgaS Premium Drive. Um consultor de vendas dedicado irá responder ao seu pedido de cotação em breve.";
        chat.appendChild(resposta);
        chat.scrollTop = chat.scrollHeight;
    }, 1000);

    input.value = "";
}

// ==========================================================================
// COMPARADOR DE VEÍCULOS PREMIUM
// ==========================================================================
function adicionarBotaoComparar() {
    if (document.getElementById('btn-abrir-comparador')) return;

    const btn = document.createElement('button');
    btn.id = 'btn-abrir-comparador';
    btn.innerText = "🔄 Comparar Selecionados (0)";
    btn.style.cssText = "position: fixed; bottom: 20px; right: 20px; padding: 15px 25px; background: #b59410; color: white; border: none; border-radius: 50px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 1000; display: none; font-family: 'Poppins', sans-serif;";
    
    document.body.appendChild(btn);

    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('compara-checkbox')) {
            const totalSelecionados = document.querySelectorAll('.compara-checkbox:checked');
            btn.innerText = `🔄 Comparar Selecionados (${totalSelecionados.length})`;
            btn.style.display = totalSelecionados.length > 0 ? 'block' : 'none';
        }
    });

    btn.addEventListener('click', abrirModalComparador);
}

function abrirModalComparador() {
    const checkboxes = document.querySelectorAll('.compara-checkbox:checked');
    if (checkboxes.length < 2) {
        alert("Por favor, selecione pelo menos 2 veículos para comparar a ficha técnica!");
        return;
    }

    const idsSelecionados = Array.from(checkboxes).map(cb => parseInt(cb.getAttribute('data-id')));
    const carrosParaComparar = bancoCarros.filter(carro => idsSelecionados.includes(carro.id));

    const modal = document.createElement('div');
    modal.id = 'modal-comparador';
    modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 2000; font-family: 'Poppins', sans-serif;";

    let colunasFotos = "";
    let colunasNomes = "";
    let colunasTipos = "";
    let colunasCavalos = "";
    let colunasCaixa = "";
    let colunasPrecos = "";

    carrosParaComparar.forEach(carro => {
        const foto = carro.imagens ? carro.imagens[0] : carro.img;
        colunasFotos += `<td style="padding: 15px; text-align:center;"><img src="${foto}" style="width: 160px; height: 110px; object-fit: cover; border-radius:8px; border: 1px solid #ddd;"></td>`;
        colunasNomes += `<td style="padding: 15px; font-weight: bold; color: #102a43;">${carro.nome}</td>`;
        colunasTipos += `<td style="padding: 15px; text-transform: uppercase; font-size: 12px; color: #486581;">${carro.tipo}</td>`;
        colunasCavalos += `<td style="padding: 15px; color: #486581;">${carro.cavalos || '---'} cv</td>`;
        colunasCaixa += `<td style="padding: 15px; color: #486581;">${carro.transmissao || 'Auto'}</td>`;
        colunasPrecos += `<td style="padding: 15px; font-weight: bold; color: #b59410; font-size: 1.1rem;">${carro.preco.toLocaleString('pt-AO')} Kz</td>`;
    });

    modal.innerHTML = `
        <div style="background: white; padding: 35px; border-radius: 16px; max-width: 90%; max-height: 85%; overflow: auto; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <button id="fechar-comparador" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 2rem; cursor: pointer; color: #999;">&times;</button>
            <h3 style="margin-bottom: 25px; text-align: center; color: #102a43; font-size: 1.5rem;">Ficha Técnica Comparativa de Veículos</h3>
            
            <table border="1" style="width: 100%; border-collapse: collapse; text-align: center; border: 1px solid #e2e8f0;">
                <tr style="background: #f8fafc;"><th style="padding: 15px; color: #102a43;">Visual</th>${colunasFotos}</tr>
                <tr><th style="padding: 15px; color: #102a43;">Modelo</th>${colunasNomes}</tr>
                <tr style="background: #f8fafc;"><th style="padding: 15px; color: #102a43;">Categoria</th>${colunasTipos}</tr>
                <tr><th style="padding: 15px; color: #102a43;">Potência</th>${colunasCavalos}</tr>
                <tr style="background: #f8fafc;"><th style="padding: 15px; color: #102a43;">Câmbio</th>${colunasCaixa}</tr>
                <tr><th style="padding: 15px; color: #102a43;">Preço Estimado</th>${colunasPrecos}</tr>
            </table>
        </div>
    `;

    document.body.appendChild(modal);
    document.getElementById('fechar-comparador').addEventListener('click', () => modal.remove());
}

// ==========================================================================
// INICIALIZAÇÃO DA PÁGINA
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    carregarDetalhesDoCarro();

    if (gridCarros && !window.location.search) {
        mostrarCarros(bancoCarros);
    }
    
    carregarGaragemVirtual();
    
    const btnEnviar = document.getElementById("btnEnviarMensagem"); 
    if (btnEnviar) btnEnviar.addEventListener("click", sendingMessage);
});