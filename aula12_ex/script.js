 function carregar(){
    var msg = document.querySelector('div#txt')
    var msg1 = document.querySelector('p#pdia')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var horas =agora.getHours()

    msg.innerHTML = `Agora são ${horas} horas`
    if(horas >= 5 && horas < 12){
         msg1.innerHTML = 'Bom Dia'
         img.src = 'imagens/dia.png'
    }else if(horas >= 12 && horas <= 18){
         img.src = 'imagens/tarde.png'
         msg1.innerHTML = 'Boa tarde'
         document.body.style.backgroundColor = '#DBAE17'
   } else {
         img.src = 'imagens/noite.png'
         msg1.innerHTML = 'Boa Noite'
         document.body.style.backgroundColor = '#05152E'
   }
 }
 
