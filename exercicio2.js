
let idade = (prompt("qual sua idade? "))  
let temEspadaMagica = (prompt("voce tem espada magica? (sim/não)")) .toLowerCase() ==="sim"
if ( idade > 18 && temEspadaMagica){
    console.log("voce pode lutar contra o dragão")
}else {console.log("fuja enquanto é tempo")}