const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você utiliza ou já utilizou alguma IA?",
        alternativas: ["Sim.", "Não."]
    },
    {
        enunciado: "Você não consegue encontrar o nome de um filme, mas com apenas alguns detalhes a IA consegue encontrar para você em segundos. Isso:",
        alternativas: ["Me assusta.", "Me deixa animado."]
    },
    {
        enunciado: "Qual é a sua opinião sobre a IA no dia a dia?",
        alternativas: ["Positiva.", "Negativa."]
    },
    {
        enunciado: "Você acha que a IA vem deixando as pessoas mais burras?",
        alternativas: ["Sim.", "Não."]
    },
    {
        enunciado: "Você passa horas para tirar uma foto, e seu amigo, pedindo pra IA, consegue algo melhor e mais rápido. Isso:",
        alternativas: ["Me desanima.", "Me anima."]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // limpa as alternativas

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas respostas:";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = historiaFinal;
}

mostraPergunta();

