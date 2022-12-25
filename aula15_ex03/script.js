function contar(){
    var cont = document.querySelector('input#cont')
    var end = document.querySelector('input#end')
    var jum = document.querySelector('input#jum')
    var res = document.querySelector('div#res')

    var c = Number(cont.value)
    var e = Number(end.value)
    var j = Number(jum.value)
    
    if( c  === 0 || e === 0 ){
        window.alert(`Impossível contar, Digite um valor válido!!`)
    } else if ( j === 0){
        window.alert(`Passo Inválido , Considerando PASSO 1`)
        j += 1
    }

    for(c ; c < e ; c += j){
        console.log(c)
    }
    
    res.innerHTML =`Contando: ${c} - `
}