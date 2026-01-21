/*const h1 = document.querySelector('.container h1')

const data = new Date()
let diaSemana = new Date().getDay();
function getDiaSemanaTexto(diasemana){
    let diaSemanaTexto;
    

switch (diaSemana) {
  case 0:
    diaSemanaTexto = 'domingo';
    return diaSemanaTexto;
  case 1:
    diaSemanaTexto = 'domingo';
    return diaSemanaTexto;
  case 2:
    diaSemanaTexto = 'domingo';
    return diaSemanaTexto;
  case 3:
    diaSemanaTexto = 'domingo';
    return diaSemanaTexto;
  case 4:
    diaSemanaTexto = 'domingo';
    return diaSemanaTexto;
  case 5:
    diaSemanaTexto = 'domingo';
    return diaSemanaTexto;
  case 6:
    diaSemanaTexto = 'domingo';
    return diaSemanaTexto;
}
}
function getNomeMes(numeroMes){
    let nomeMes;
    

switch (numeroMes) {
  case 0:
    nomeMes = 'janeiro';
    return nomeMes;
    case 1:
    nomeMes = 'Fevereiro';
    return nomeMes;
    case 2:
    nomeMes = 'Marco';
    return nomeMes;
    case 3:
    nomeMes = 'abril';
    return nomeMes;
    case 4:
    nomeMes = 'julhi';
    return nomeMes;
    case 5:
    nomeMes = 'julho';
    return nomeMes;
  case 6:
    nomeMes = 'agosto';
    return nomeMes;
    case 7:
    nomeMes = 'setembro';
    return nomeMes;
    case 8:
    nomeMes = 'novembro';
    return nomeMes;
    case 9:
    nomeMes = 'outrobo';
    return nomeMes;

}
}
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function criaDate(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}`
        ` de${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()}`
);
}
h1.innerHTML = criaDate(data)*/
const h1 = document.querySelector('.container h1')

const data = new Date()
const opcoes = {
    dataStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleDateString('pt-br', opcoes)