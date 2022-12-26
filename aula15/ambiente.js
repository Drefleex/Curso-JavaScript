/*let nome = ['André', 'Jonh', 'Guilherme']
nome.sort()
for(let pos =0 ; pos < nome.length ; pos++){
    console.log(nome[pos])
}
*/
function compare(a,b){
   //...
}

let num = [9,8,7,6,5,4,3,2,1,0,-1,-2,-3];
/*num.sort((a,b) =>{
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})
for(let pos in num){
    console.log(num[pos])
}
*/

num.sort((a,b) => a - b);
    

for(let pos in num){
    console.log(num[pos])
}
