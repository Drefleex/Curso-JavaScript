function carregar(){
    let tit = document.querySelector('h1#tit')
    let txt = document.querySelector('div#txt')
    let img = document.querySelector('img#img')
    let msg = document.querySelector('div#msg')
    agora = new Date()
    //hora = agora.getHours()
    hora = 14
    txt.innerHTML = `Agora são ${hora} horas`
    if(hora >= 5 && hora <= 12){
        msg.innerHTML = 'Tenha um ótimo dia'
        document.body.style.backgroundColor = '#F2CB9B'
    } else if( hora >= 12 && hora <= 18){
        msg.innerHTML = 'Tenha uma ótima tarde !!'
        document.body.style.backgroundColor = '#F5C367'
        img.src = 'imagens/tarde.png'
    } else {
        msg.innerHTML = 'Tenha uma ótima noite'
        document.body.style.backgroundColor = '#051D2E'
        img.src = 'imagens/noite.png'
        
        
    }
}