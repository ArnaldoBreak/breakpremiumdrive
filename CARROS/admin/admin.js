// ==========================================================================
// SEGURANÇA: Bloqueio de acessos não autorizados
// ==========================================================================
if (sessionStorage.getItem("adminAutenticado") !== "true") {
    alert("Acesso negado! Por favor, faça login primeiro.");
    window.location.href = "../login.html";
}

// Terminar sessão administrativa
function logoutAdmin() {
    sessionStorage.removeItem("adminAutenticado");
    window.location.href = "../login.html";
}

// Variável de controlo para saber se estamos a editar um veículo existente
let idVeiculoEmEdicao = null;

// ==========================================================================
// LISTAR VEÍCULOS NA TABELA ADMINISTRATIVA
// ==========================================================================
function renderizarTabelaAdmin() {
    const tbody = document.getElementById("tabela-admin-imoveis"); // Mantido o ID do DOM do dashboard
    if (!tbody) return;
    
    tbody.innerHTML = "";
    const carros = JSON.parse(localStorage.getItem("bancoCarros")) || window.bancoCarros || [];

    carros.forEach(carro => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>#${carro.id}</td>
            <td><strong>${carro.nome}</strong></td>
            <td class="capitalize">${carro.tipo}</td>
            <td>${carro.localizacao || 'Não definida'}</td>
            <td>${carro.preco.toLocaleString('pt-AO')} Kz</td>
            <td>
                <button onclick="prepararEdicao(${carro.id})" class="btn-editar" style="padding: 6px 12px; background: #c5a059; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 5px;">Editar</button>
                <button onclick="eliminarVeiculo(${carro.id})" class="btn-eliminar" style="padding: 6px 12px; background: #d9534f; color: white; border: none; border-radius: 4px; cursor: pointer;">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================================================
// CARREGAR DADOS NO FORMULÁRIO PARA EDIÇÃO
// ==========================================================================
function prepararEdicao(id) {
    const carros = JSON.parse(localStorage.getItem("bancoCarros")) || window.bancoCarros || [];
    const carro = carros.find(item => item.id === id);

    if (!carro) return;

    // Guarda o ID que estamos a editar e muda o estado visual do botão
    idVeiculoEmEdicao = id;
    const btnSubmeter = document.getElementById("btn-submeter-form");
    if (btnSubmeter) btnSubmeter.innerText = "Salvar Alterações";

    // Alimenta todos os campos do formulário com os dados atuais da viatura
    document.getElementById("admin-nome").value = carro.nome || "";
    document.getElementById("admin-tipo").value = carro.tipo || "superdesportivo";
    document.getElementById("admin-preco").value = carro.preco || "";
    document.getElementById("admin-localizacao").value = carro.localizacao || "";
    
    // Alimenta a imagem principal (lê do array estruturado ou do fallback antigo)
    const urlImagem = (carro.imagens && carro.imagens.length > 0) ? carro.imagens[0] : (carro.img || "");
    document.getElementById("admin-img").value = urlImagem;

    // Alimenta as características técnicas específicas do setor automóvel
    document.getElementById("admin-potencia").value = carro.potencia || "";
    document.getElementById("admin-ano").value = carro.ano || "";
    document.getElementById("admin-transmissao").value = carro.transmissao || "Automatica";
    document.getElementById("admin-combustivel").value = carro.combustivel || "Gasolina";

    // Alimenta os opcionais booleanos (Checkboxes)
    document.getElementById("admin-garantia").checked = !!(carro.garantia || carro.temGarantia);
    document.getElementById("admin-pack-desportivo").checked = !!(carro.packDesportivo || carro.temPackDesportivo);

    // Rola a página suavemente até ao topo do formulário para o admin ver o modo de edição
    document.getElementById("form-cadastro").scrollIntoView({ behavior: 'smooth' });
}

// Cancelar o modo de edição e resetar o formulário
function cancelarEdicao() {
    idVeiculoEmEdicao = null;
    const form = document.getElementById("form-cadastro");
    if (form) form.reset();
    
    const btnSubmeter = document.getElementById("btn-submeter-form");
    if (btnSubmeter) btnSubmeter.innerText = "Cadastrar Viatura";
}

// ==========================================================================
// REMOVER UM VEÍCULO DO SISTEMA
// ==========================================================================
function eliminarVeiculo(id) {
    if (confirm("Tem a certeza que deseja eliminar este veículo da frota?")) {
        let carros = JSON.parse(localStorage.getItem("bancoCarros")) || window.bancoCarros || [];
        carros = carros.filter(carro => carro.id !== id);
        localStorage.setItem("bancoCarros", JSON.stringify(carros));
        
        window.bancoCarros = carros;
        
        if (idVeiculoEmEdicao === id) cancelarEdicao();
        renderizarTabelaAdmin();
    }
}

// ==========================================================================
// CAPTURA DO FORMULÁRIO (SALVAR OU CADASTRAR)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    renderizarTabelaAdmin();

    const form = document.getElementById("form-cadastro");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            let carros = JSON.parse(localStorage.getItem("bancoCarros")) || window.bancoCarros || [];
            const urlImagemInput = document.getElementById("admin-img").value;

            // Cria o objeto unificado contendo todas as variáveis técnicas da viatura
            const dadosForm = {
                nome: document.getElementById("admin-nome").value,
                tipo: document.getElementById("admin-tipo").value,
                preco: parseFloat(document.getElementById("admin-preco").value),
                localizacao: document.getElementById("admin-localizacao").value,
                img: urlImagemInput, // Fallback de compatibilidade para renderizadores antigos
                imagens: [urlImagemInput], // Array de fotos estruturado para carrosséis do front
                potencia: parseInt(document.getElementById("admin-potencia").value) || 0,
                ano: parseInt(document.getElementById("admin-ano").value) || 2026,
                transmissao: document.getElementById("admin-transmissao").value,
                combustivel: document.getElementById("admin-combustivel").value,
                garantia: document.getElementById("admin-garantia").checked,
                packDesportivo: document.getElementById("admin-pack-desportivo").checked
            };

            if (idVeiculoEmEdicao !== null) {
                // MODO EDIÇÃO: Localiza o veículo pelo ID e atualiza os seus parâmetros
                carros = carros.map(item => {
                    if (item.id === idVeiculoEmEdicao) {
                        return { ...item, ...dadosForm }; // Preserva o ID original e injeta as alterações
                    }
                    return item;
                });
                alert("Viatura alterada e atualizada com sucesso!");
            } else {
                // MODO CADASTRO: Cria um novo ID único baseado em timestamp e insere na lista
                const novoVeiculo = {
                    id: Date.now(),
                    ...dadosForm
                };
                carros.push(novoVeiculo);
                alert("Novo veículo de alta performance cadastrado com sucesso!");
            }

            // Sincroniza e salva nas bases de dados local e de execução
            localStorage.setItem("bancoCarros", JSON.stringify(carros));
            window.bancoCarros = carros;

            // Limpa o estado e redesenha os elementos na tela
            cancelarEdicao();
            renderizarTabelaAdmin();
        });
        
        // Adiciona um botão de "Cancelar" dinamicamente ao formulário para conveniência do admin
        const btnCancelar = document.createElement("button");
        btnCancelar.type = "button";
        btnCancelar.innerText = "Limpar / Cancelar";
        btnCancelar.style.cssText = "padding: 12px 20px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer; margin-left: 10px; font-family: 'Poppins'; font-weight: 600;";
        btnCancelar.addEventListener("click", cancelarEdicao);
        form.appendChild(btnCancelar);
    }
});