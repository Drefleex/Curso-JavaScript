let velNorm = 91
let velMax = 120
let velMid = 90
let velMin = 60
let multaMax = 1550
let multaMid = 600
console.log(`Você está indo a uma velocidade de ${velNorm}Km/h.`)
if(velNorm > velMax){
    console.log(`A velocidade máxima permitida nessa estrada é ${velMax}Km/h , você foi multado em  ${multaMax.toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})} reais.`)
}else {
    if(velNorm > velMid){
        console.log(`A velocidade limite nessa estrada é de ${velMid}Km/h. Você foi multado em ${multaMid.toLocaleString('pt-BR', {style : 'currency', currency :'BRL'})} reais.`)
}else{
    console.log('Muito bem. Use cinto de segurança. Dirija com cuidado!!')
}
}