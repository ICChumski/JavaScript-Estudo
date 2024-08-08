/*crie uma lista de pacientes
cada paciente devera conter
nome
idade
peso
altuta

escreva uma lista contendo o nome dos pacientes*/

const patients = [
    {
        name: "Igor",
        age: 24,
        weight: 100,
        height: 190,
    },
]

let patientsNames = []

for(let patient of patients){
    patientsNames.push(patient.name , patient.age)

}
alert(patientsNames)