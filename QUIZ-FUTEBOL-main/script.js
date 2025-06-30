const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem ganhou a Copa do Mundo de 2018?",
        alternativas: [
            {
                texto: "ALEMANHA",
                correta: false,
                afirmacao: "❌ Errou! Quem venceu foi a França! Eles derrotaram a Croácia na final por 4x2."
            },
            {
                texto: "FRANÇA",
                correta: true,
                afirmacao: "✅ Acertou! A França venceu a final contra a Croácia por 4x2 e levou seu segundo título mundial!"
            }
        ]
    },
    {
        enunciado: "Qual jogador é conhecido como 'O Fenômeno'?",
        alternativas: [
            {
                texto: "NEYMAR",
                correta: false,
                afirmacao: "❌ Errou! Neymar é conhecido como 'Menino Ney', mas o 'Fenômeno' é Ronaldo Nazário."
            },
            {
                texto: "RONALDO NAZÁRIO",
                correta: true,
                afirmacao: "✅ Acertou! Ronaldo Nazário é o famoso 'Fenômeno', com passagens brilhantes pelo Brasil e Europa."
            }
        ]
    },
    {
        enunciado: "Pelé marcou mais de 1000 gols na carreira. Verdadeiro ou falso?",
        alternativas: [
            {
                texto: "VERDADEIRO",
                correta: true,
                afirmacao: "✅ Correto! Pelé marcou mais de 1000 gols somando jogos oficiais e amistosos."
            },
            {
                texto: "FALSO",
                correta: false,
                afirmacao: "❌ Errou! Pelé realmente passou da marca de 1000 gols ao longo da carreira."
            }
        ]
    },
    {
        enunciado: "O clube espanhol com mais títulos da Liga dos Campeões é o ________.",
        alternativas: [
            {
                texto: "BARCELONA",
                correta: false,
                afirmacao: "❌ Não foi dessa vez! O clube com mais títulos da Champions é o Real Madrid."
            },
            {
                texto: "REAL MADRID",
                correta: true,
                afirmacao: "✅ Acertou! O Real Madrid é o maior campeão da Champions League!"
            }
        ]
    },
    {
        enunciado: "Quantos minutos dura uma partida oficial de futebol, sem considerar acréscimos?",
        alternativas: [
            {
                texto: "90 MINUTOS",
                correta: true,
                afirmacao: "✅ Certo! São dois tempos de 45 minutos, totalizando 90 minutos."
            },
            {
                texto: "100 MINUTOS",
                correta: false,
                afirmacao: "❌ Errou! O tempo oficial de uma partida é de 90 minutos, sem os acréscimos."
            }
        ]
    },
    {
        enunciado: "Quem foi o artilheiro da Copa do Mundo de 2014?",
        alternativas: [
            {
                texto: "JAMES RODRÍGUEZ",
                correta: true,
                afirmacao: "✅ Boa! James Rodríguez, da Colômbia, fez 6 gols e foi o artilheiro da Copa de 2014."
            },
            {
                texto: "THOMAS MÜLLER",
                correta: false,
                afirmacao: "❌ Não foi o Müller! Quem terminou como artilheiro foi James Rodríguez, com 6 gols."
            }
        ]
    }
];

let atual = 0;
let acertos = 0;
let historiaFinal = "";
let perguntaAtual;

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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada.correta) {
        acertos++;
    }
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    caixaPerguntas.textContent = opcaoSelecionada.afirmacao;
    caixaAlternativas.textContent = "";
    setTimeout(() => {
        atual++;
        mostraPergunta();
    }, 2000);
}

function mostraResultado() {
    const total = perguntas.length;
    const porcentagem = Math.round((acertos / total) * 100);
    caixaPerguntas.textContent = "🎉 Resultado final do seu quiz 🎉";
    textoResultado.innerHTML = `
        <p>${historiaFinal}</p>
        <hr>
        <p><strong>Acertos:</strong> ${acertos}/${total}</p>
        <p><strong>Aproveitamento:</strong> ${porcentagem}% ✅</p>
    `;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
