function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}
function funcaDoInterval(){
    console.log(mostraHora())
}
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)
setTimeout(function(){
    clearInterval(timer)
}, 10000)
setTimeout(function(){
console.log('Ola mundo')
}, 5000)

