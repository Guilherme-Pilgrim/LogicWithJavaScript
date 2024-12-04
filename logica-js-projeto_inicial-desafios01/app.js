alert ('Boas vindas ao nosso site!');

let nome = 'lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro! Preencha todos os campos';

alert (mensagemDeErro);

let Nome = prompt('Digite Seu nome:')

let Idade = prompt('Por favor, digite sua idade:')

if (Idade >= 18) {
    alert(`Olá, ${Nome}. Você ja pode tirar a habilitação!`)
} else {
    alert(`Perdão, ${Nome}, você ainda é menor de idade. Volte em ${18 - Idade} anos!`)
}
