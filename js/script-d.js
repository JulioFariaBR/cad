let aberto = false
function selecionadoAluno(aluno) {
    username.value = userBusca[aluno]
}
function carregarLista(elemento) {
    const divUsers = document.querySelectorAll('#users')[0];
    const select = document.querySelector('#select-turma');
    if (aberto == false) {
        userBusca.forEach((element, index) => {
            if (`${serieBusca[index]}`== select.value) {
                divUsers.innerHTML = divUsers.innerHTML + `<div><button onclick="selecionadoAluno(${index})" class="lista__div--bnt">${element} - ${nomeBusca[index]}</button></div>`;
            }
        });
        elemento.innerHTML = 'Fechar Lista';
        aberto = true;
    } else if (aberto == true) {
        divUsers.innerHTML = ``;
        elemento.innerHTML = 'Carregar Lista';
        aberto = false;
    }
}