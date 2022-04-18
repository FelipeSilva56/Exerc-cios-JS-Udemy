function escopo(){
    const form = document.querySelector('#form')
    function validar(e){
        e.preventDefault();

        const usuario = form.querySelector('#usuario');
        const senha = form.querySelector('#senha');
        const resultado = document.querySelector('#resultado')
        if(usuario.value === 'Felipe123' && senha.value === '123456'){
            resultado.innerHTML = `Seja Bem vindo ${usuario.value}!`
        }else{
            resultado.innerHTML = `Usuário ${usuario.value} não encontrado`
        }
    }

    form.addEventListener('submit', validar);
}
escopo()