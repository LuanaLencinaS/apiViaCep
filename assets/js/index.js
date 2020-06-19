const base_url = 'https://viacep.com.br/ws/';
const tipo = '/json/';

const campoCep = document.querySelector("#cep");
const btnEnviaCep = document.querySelector("#btnCep");
const campoLogradouro = document.querySelector("#logradouro");
const campoBairro = document.querySelector("#bairro");
const campoLocalidade = document.querySelector("#localidade");
const campoUF = document.querySelector("#uf");

function consultaCep() {
    cep = campoCep.value;
    if( cep.length == 8 ) {
        //fetch get
        fetch(base_url+cep+tipo)
        .then( (resultado) => resultado.json())
        .then( (dados) => {
            campoLogradouro.value = dados.logradouro;
            campoBairro.value = dados.bairro;
            campoLocalidade.value = dados.localidade;
            campoUF.value = dados.uf;

            console.log(dados)
        });
        //o then pega a prommisse
        //o .json transforma o resultado da promisse num json
        //o .json retorna uma promisse também, então... outro then
        //que recebe o valor do .json e executa o callback
    }
}

campoCep.addEventListener("keyup", () => {
    cep = campoCep.value;
    console.log(cep.length)
    if( cep.length == 8 ) {
        consultaCep();
    }
});
btnEnviaCep.addEventListener("click", consultaCep);
