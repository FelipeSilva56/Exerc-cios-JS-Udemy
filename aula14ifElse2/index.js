const numero = 10;
 
if (numero >= 0 && numero <= 5  ){
    console.log('numero está entre 0 e 5')
}
else if(1 === 1){
    console.log('Verificação')
}
else if(numero >= 6 && numero <= 10){
    console.log('número está entre 6 e 10')//não será executado por conta da linha de código anterior que retornou 'true'
} else if(numero >= 11 && numero <= 15){
    console.log('número está entre 11 e 15')
}else {
    console.log('número NÃO está entre 0 e 15')
}
if(1===1){
    console.log('papo reto')//será executado pois não está dentro do bloco de código que o if e else envolve
}