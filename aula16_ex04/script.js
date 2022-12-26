function tabuada(){
    var num = document.querySelector('input#num')
    var tab = document.querySelector('select#tab')
    if( num.value.length == 0 ){
        window.alert('\u{274C}Dados inválidos, tente novamente.\u{274C}')
    } else {
        var n = Number(num.value)
        var c = 1 
        tab.innerHTML = ''
        while( c <= 10){
            var item = document.createElement('option')
            item.text =`${n} x ${c} = ${ n * c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}