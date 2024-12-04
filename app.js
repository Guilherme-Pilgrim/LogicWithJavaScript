alert ('Seja bem vindo ao jogo do numero secreto!');
let limiteSuperior = 100;
let secretNumber = parseInt(Math.random() * limiteSuperior + 1);
console.log (`Número secreto: ` + secretNumber);
let chute;
let tentativas = 1;
console.log ('chute: ' + chute);

//lógica do jogo, se você acertar você ganhar. Se você erra o jogo te ajuda a continuar
while (chute != secretNumber) {
    chute = prompt(`Escolha um numero entre 1 e ${limiteSuperior}`);
    console.log ('chute: ' + chute);
    if (secretNumber == chute) {
        break; 
    } else {
        if (chute > secretNumber) {
            alert(`o número secreto é menor que ${chute}.`);
        } 
        else {
            alert(`o número secreto é maior que ${chute}.`);
        }
        tentativas++;
    } 
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o numero secreto (${secretNumber}) com ${tentativas} ${palavraTentativa}!!`);