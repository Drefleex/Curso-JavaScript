function fatorial(n){
    fat = 1
    for(let c = n ; c > 1 ; c--){
        fat *= c
    }
    return fat
}

var total = fatorial(5)
console.log(total)