const username = document.getElementById('username');
busca()
let nomeBusca = [];
let userBusca = [];
let serieBusca = [];
let anoBusca = [];
function extraindodados(dados) {
    dados.forEach((elemento, index) => {
        if (index == 0) {
            
        } else {
            nomeBusca.push(elemento.c[1].v)
            userBusca.push(elemento.c[0].v)
            serieBusca.push(elemento.c[2].v)
            anoBusca.push(elemento.c[3].v)
        }
    })
}
async function busca() {
    let url = `https://docs.google.com/spreadsheets/d/1S0QjkPaL6Xfa9sLCHVrzpfB2YZZelzqB1D4Qa1WREDg/gviz/tq?tqx=out:json`

    let data = await fetch(url)
        .then(res => res.text())
        .then(text => JSON.parse(text.substr(47).slice(0, -2)))
    extraindodados(data.table.rows);
}
function consultarProjetos() {
    userBusca.forEach((elemento, index) => {
        if (elemento != username.value) {
        } else if (elemento == username.value) {
            autor.value = nomeBusca[index];
            serie.value = serieBusca[index];
            ano.value = anoBusca[index];
            var checkboxes = document.querySelectorAll('.checkbox');
        }
    })
    const url = `https://scratch.mit.edu/users/${username.value}/projects/`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log("Abrindo Página...");
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            console.log("Extraindo Dados...");
            const projects = doc.querySelectorAll('span.title a');
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '';

            console.log("Construindo Dados...");
            projects.forEach((project, index) => {
                const title = project.innerText;
                const linkPrimitivo = project.getAttribute('href');
                const link = `https://scratch.mit.edu${linkPrimitivo}`;
                const div = document.createElement('div');
                div.innerHTML = `<input type="checkbox" id="${index + 1}" class="checkbox"  onchange="handleCheckboxChange(this);" class="checkbox"><input value="${title}" data-input="${index + 1}" class="inputn">    <select name="" data-input="${index + 1}" class="inputn"><option value="Relâmpago Alura" class="option">Relâmpago Alura</option><option class="option" value="Roleta Alura">Roleta Alura</option><option class="option" value="Quando os humanos não estão vendo">Quando os humanos não estão vendo</option><option class="option" value="Caminhos Alura">Caminhos Alura</option><option class="option" value="Arte Generativa">Arte Generativa</option><option class="option" value="Minha Janela">Minha Janela</option><option value="Jogo do Troco" class="option">Jogo do Troco</option><option value="Alura  Defender" class="option">Alura Defender</option><option  class="option" value="Concurso Agrinho 2023">Concurso Agrinho 2023</option><option class="option" value="Outros">Outros</option></select><input value="${link}" data-input="${index + 1}" class="inputn"><a href="${link}" data-input="${index + 1}" class="link">Abrir</a>`;
                resultadoDiv.appendChild(div);
            });
            console.log('Dados Constrídos com Sucesso!');
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });

}