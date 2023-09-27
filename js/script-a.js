function submit() {
    logCanva('normal', `${checkboxesMarcados}`)
    let autor = document.querySelector('#autor')
    let serie = document.querySelector('#serie')
    let ano = document.querySelector('#ano')
    console.log();
    if (checkboxesMarcados.length == 0) {
        alert('Selecione no minímo 1 Projeto');
    } else {
        checkboxesMarcados.forEach((element) => {
            let id = `[data-input="${element}"]`
            let metasDados = document.querySelectorAll(id);
            console.log(metasDados);
            let objeto = {
                nomeDoProjeto: `${metasDados[0].value} - ${metasDados[1].value} - ${autor.value}`,
                autor: `${autor.value}`,
                serie: `${serie.value}`,
                ano: `${ano.value}`,
                numeroDoProjeto: `${(metasDados[2].value).match(/\d+/g)}`
            }
            enviarDados(objeto)
        })
    }
}
function enviarDados(dados) {
    fetch('https://api.sheetmonkey.io/form/i1K8ptovxRvfihomxFjUGR', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
}