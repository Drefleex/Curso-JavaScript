let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flist')
let res =   document.querySelector('div#res')
let valores = []

function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

function inList(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  } else {
    return false
  }
}

function adicionar(){
  if(isNumber(num.value) && !inList(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text =`O valor foi ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Dados inválidos ou já existente.')
  }
  num.value = ''
  num.push()
}

function finalizar(){
  if(valores.length == 0){
    window.alert('Nenhum valor encontrado, tente novamente!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let p in valores){
      soma += valores[p]
      if(valores[p] > maior){
        maior = valores[p]
      }
      if(valores[p] < menor){
        menor = valores[p]
      }
    }
    media = soma / tot
    res.innerHTML = ''
    res.style.textAlign = 'center'
    res.style.padding = '8px'
    res.innerHTML += `<p>O sistema possui ${tot} dados cadastrados no sistema!</p>`
    res.innerHTML += `<p>O maior valor do sistema é ${maior}</p>`
    res.innerHTML += `<p>O menor valor do sistema é ${menor}</p>`
    res.innerHTML += `<p>Totalizando todos os valores do sistema:${soma}`
    res.innerHTML += `<p>A média dos valores inseridos é ${media}`
   
  }
}

  