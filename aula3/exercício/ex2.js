let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varR = varA
varA = varB
varB = varC
varC = varR


console.log( varA, varB, varC )