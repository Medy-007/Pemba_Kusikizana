let setas = document.querySelectorAll(".seta");

let painel = document.getElementById("frases");

let titulo = document.getElementById("titulo-frases");

let lista = document.getElementById("lista-frases");

let traducao = document.getElementById("traducao");

let fechar = document.getElementById("fechar");

let categorias = {

    saudacoes: {
        nome: "Saudações",

        frases: [
            ["Bom dia!", "Tradução em Emakhua a preencher."],
            ["Boa tarde!", "Tradução em Emakhua a preencher."],
            ["Boa noite!", "Tradução em Emakhua a preencher."],
            ["Como estás?", "Tradução em Emakhua a preencher."],
            ["Estou bem.", "Tradução em Emakhua a preencher."],
            ["Qual é o teu nome?", "Tradução em Emakhua a preencher."],
            ["O meu nome é...", "Tradução em Emakhua a preencher."],
            ["Obrigado!", "Tradução em Emakhua a preencher."],
            ["Até amanhã!", "Tradução em Emakhua a preencher."],
            ["Adeus!", "Tradução em Emakhua a preencher."]
        ]
    },

    mercado: {
        nome: "No mercado",

        frases: [
            ["Quanto custa?", "Tradução em Emakhua a preencher."],
            ["Está muito caro.", "Tradução em Emakhua a preencher."],
            ["Quero comprar isto.", "Tradução em Emakhua a preencher."],
            ["Tem arroz?", "Tradução em Emakhua a preencher."],
            ["Tem açúcar?", "Tradução em Emakhua a preencher."],
            ["Quero comprar peixe.", "Tradução em Emakhua a preencher."],
            ["Pode baixar o preço?", "Tradução em Emakhua a preencher."],
            ["Quero dois quilos.", "Tradução em Emakhua a preencher."],
            ["Onde fica o mercado?", "Tradução em Emakhua a preencher."],
            ["Obrigado pela ajuda.", "Tradução em Emakhua a preencher."]
        ]
    },

    restaurante: {
        nome: "No Restaurante",

        frases: [
            ["Quero água.", "Tradução em Emakhua a preencher."],
            ["Quero comida.", "Tradução em Emakhua a preencher."],
            ["Qual é o menu?", "Tradução em Emakhua a preencher."],
            ["Quanto custa este prato?", "Tradução em Emakhua a preencher."],
            ["A comida está boa.", "Tradução em Emakhua a preencher."]
        ]
    },

    saude: {
        nome: "Saúde",

        frases: [
            ["Preciso de ajuda.", "Tradução em Emakhua a preencher."],
            ["Estou doente.", "Tradução em Emakhua a preencher."],
            ["Onde fica o hospital?", "Tradução em Emakhua a preencher."],
            ["Tenho dor de cabeça.", "Tradução em Emakhua a preencher."],
            ["Preciso de um médico.", "Tradução em Emakhua a preencher."]
        ]
    },

    viagens: {
        nome: "Viagens",

        frases: [
            ["Onde fica a paragem?", "Tradução em Emakhua a preencher."],
            ["Quanto custa a viagem?", "Tradução em Emakhua a preencher."],
            ["Quero ir para Pemba.", "Tradução em Emakhua a preencher."],
            ["Onde posso apanhar um transporte?", "Tradução em Emakhua a preencher."],
            ["A que horas partimos?", "Tradução em Emakhua a preencher."]
        ]
    }
};

setas.forEach(function(seta) {

    seta.addEventListener("click", function() {

        let categoria = seta.dataset.categoria;

        let dados = categorias[categoria];

        titulo.textContent = dados.nome;

        lista.innerHTML = "";

        traducao.textContent =
            "Clica numa frase para ver a sua tradução.";

        dados.frases.forEach(function(item) {

            let botao = document.createElement("button");

            botao.className = "frase";

            botao.textContent = item[0];

            botao.addEventListener("click", function() {

                traducao.textContent =
                    item[0] + " — " + item[1];

            });

            lista.appendChild(botao);

        });

        painel.hidden = false;

        painel.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

});

fechar.addEventListener("click", function() {

    painel.hidden = true;

});