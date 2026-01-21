
//const tresHoras = 60 * 60 * 3 * 1000
//const umDia = 60 * 60 * 24 * 1000
//const data = new Date(0 + tresHoras + umDia);

const data = new Date(2026, 3, 20, 11, 11)
console.log(data.toString())

const hoje = new Date();

console.log(hoje.getFullYear()); // ano
console.log(hoje.getMonth());    // mês (0-11)
console.log(hoje.getDate());     // dia
console.log(hoje.getDay());      // dia da semana (0-domingo)
console.log(hoje.getHours());    // horas
console.log(hoje.getMinutes()); // minutos
console.log(hoje.getSeconds()); // segundos
