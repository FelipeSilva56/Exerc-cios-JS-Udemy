function  escopo(){
    const form = document.querySelector('#form');
    const retorno = document.querySelector('#retorno')
    
    const pessoas = []

    function recebeEvento (e){
        e.preventDefault();

        const nome = form.querySelector('#nome');
        const sobreNo = form.querySelector('#sobre');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');  

        
        pessoas.push({
            nome:nome.value,
            sobrenome:sobreNo.value,
            peso:peso.value,
            altura:altura.value,
        })
        console.log(pessoas)

        retorno.innerHTML += `<p>${nome.value} ${sobreNo.value} tem ${peso.value}kg e mede ${altura.value}M.</p>`
    };
    form.addEventListener('submit', recebeEvento);
}
escopo();


    


