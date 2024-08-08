/*programa:

cadastrar um item na lista
mostrar itens cadastrados
sair do programa

caso o usuario digite 1, ele podera cadastrar
um item em uma lista

caso o usuario digite 2, ele podera ver os itens
cadastrados

se nao houver nenhum item cadastrado, mostrar a 
mensagem:
nao existem itens cadastrados
caso o usuario digite 3, a aplicacao devera ser
encerrada
*/

let option;

let items = [];

while(option != 3){
    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`
    ))

switch(option){
    case 1:
        let item = prompt("Digite o nome do item")
        items.push(item)
        break
    case 2:
        if(items.length == 0){
            alert("Não existem itens cadastrados")
        }else{
            alert(items)
        }
        break
    case 3:
        alert("Finalizado!")
        break
        default:
            alert("Opcão inválida. Tente novamente")
    }
       
}