//Em valores primitivos (imutáveis) os dados são copiados quando referenciados

let a = 'A'

let b = a
console.log(a,b)

a = 'Y'

console.log(a,b)

//Em valores referência (mutáveis) não há cópia e sim uma alteração definitiva do valor, ocorre porquê a variável que contém o dado armazena seu valor em um local da memória, onde será o  mesmo local acessado por uma eventual variável que tiver a primeira como referência.


let c = [1, 2, 3]
let d = c
console.log(c, d)
c.push(4)

console.log(c, d)

//objeto
const e = {
    nome:'Felipe',
    sobrenome:'Pereira'
};
const f = e;

e.nome = 'Cleintin';

console.log(e, f)