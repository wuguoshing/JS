//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo no numero secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero um numero entre 1 e 10';
let numeroLimite = 10;
let listaNumeroSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let listaGenerica = [];
let listaLinguagem = ['JavaScript','C','C++','Kotlin','Python'];

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo no numero secreto');
exibirTextoNaTela('p','Escolha um numero um numero entre 1 e 10');

listaLinguagem.push('Java');
listaLinguagem.push('Ruby');
listaLinguagem.push('Golang');


console.log(listaLinguagem[1]); 



function verificarChute(){
    let chute = document.querySelector('input').value;
   if(chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou');
        exibirTextoNaTela('p','voce descobriu');
        alert(numeroSecreto);
   } else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p','numero é menor');
            alert(numeroSecreto);
        } else {
            exibirTextoNaTela('p','numero é maior');
            alert(numeroSecreto);
        }
   }
    
}

function gerarNumeroAleatorio() {
   let numueroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumeroSorteados = [];
    }

   if (listaNumeroSorteados.includes(numueroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaNumeroSorteados.push(numueroEscolhido);
    console.log(listaNumeroSorteados);
    return numueroEscolhido;
   }
    
}