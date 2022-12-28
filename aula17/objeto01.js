let pessoa = {
        nome: 'José',
        sexo: 'M',
        peso: 67.5,
        engordar(p=0){
           console.log('Engordou')
           this.peso += p 
        }
    }
    pessoa.engordar(2)
    console.log(pessoa)
