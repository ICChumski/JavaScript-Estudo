/*Solicitar o nome do aluno e as 3 notas
do bimestre calcular a media daquele aluno

Se o aluno passou no bimestre
motivar o aluno a dar seu melhor na prova
de recuperacao
em ambos os casos mostre uma mensagem com o nome do 
aluno e a nota*/

let aluno = prompt("Digite seu nome:");
let notaA = prompt("Digite a primeira nota:");
let notaB = prompt("Digite a segunda nota:");
let notaC = prompt("Digite a terceira nota:");

const media = (Number(notaA) + Number(notaB) + Number(notaC)) / 3;
media = media.toFixed(2)

if (media >= 6){
    alert(aluno +" Sua nota: "+ media + "Parabens você passou!");
}

else{
    alert(aluno +" Sua nota: "+ media + "De o seu melhor na recuperação")};

