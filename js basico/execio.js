const numero = Number(prompt('digite um numero'))

const numeorTitulo = document.getElementById("numero-titulo")
const texto = document.getElementById("texto")


numeorTitulo.innerHTML = numero;
texto.innerHTML += `<p> seu numero + 2 é ${numero ** 0.5} <p>`
texto.innerHTML += `<p> seu numero + 2 é ${Number.isInteger(numero)} <p>`
texto.innerHTML += `<p> seu numero + 2 é ${Number.isNaN(numero)} <p>`
texto.innerHTML += `<p> seu numero + 2 é ${Math.floor(numero)} <p>`
texto.innerHTML += `<p> seu numero + 2 é ${Math.ceil(numero)} <p>`
texto.innerHTML += `<p> seu numero + 2 é ${numero.toFixed(2)} <p>`
