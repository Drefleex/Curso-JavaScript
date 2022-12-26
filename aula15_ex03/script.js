function contar(){
    var ini = document.querySelector('input#cont')
    var end = document.querySelector('input#end')
    var jum = document.querySelector('input#jum')
    var res = document.querySelector('div#res')

    
    // Verificador
    if( ini.value.length  == 0 || end.value.length == 0 || jum.value.length == 0){
        window.alert(`Impossível contar, Digite um valor válido!!`)
    }else{
        res.innerHTML = `Contando: <br> `
        var i = Number(ini.value)
        var e = Number(end.value)
        var j = Number(jum.value)
        if ( j <= 0){
            window.alert(`Passo Inválido , Considerando PASSO 1`)
            j = 1
        }
        //Logica contador
    if( i < e) {
        
        for(let c = i ; c < e ; c += j){
            console.log(c)
            res.innerText += `${c} \u{1F449}`
        }
      
    }else{
        for(let c = i ;  c >= e ; c -= j){
            res.innerText += `${c} \u{1F449}`
        }
        
    }
    res.innerHTML += `\u{1F3C1}`

  }
    
}