function consultaEndereco() {
    let cep = document.querySelector('#cep').value;

    if(cep ==! 8){
        alert('CEP inválido');
        return
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco)
    });
}

function mostrarEndereco(dados) {
    let resultado = document.querySelector('#resultado');
    if(dados.erro) {
        resultado.innerHTML = "não foi possível localizar o endereço";
        
    } else {
    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade} - ${dados.bairro}</p>`
            }
}

