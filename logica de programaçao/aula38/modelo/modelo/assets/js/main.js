// 1 pegar o paragrafos
// dps pegar todos os paragrafos
// dps pegar o estilo pelo getComputedStyle(document.body)
//dps lê a cor de fundo
// dps usar for(let p of ps) para trocar a cor do texto e do fundo


const paragratos = document.querySelector('.paragrafos')
const ps = paragratos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;


for(let p of ps){
    p.style.backgroundColor = backgroudColorBody; // como colocar a cor de fundo
    p.style.color = '#FFFFFF'
}
