console.log('Bem vindo!');

let nome = "guilherme"
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem)

const valor1 = 21;
const valor2 = 45;
let soma = valor1 + valor2;
console.log(`a soma de ${valor1} e ${valor2} é ${soma}.`);
let subtração = valor2 - valor1;
console.log(`a subtração de ${valor2} com ${valor1} é ${subtração}.`);

let numero = prompt('Digite um valor:');
console.log(`Número escolhido ${numero}`)
if (numero > 0) {
    alert('Seu numero é positivo!');
} else if (numero < 0) {
    alert('Seu numero é negativo!');
} else {
    alert('O número zero é neutro!');
}

