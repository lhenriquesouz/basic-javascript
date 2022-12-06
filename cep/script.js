function limparFormularioCep() {
    document.getElementById('cep').value = ("");
    document.getElementById('logradouro').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('estado').value = ("");
}

function preencherFormularioCallback(conteudo) {
    if (("erro" in conteudo)) {
        //CEP nãoo encontrado
        limparFormularioCep();
        alert("CEP não encontrado!!!");
    } else {
        document.getElementById("logradouro").value = (conteudo.logradouro);
        document.getElementById("bairro").value = (conteudo.bairro);
        document.getElementById("cidade").value = (conteudo.localidade);
        document.getElementById("estado").value = (conteudo.uf);
    }
}

function pesquisaCep(valorCep) {
    //Nova variável "cep" somente com dígitos. \D retira tudo que não é numero
    var cep = valorCep.replace(/\D/g, '');

    //Verifica se o campo cep possui valor informado.
    if (cep != "") {
        //Expressão regular para validar o cep
        var validaCep = /^[0-9]{8}$/;

        //Valida o formato do CEP
        if (validaCep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logradouro').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('estado').value = "...";

            //Cria um elemento javascript
            var repostaDoSite = document.createElement('script');

            //Sincroniza com o callback
            repostaDoSite.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=preencherFormularioCallback';

            //Insere script no documento e carrega o conteúdo
            document.body.appendChild(repostaDoSite);

        } else {
            //CEP inválido
            limparFormularioCep();
            alert("Formato de CEP inválido!!!");
        }
    }
}