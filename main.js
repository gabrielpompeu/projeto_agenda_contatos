const form = document.getElementById('nome-contato');
let contatos = [];
let telefone = [];
let novaLinha = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    addContato()
    atualizaTabela()

});


function addContato() {
    const nomeCompleto = document.getElementById("nome-completo");
    const telCompleto = document.getElementById("telefone-completo");

    if (contatos.includes(nomeCompleto.value)) {
        alert('Nome já cadastrado')
    } else if (telefone.includes(telCompleto.value)) {
        alert('Telefone já cadastrado');

    } else {
        contatos.push(nomeCompleto.value);
        telefone.push(telCompleto.value);

        let linha = '<tr></tr>';
        linha += `<td>${nomeCompleto.value}</td>`;
        linha += `<td>${telCompleto.value}</td>`;
        linha += `<tr></tr>`;
        novaLinha += linha;

    };



    nomeCompleto.value = '';
    telCompleto.value = '';

}

function atualizaTabela() {

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = novaLinha;
}

