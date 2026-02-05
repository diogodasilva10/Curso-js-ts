const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'diogo'},
    {id: 1, nome: 'felipe'},
]
const novasPessoas = new Map()
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}
for(const [identifier, {id, nome}] of novasPessoas){
  console.log(identifier,id, nome)
}