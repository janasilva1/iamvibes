const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você ajuda o meio ambiente no seu dia a dia?",
        alternativas: [
            {
                texto: "Sim, sempre que consigo!",
                afirmacao: "Você está correto"
            },
            {
                texto: "As vezes ajudo!",
                afirmacao: "irresponsável",
            }
        ]
    },
    {
        enunciado: "Você faz o que para ajudar o meio abiente, Qual atitude você toma?",
        alternativas: [
            {
                texto: "Reciclo e jogo meu lixo fora corretamente",
                afirmacao: "Parabéns ",
            },
            {
                texto: "Não faço nada .",
                afirmacao: "Imbécil",
            }
        ]
    },
    {
        enunciado: "O que você poderia fazer para melhorar o meio ambiente?",
        alternativas: [
            {
                texto: "poderia ser mais consciente e fazer o meu papel.",
                afirmacao: "Continue assim",
            },
            {
                texto: "Nada pois não é problema meu",
                afirmacao: "Lhe falta inteligência",
            }
        ]
    },
       
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
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();