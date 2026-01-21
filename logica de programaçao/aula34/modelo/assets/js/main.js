// como colocar um obj na tela

const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]
const container = document.querySelector('.container') // para pegar o elemento no html
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i];
    const tagCriada = document.createElement(tag)
    tagCriada.innerText = texto;
    div.appendChild(tagCriada)
   
}
container.appendChild(div)