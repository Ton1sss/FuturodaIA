const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
        "Vocẽ já utiliza ou já utilizou alguma IA?",
        
        alternativas: ["Sim.","Não."],

    },
 
     {
        enunciado:
        "Você não consegue esncontrar o nome de um filme , que você assistiu há anos, mas com apenas alguns detalhes, a IA consegue encontrar para você em seguntos , isso:",
        alternativas: ["Me assusta.","Me deixa animado."],
     
    },
 
     {
        enunciado:
        "Qual é a sua opnião sobre a IA no dia a dia?",
        alternativas: ["Positiva.","Negativa."],

    },

     {
        enunciado:
        "Você acha que a IA vem deixado as pessoas mais  burras?",
        alternativas: ["Sim.","Não."],

    },

     {
        enunciado:
        "Você passa horas para tirar uma foto, um desenho, e seu amigo, apenas pedindo pra IA, ele consegue fazer uma imagem melhor e de maneira mais rápida, isso:",

         alternativas: ["Me desanima.","Me anima."],

    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
const afirmacoes = opcaoSelecionada.afirmacoes;
historiaFinal = afirmacoes;
atual++;
mostraPergunta();
}
mostraPergunta();

