const nome = 'Felipe'
const sobrenome = 'Pereira'
const idade = 21
const peso = 80
const altura = 1.83
let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)