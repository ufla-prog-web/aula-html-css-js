let jogoAtivo = true;
let jogadorAtual = 'X';
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

let qtdVitoriaX = 0;
let qtdVitoriaO = 0;
let qtdEmpate = 0;

document.getElementById('imgX').style.opacity = 1.0;
document.getElementById('imgO').style.opacity = 0.2;
document.getElementById('imgX').style.width = "150px";
document.getElementById('imgO').style.width = "150px";

const padroesVitoria = [
    [0, 1, 2], //primeira linha
    [3, 4, 5], //segunda linha
    [6, 7, 8], //terceira linha
    [0, 3, 6], //primeira coluna
    [1, 4, 7], //segunda coluna
    [2, 5, 8], //terceira coluna
    [0, 4, 8], //diagnoal principal
    [2, 4, 6]  //diagnoal secundária
];

function verificaVencedor() {
    for (let i = 0; i < padroesVitoria.length; i++) {
        const [a, b, c] = padroesVitoria[i];
        if (tabuleiro[a] && tabuleiro[a] == tabuleiro[b] && tabuleiro[a] == tabuleiro[c]) {
            jogoAtivo = false;
            return tabuleiro[a];
        }
    }
    if (!tabuleiro.includes('')) {
        jogoAtivo = false;
        return 'empate';
    }
    return null;
}

function mostrarStatus() {
    const vencedor = verificaVencedor();
    const elementoStatus = document.getElementById('status');
    if (vencedor) {
        if (vencedor == 'empate') {
            elementoStatus.textContent = "Empate!";
            document.getElementById('imgX').style.opacity = 1.0;
            document.getElementById('imgO').style.opacity = 1.0;
            qtdEmpate += 1;
            document.getElementById('qtdEmpate').textContent = "Quantidade de Empate:     " + qtdEmpate;
        } else {
            elementoStatus.textContent = `O Jogador ${vencedor} ganhou!`;
            if (vencedor == 'X'){
                document.getElementById('imgX').style.opacity = 1.0;
                document.getElementById('imgO').style.opacity = 0.2;
                document.getElementById('imgX').style.width = "300px";
                document.getElementById('imgX').style.transition = "width 1s ease";
                qtdVitoriaX += 1;
                document.getElementById('qtdVitoriaX').textContent = "Quantidade de Vitória X: " + qtdVitoriaX;
            }else {
                document.getElementById('imgO').style.opacity = 1.0;
                document.getElementById('imgX').style.opacity = 0.2;
                document.getElementById('imgO').style.width = "300px";
                document.getElementById('imgO').style.transition = "width 1s ease";
                qtdVitoriaO += 1;
                document.getElementById('qtdVitoriaO').textContent = "Quantidade de Vitória O: " + qtdVitoriaO;
            }
        }
    } else {
        elementoStatus.textContent = `É a vez do Jogador ${jogadorAtual}`;
    }
}

function fazerMovimento(index) {
    if (jogoAtivo && tabuleiro[index] == '') {
        tabuleiro[index] = jogadorAtual;
        document.getElementsByClassName('celula')[index].textContent = jogadorAtual;        
        if (jogadorAtual == 'X'){
            document.getElementsByClassName('celula')[index].style.color = "#FD0";
            document.getElementById('imgO').style.opacity = 1.0;
            document.getElementById('imgX').style.opacity = 0.2;
            
        } else {
            document.getElementsByClassName('celula')[index].style.color = "#F44";
            document.getElementById('imgX').style.opacity = 1.0;
            document.getElementById('imgO').style.opacity = 0.2;
        }
        jogadorAtual = jogadorAtual == 'X' ? 'O' : 'X';
        mostrarStatus();
    }
}

function reiniciarJogo() {
    jogoAtivo = true;
    jogadorAtual = 'X';
    tabuleiro = ['', '', '', 
                '', '', '', 
                '', '', ''];
    document.getElementById('imgX').style.opacity = 1.0;
    document.getElementById('imgO').style.opacity = 0.2;
    document.getElementById('imgX').style.width = "150px";
    document.getElementById('imgO').style.width = "150px";
    const celulas = document.getElementsByClassName('celula');
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].textContent = '';
    }
    
    mostrarStatus();
}

mostrarStatus();
