/*
Capturar 2 numeros e fazer as operacoes matematicas
de soma, subtracao, multiplicacao, divisao e resto da 
divisao
E para cada operacao, mostrar um alerta com o resultado */

alert("Vamos somar dois numeros!");
let numberA = prompt("Digite o primeiro numero:");
let numberB = prompt("Digite o segundo numero:");

numberA = Number(numberA);
numberB = Number(numberB);

const sum = numberA + numberB ;
const subtracao = numberA - numberB ;
const multiplic = numberA * numberB ;
const divisao = numberA / numberB ;
const restodadiv = numberA % numberB ;

alert("Resultado da soma:" + sum);
alert("Resultado da subtração:" + subtracao);
alert("Resultado da multiplicação:" + multiplic);
alert("Resultado da divisão:" + divisao);
alert("Resultado do resto da divisão:" + restodadiv);


