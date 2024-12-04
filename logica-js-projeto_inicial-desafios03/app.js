//questão 1
let contador = 1;

while (contador <= 10) {
    alert(`o contador está em ${contador}`);
    contador++;
}

//questão 2
let conta = 10;

while (conta >= 0 ) {
    alert(`o contador está em ${conta}`);
    conta--;
}

//questão 3
let numbero = parseInt(prompt('Digite um número:'));
console.log('contagem regressiva: '+ numbero);

while (numbero >= 0) {
    alert(`Seu numero está em ${numbero}`);
    numbero--;
}

//questão 4
let numero = parseInt(prompt('Digite um número:'));
console.log('contagem progressiva: '+ numero);
let numeroInicial = 0;

while(numeroInicial <= numero){
    alert(`contando até ${numero}: ${numeroInicial}`)
    numeroInicial++;
}