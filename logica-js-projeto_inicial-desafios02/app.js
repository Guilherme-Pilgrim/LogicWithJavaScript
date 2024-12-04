//questão 1
alert('Olá, terráqueo');

//questão 2
let diaSemana = prompt('Em que dia da semana estamos?')
if (diaSemana.toLowerCase() === 'sabado' || diaSemana.toLowerCase() == 'domingo') {
    alert('Bom fim de semana para você!!')
} else {
    alert('Boa semana!')
};

//questão 3
let numero = prompt('Digite qualquer número')
if (numero > 0) {
    alert(`o numero ${numero} é positivo`)
}  else if (numero < 0) {
    alert(`o numero ${numero} é negativo!`)
} else {
    alert('0 é um numero neutro!')
};

//questão 4
let pontuação = prompt('Coloque aqui seus pontos')
if (pontuação >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente novamente para ganhar')
};

//questão 5
let saldo = ('R$') + 5000.00
alert(`Seu saldo é ${saldo}`);

//questão 6
let nome = prompt('Qual o seu nome?')
alert(`até logo, ${nome}!`);