const sectionCad = document.querySelector('#cad');
const nomeCad = document.querySelector('#nomeCad');
const userCad = document.querySelector('#userCad');
const serieCad = document.querySelector('#serieCad');
const anoCad = document.querySelector('#anoCad');

function cadastrarNovoUsuario() {
    sectionCad.className = 'section__form cadastro'
}

function cadastrar() {
    let conditionForCad = true
    userBusca.forEach((e, i) => {
        if (e == userCad.value) {
            alert(`Esse usuário já existe no nosso banco de dados, vinculado a: ${nomeBusca[i]}.`);
            conditionForCad = false;
        } else if (nomeBusca[i] == nomeCad.value) {
            alert(`Esse nome está vinculado ao usuário: ${e}.`);
            conditionForCad = false;
        }
    });
    if (conditionForCad == true) {
        objetoCad = {
            user: userCad.value,
            nome: nomeCad.value,
            serie: serieCad.value,
            ano: anoCad.value
        }
        console.log(objetoCad);
        enviarDadosCad(objetoCad);
        cancelarCad()
    }
}

function cancelarCad() {
    sectionCad.className = 'section__form cadastro none'
}

function enviarDadosCad(dados) {
    console.log(JSON.stringify(dados));
    fetch('https://api.sheetmonkey.io/form/i1K8ptovxRvfihomxFjUGR', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
}