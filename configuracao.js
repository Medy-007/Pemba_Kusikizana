let idioma = document.getElementById("idioma");
let idiomaAtual = document.getElementById("idiomaAtual");

let tamanho = document.getElementById("tamanho");
let tamanhoAtual = document.getElementById("tamanhoAtual");

let som = document.getElementById("som");
let vibracao = document.getElementById("vibracao");

let mensagem = document.getElementById("mensagem");


// Abrir e fechar painéis

function abrir(botao, painel) {
    document.getElementById(botao).addEventListener("click", function() {
        painel.hidden = !painel.hidden;
    });
}

abrir("btnIdioma", document.getElementById("painelIdioma"));
abrir("btnTamanho", document.getElementById("painelTamanho"));
abrir("btnPrivacidade", document.getElementById("painelPrivacidade"));
abrir("btnHistorico", document.getElementById("painelHistorico"));


// Guardar e carregar idioma

idioma.value = localStorage.getItem("idiomaPerfil") || "Português";
idiomaAtual.textContent = idioma.value;

idioma.addEventListener("change", function() {
    localStorage.setItem("idiomaPerfil", idioma.value);
    idiomaAtual.textContent = idioma.value;
});


// Guardar e carregar tamanho do texto

tamanho.value = localStorage.getItem("tamanhoTexto") || "medio";

function aplicarTamanho() {
    document.body.classList.remove(
        "texto-pequeno",
        "texto-medio",
        "texto-grande"
    );

    document.body.classList.add("texto-" + tamanho.value);

    tamanhoAtual.textContent = {
        pequeno: "Pequeno",
        medio: "Médio",
        grande: "Grande"
    }[tamanho.value];
}

aplicarTamanho();

tamanho.addEventListener("change", function() {
    localStorage.setItem("tamanhoTexto", tamanho.value);
    aplicarTamanho();
});


// Som

som.checked = localStorage.getItem("somAtivo") !== "false";

som.addEventListener("change", function() {
    localStorage.setItem("somAtivo", som.checked);
});


// Vibração

vibracao.checked = localStorage.getItem("vibracaoAtiva") === "true";

vibracao.addEventListener("change", function() {
    localStorage.setItem("vibracaoAtiva", vibracao.checked);
});


// Limpar apenas o histórico de traduções

document.getElementById("limpar").addEventListener("click", function() {

    if (confirm("Tens a certeza de que queres apagar o histórico?")) {

        localStorage.removeItem("historicoTraducoes");

        mensagem.textContent = "Histórico de traduções apagado!";

    }

});


// Botão voltar

document.getElementById("voltar").addEventListener("click", function() {
    window.history.back();
});