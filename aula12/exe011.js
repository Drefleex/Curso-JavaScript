var idade = 19
if(idade < 16){
    console.log(`Você só tem ${idade} anos.. Ainda falta algum tempo para você poder votar.`)
} else if( idade < 18 || idade > 65){
    console.log(`Você tem ${idade} anos, seu voto é opcional.`)
}else{
    console.log(`Você tem ${idade} anos, você é obrigado a votar!!.`)
}