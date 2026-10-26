let textoOrigem = document.getElementById("textoOrigem");
let textoDestino = document.getElementById("textoDestino");

let btnTraduzir = document.getElementById("btnTraduzir");
let mensagem = document.getElementById("mensagem");

let copiar = document.getElementById("copiar");
let favorito = document.getElementById("favorito");

let ouvirOrigem = document.getElementById("ouvirOrigem");
let ouvirDestino = document.getElementById("ouvirDestino");

// Exemplos de traduções
let dicionario = {
    "salama": "Olá",
    "muhavo": "Como estás?",
    "salama, muhavo.": "Olá, como estás?",

    "karibu": "Bem-vindo",
    "asante": "Obrigado",
    "kwaheri": "Adeus",
    "jina langu": "O meu nome",
    "habari": "Notícias",
    "asante sana": "Muito obrigado",
    "habari za asubuhi": "Bom dia",
    "habari za jioni": "Boa noite"
};

// Traduzir
btnTraduzir.addEventListener("click", function() {

    let texto = textoOrigem.value.trim().toLowerCase();

    if (texto === "") {
        mensagem.textContent = "Escreva uma frase primeiro!";
        textoDestino.value = "";
        return;
    }

    if (dicionario[texto]) {
        textoDestino.value = dicionario[texto];
        mensagem.textContent = "Tradução encontrada!";
    } else {
        textoDestino.value = "";
        mensagem.textContent = "Esta frase ainda não está no dicionário.";
    }

});

// Copiar tradução
copiar.addEventListener("click", function() {

    if (textoDestino.value !== "") {
        navigator.clipboard.writeText(textoDestino.value)
            .then(function() {
                mensagem.textContent = "Texto copiado!";
            })
            .catch(function() {
                mensagem.textContent = "Não foi possível copiar o texto.";
            });
    }

});

// Guardar nos favoritos
favorito.addEventListener("click", function() {

    if (textoDestino.value !== "") {

        let favoritos = JSON.parse(
            localStorage.getItem("favoritos")
        ) || [];

        favoritos.push({
            origem: textoOrigem.value,
            traducao: textoDestino.value
        });

        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

        mensagem.textContent = "Tradução guardada nos favoritos!";

    }

});

// Ouvir texto de origem
ouvirOrigem.addEventListener("click", function() {

    falar(textoOrigem.value, "");

});

// Ouvir tradução em português
ouvirDestino.addEventListener("click", function() {

    falar(textoDestino.value, "pt-PT");

});

// Função de voz
function falar(texto, idioma) {

    if (texto.trim() === "") {
        mensagem.textContent = "Não existe texto para ouvir!";
        return;
    }

    let voz = new SpeechSynthesisUtterance(texto);

    if (idioma !== "") {
        voz.lang = idioma;
    }

    speechSynthesis.speak(voz);

}