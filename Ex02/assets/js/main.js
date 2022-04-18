
    const form = document.querySelector('#form');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('Não enviou')
        
        const pesoInput = document.querySelector('#peso')
        const alturaInput = document.querySelector('#altura')
        
        const peso = Number(pesoInput.value)
        const altura = Number(alturaInput.value)

        if(!peso){
            resultado('Peso inválido', false);
            return
        }
        if(!altura){
            resultado('Altura inválida', false);
            return
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);
        const msg = `${imc} ${nivelImc}`

        resultado(msg, true)
    });

    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function getNivelImc(imc){
        const nivel = ['Abaixo do peso', 'Peso normal', 'sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if(imc >= 40) return nivel[5]
        if(imc >= 35) return nivel[4]
        if(imc >= 30) return nivel[3]
        if(imc >= 25) return nivel[2]
        if(imc >= 18.5) return nivel[1]
        if(imc < 18.5) return nivel[0]
    }

    function criaP(){
        const p = document.createElement('p')
        return p
    }

    function resultado(msg, isValid){
        const resulta = document.querySelector('#result');
        resulta.innerHTML = '';
        const p = criaP();

        if(isValid){
            p.classList.add('cer')
        }else{
            p.classList.add('err')
        }
        
        p.innerHTML = msg;
        resulta.appendChild(p);

    }







        


/*const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const  inputPeso = e.target.querySelector('#peso');
    const  inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){ 
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true);

});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
    

}

function criaP(){
    const p = document.createElement('p');
    return p;
    
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#result');
    resultado.innerHTML = ''
    const p = criaP();
    
    if (isValid){
        p.classList.add('cer')
    }else{
        p.classList.add('err')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}*/