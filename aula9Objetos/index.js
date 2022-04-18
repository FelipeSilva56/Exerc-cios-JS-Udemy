//Fabrica de objetos
/*function criarPessoa(nome, sobrenome, idade){ 
    return{nome,sobrenome,idade};
}
const pessoa01 = criarPessoa('Felipe', 'Pereira', 20)
const pessoa02 = criarPessoa('Clebin', 'Eclesiastico', 54)
const pessoa03 = criarPessoa('Mardon', 'Meirelhes', 10)
const pessoa04 = criarPessoa('Lex', 'Diproa', 24)
const pessoa05 = criarPessoa('Hobbit', 'Perona', 30)
console.log(pessoa01)*/

const pessoa01 = {
    nome: 'Felipe',
    sobrenome: 'Pereira',
    idade: 20,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando "oi, minha idade é ${this.idade}"`)//referenciando as palavras dentro do objeto no CL
    },
    incrementaIdade(){
        ++this.idade;
    }
};
pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
