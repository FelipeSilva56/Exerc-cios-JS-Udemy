const h1 = document.querySelector('.container h1')
const data = new Date( )
console.log(data)
const dia = editData(data)
const mes = data.getMonth()



h1.innerHTML = mostraData()

function editData(data) {
    const diaSem = data.getDay()
    return diaSem
}

function getDiaSem(dia){
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    if(dia === 0) return dias[0];
    if(dia === 1) return dias[1];
    if(dia === 2) return dias[2];
    if(dia === 3) return dias[3];
    if(dia === 4) return dias[4];
    if(dia === 5) return dias[5];
    if(dia === 6) return dias[6];
}

function getNomeMes(mes){

    if(mes === 0) return 'janeiro';
    if(mes === 1) return 'fevereiro';
    if(mes === 2) return 'março';
    if(mes === 3) return 'abril';
    if(mes === 4) return 'maio';
    if(mes === 5) return 'junho';
    if(mes === 6) return 'julio';
    if(mes === 7) return 'agosto';
    if(mes === 8) return 'setembro';
    if(mes === 9) return 'outubro';
    if(mes === 10) return 'novembro';
    if(mes === 11) return 'dezembro';
}

function numEdit(num){
    return num >= 10 ? num : `0${num}` 
}

function mostraData(){
    const diaSema = getDiaSem(dia);
    const nomeMes = getNomeMes(mes);
    return `${diaSema}, ${data.getDate()} de ${nomeMes} de  ${data.getFullYear()} ${numEdit(data.getHours())}:${numEdit(data.getMinutes())}`
}

