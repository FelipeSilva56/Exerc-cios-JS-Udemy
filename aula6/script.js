let camp = document.getElementById('num');
let text = document.getElementById('SN')
let seuNum = Number(prompt('Digite um número:'))
let inteiro = Number.isInteger(seuNum)
let naN = Number.isNaN(seuNum)
let arredondadoBaixo = Math.floor(seuNum)
let arredondadoCima = Math.ceil(seuNum)

text.innerHTML = `${seuNum}`
num.innerHTML += `<p>Raiz quadrada: ${seuNum ** 0.5}</p>`
num.innerHTML += `<p>${seuNum} é inteiro: ${inteiro}</p>`
num.innerHTML += `<p>É NaN: ${naN}</p>`
num.innerHTML += `<p>Arredondado para baixo: ${arredondadoBaixo}</p>`
num.innerHTML += `<p>Arredondado para cima: ${arredondadoCima}</p>`
num.innerHTML += `<p>Com duas casas decimais :${seuNum.toFixed(2)}</p>`
