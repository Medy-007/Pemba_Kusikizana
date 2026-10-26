let btnConfiguracoes = document.getElementById("btnConfiguracoes");
let btnIdioma = document.getElementById("btnIdioma");
let btnAjuda = document.getElementById("btnAjuda");
let btnSobre = document.getElementById("btnSobre");

let configuracoes = document.getElementById("configuracoes");
let opcoesIdioma = document.getElementById("opcoesIdioma");
let ajuda = document.getElementById("ajuda");
let sobre = document.getElementById("sobre");

let idioma = document.getElementById("idioma");
let idiomaEscolhido = document.getElementById("idiomaEscolhido");
let idiomaAtual = document.getElementById("idiomaAtual");

let notificacoes = document.getElementById("notificacoes");
let modoEscuro = document.getElementById("modoEscuro");

let mensagem = document.getElementById("mensagem");
let mensagemIdioma = document.getElementById("mensagemIdioma");


// Abrir e fechar opções

function alternar(painel) {
    painel.hidden = !painel.hidden;
}

btnConfiguracoes.addEventListener("click", function() {
    alternar(configuracoes);
});

btnIdioma.addEventListener("click", function() {
    alternar(opcoesIdioma);
});

btnAjuda.addEventListener("click", function() {
    alternar(ajuda);
});

btnSobre.addEventListener("click", function() {
    alternar(sobre);
});


// Carregar o idioma guardado

let idiomaGuardado = localStorage.getItem("idiomaPerfil") || "Português";

idioma.value = idiomaGuardado;
idiomaEscolhido.value = idiomaGuardado;
idiomaAtual.textContent = idiomaGuardado;


// Guardar idioma nas configurações

idioma.addEventListener("change", function() {

    localStorage.setItem("idiomaPerfil", idioma.value);

    idiomaEscolhido.value = idioma.value;
    idiomaAtual.textContent = idioma.value;

    mensagemIdioma.textContent = "Idioma guardado!";

});


// Guardar idioma escolhido na opção Idioma

idiomaEscolhido.addEventListener("change", function() {

    localStorage.setItem("idiomaPerfil", idiomaEscolhido.value);

    idioma.value = idiomaEscolhido.value;
    idiomaAtual.textContent = idiomaEscolhido.value;

    mensagemIdioma.textContent = "Idioma guardado!";

});


// Carregar preferência de notificações

notificacoes.checked =
    localStorage.getItem("notificacoesPerfil") === "true";


// Guardar preferência de notificações

notificacoes.addEventListener("change", function() {

    localStorage.setItem(
        "notificacoesPerfil",
        notificacoes.checked
    );

    mensagem.textContent = notificacoes.checked
        ? "Notificações ativadas."
        : "Notificações desativadas.";

});


// Carregar preferência de modo escuro

modoEscuro.checked =
    localStorage.getItem("modoEscuroPerfil") === "true";

document.body.classList.toggle("escuro", modoEscuro.checked);


// Ativar ou desativar modo escuro

modoEscuro.addEventListener("change", function() {

    document.body.classList.toggle("escuro", modoEscuro.checked);

    localStorage.setItem(
        "modoEscuroPerfil",
        modoEscuro.checked
    );

});