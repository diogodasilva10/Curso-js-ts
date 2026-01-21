// for in -> lê os indices ou chaves do obj
const pessoa = {
    nome: 'Diogo',
    sobrenome: 'silva',
    idade: 30

}
//console.log(pessoa.nome)
//console.log(pessoa['nome'])

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}


//const frutas = ['pera', 'Maça', 'uva'];

//for (let i = 0; i < frutas.length; i++){

//}
// for in
//for(let i in frutas){
  //  console.log(frutas[i])
//}