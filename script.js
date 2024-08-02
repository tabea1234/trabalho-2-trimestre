const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "João estava andando para o trabalho até que viu nas noticias que tinham descoberto uma nova célula",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Ficou um pouco aflito logo que descobriu, por que não sabiam o que ela poderia fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Achou incrivel e logo foi pensando nas coisas boas que isso ia poder causar a todos."
            }
        ]
    },
    {
        enunciado: "Todos estavam falando sobre essa nova célula descoberta, falavam muito sobre isso no trabalho de João.",
        alternativas: [
            {
                texto: "Começa a pesquisar e a descobrir como ela funciona e descobrir se ela vai nos ajudar ou não.",
                afirmacao: "Depois de muitas pesquisas conseguiu descobrir muitas coisas e ajudou muito na pesquisa dessa célula."
            },
            {
                texto: "Pesquisou e fez relatórios para ajudar na parte escrita da descoberta da célula.",
                afirmacao: "Conseguiu fazer um ótimo relatório e ajudou bastante gente a entender do que se tratava a célula."
            }
        ]
    },
    {
        enunciado: "Depois de muita pesquisa e estudos, as pessoas começaram a se dividir se a célula era boa ou ruim para a humanidade, qual a sua posição?",
        alternativas: [
            {
                texto: "Defende a descoberta, que com muita pesquisa descobriu que ela não iria fazer mal.",
                afirmacao: "Muitas pessoas ficam ao seu lado e te apoiam, e defendem junto com você a célula."
            },
            {
                texto: "Não me meto nessas dicuções e continuo estudando.",
                afirmacao: "continuou estudando e descobrindo mais informações."
            }
        ]
    },
    {
        enunciado: "Você teve que ir a uma entrevista, qual foi a sua reação?",
        alternativas: [
            {
                texto: "Você planejou tudo o que ia falar.",
                afirmacao: "Você fez a entrevista com bastante planejamento e conseguiu fazer as pessoas entenderem o que era e para que iria servir a célula, e o quanto ela seria importante para a história."
            },
            {
                texto: "Você decidiu fazer no improviso, e confiar no que conhecia.",
                afirmacao: "Você foi chamado para fazer uma entrevista e decidiu fazer no improvisto e confiar nos seus estudos e se saiu muito bem pois conseguiu explicar com clareza para as pessoas que a célula não iria fazer mal!"
            }
        ]
    },
    {
        enunciado: "Depois do sucesso da entrevista, decidiram te colocar a frente do projeto. O que você faz? ",
        alternativas: [
            {
                texto: "Você aceita super bem e começa a trabalhar bastante.",
                afirmacao: "Você começa a tomar a frente com bastante confiança, e se da super bem. Depois de muitos anos de estudo foi descoberto muitas coisas novas e as pesquisas deram muito resultado."
            },
            {
                texto: "Você aceitou mas ficou um pouco nervoso.",
                afirmacao: "Você tomou a frente e foi pegando mais segurança conforme as pessoas acreditavam mais nele e ele acreditava mais em si.Depois de muitos anos de estudo foi descoberto muitas coisas novas e as pesquisas deram muito resultado . "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
