/*jogo da advinhacao
apresente a mensagem ao usuario:
advinhe o numero que estou pensando? esta entre 0 e 10 
crie uma logica para gerar um numero aleatorio
e verificar se o numero digitado é o mesmo que o 
aleatorio gerado pelo sistema.
enquanto o usuario nao advinhar o numero, mostrar a mensagem:
erro, tente novamente:
caso o usuario acerte o numero, apresentar a mensagem
parabens ! voce advinhou o numero em x tentativas

substitua o x da mensagem, pelo numero de tentativas*/

alert("Advinhe o número que estou pensando. Está entre 0 e 10")
let result = prompt("Digite o número:");
const randomNumber = Math.round(Math.random() * 10)

let tentativa = 1;

while(Number(result) != randomNumber){
    result = prompt("Erro, tente novamente:")
    tentativa++
}
alert(`Parabens! Você advinhou o número em ${tentativa} tentativas`)
