function getDiaSemanatext(diaSem){
    let diaSemanaText;
    
    switch (diaSem) {
        case 0:
            return diaSemanaText = 'Domingo';
        case 1:
            return diaSemanaText = 'Segunda'; 
        case 2:
            return diaSemanaText = 'Terça';
        case 3:
            return diaSemanaText = 'Quarta';
        case 4:
            return diaSemanaText = 'Quinta';
        case 5:
            return diaSemanaText = 'Sexta';
        case 0:
            return diaSemanaText = 'Sábado'; 
        default:
            return diaSemanaText = ''
    }
}

const data = new Date('2001-04-02');
let diaSem = data.getDay()
const diaSemanaText = getDiaSemanatext(diaSem);
console.log(diaSem, diaSemanaText);


