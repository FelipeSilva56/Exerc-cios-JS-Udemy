// 01/01/1970 Timestamp unix ou época unix
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000; 
//const data = new Date(tresHoras + umDia);
//const data = new Date();//a, m, d, h, min, s, ms
/*const data = new Date(1642634112299);
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());//0 - Domingo, 6 -Sábado
console.log(Date.now());*/

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDay());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} `
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)