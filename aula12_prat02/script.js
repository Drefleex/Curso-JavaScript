function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtn')
    var res = document.querySelector('div#res')
    if( fano.value.length == 0 || Number(fano.value) > ano){
         window.alert('Verifique os dados inseridos e tente novamente!!');
    } else {
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
          gênero = 'Homem' 
            if( idade >= 0 && idade < 10){
                res.innerHTML = `Detetamos uma criança com ${idade} ano(s).`
                img.setAttribute('src', 'imagens/crianca_homem.png')
           } else if(idade < 25){
                res.innerHTML = `Detetamos um jovem com ${idade} anos.`
                img.setAttribute('src', 'imagens/jovem_homem.png')
           } else if(idade < 50){
               res.innerHTML = `Detetamos um homem com ${idade} anos.`
               img.setAttribute('src', 'imagens/adulto_homem.png')
           }else {
                res.innerHTML = `Detetamos um idoso com ${idade} anos.`
                img.setAttribute('src', 'imagens/idoso_homem.png')
           }
        } else if(fsex[1].checked){
            if( idade >= 0 && idade < 10){
                res.innerHTML = `Detetamos uma criança com ${idade} ano(s).`
                img.setAttribute('src', 'imagens/crianca_mulher.png')
           } else if(idade < 25){
                res.innerHTML = `Detetamos uma jovem com ${idade} anos.`
                img.setAttribute('src', 'imagens/jovem_mulher.png')
           } else if(idade < 50){
               res.innerHTML = `Detetamos uma mulher com ${idade} anos.`
               img.setAttribute('src', 'imagens/adulta_mulher.png')
           }else {
                res.innerHTML = `Detetamos uma idosa com ${idade} anos.`
                img.setAttribute('src', 'imagens/idosa_mulher.png')
           }
        }
    }
    res.style.textAlign = 'center'
    res.appendChild(img)
}