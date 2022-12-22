function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
             gênero = 'Homem'
             if(idade >= 0 && idade < 10){
                //Criança
                res.innerHTML = `Detectamos uma criança com ${idade} ano(s).`
                img.setAttribute('src' , 'imagens/crianca_homem.png')
             } else if(idade < 21){
                //Jovem
                res.innerHTML = `Detectamos um jovem com ${idade} anos.`
                img.setAttribute('src' , 'imagens/jovem_homem.png')
             } else if(idade < 50){
                //adulto
                res.innerHTML = `Detectamos um adulto com ${idade} anos.`
                img.setAttribute('src' , 'imagens/adulto_homem.png')
             } else {
                res.innerHTML = `Detectamos um idoso com ${idade} anos.`

                img.setAttribute('src' , 'imagens/idoso_homem.png')
             }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                res.innerHTML = `Detectamos uma criança com ${idade} ano(s).`
                img.setAttribute('src' , 'imagens/crianca_mulher.png')
             } else if(idade < 21){
                //Jovem
                res.innerHTML = `Detectamos uma jovem com ${idade} anos.`
                img.setAttribute('src' , 'imagens/jovem_mulher.png')
             } else if(idade < 50){
                //adulto
                res.innerHTML = `Detectamos uma mulher adulta com ${idade} anos.`
                img.setAttribute('src' , 'imagens/adulta_mulher.png')
             } else {
                res.innerHTML = `Detectamos uma idosa com ${idade} anos.`
                img.setAttribute('src' , 'imagens/idosa_mulher.png')
             }
        }
        res.style.textAlign = 'center'
        
        res.appendChild(img)
    }
}