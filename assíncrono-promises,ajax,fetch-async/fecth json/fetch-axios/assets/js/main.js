fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregaElementosNaPagina(json))

function carregaElementosNaPagina(json){
  const table = document.createElement('table')
  for(let pessoa of json){
    const tr = document.createElement('tr')
    
    let td = document.createElement('td')
    td.innerHTML = pessoa.nome
    td.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = pessoa.idade
    td.appendChild(td)
    

    td = document.createElement('td')
    td.innerHTML = pessoa.salario
    td.appendChild(td)
    console.log(pessoa.nome)
  }
  const resultado = document.querySelector('.resultado')
  resultado.appendChild(td)
}
