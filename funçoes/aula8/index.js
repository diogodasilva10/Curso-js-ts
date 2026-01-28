// factory function (função fábrica)

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
      sobrenome,
      //getter
      get nomeCompleto(){
         return `${this.nome} ${this.sobrenome}`;
      },
      //setter
      set nomeCompleto(valor){
            valor = valor.split('');
            this.nome = valor.shift()
            this.sobrenome = valor.join('')
            
      },
     fala: function(assunto){
        return `${this.nome} esta ${assunto}.`;
     },

     altura: a,
     peso: p,
     //getter
     get imc(){
        const indice = this.peso / (this.altura ** 2)
        return indice.toFixed(2)
     }

    };
}
const p1 = criaPessoa('luiz', 'otavio', 1.8, 80)
console.log(p1.imc)
p1.nomeCompleto = 'maria oliveira silva'
console.log(p1.nomeCompleto)
console.log(p1.fala('falando sobre js'))