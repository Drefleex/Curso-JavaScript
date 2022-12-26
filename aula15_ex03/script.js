function contar(){
    var ini = document.querySelector('input#ini')
    var end = document.querySelector('input#end')
    var pul = document.querySelector('input#pul')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || end.value.length == 0){ 
            window.alert(`Dados inválidos \u{274C}`)
            
    } else {
        res.innerHTML = `Contando: `
        var i = Number(ini.value)
        var e = Number(end.value)
        var p = Number(pul.value)
        if (p <= 0 ){
            window.alert(`Valor inválido. PASSO = 1`)
            p += 1
        }
      if(i < e){
            for( let c = i ; c < e ; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i ; c > e ; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML += `\u{1F6A9}`
    }
   
}