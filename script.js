alert("Digite dois números!")
let numberA = prompt("Digite o primeiro número:")
let numberB = prompt("Digite o segundo numero:")
let sum = Number(numberA) + Number(numberB);
let sub = Number(numberA) - Number(numberB);
let mult = Number(numberA) * Number(numberB);
let div = Number(numberA) / Number(numberB);
let resto = Number(numberA) % Number(numberB);

alert("A soma deu:" + sum);
alert("A subtração deu:" + sub);
alert("A multiplicação deu:" + mult);
alert("A divisão deu:" + div);
alert("O resto da divisão deu:" + resto);

if(sum % 2 === 0){
    alert("O número é par")
}
else{
    alert("O número é impar")
}
if(numberA == numberB){
    alert("Os números sao iguais")
}
else{
    alert("Os números são diferentes")
}
