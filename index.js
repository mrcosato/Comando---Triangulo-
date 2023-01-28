var readline = require('readline-sync');

var la= 0;
var lb = 0 ;
var lc = 0;
var texto = "Os valores informados náo representam o lado de um triangulo";
//Entrada de dados

console.log("Programa que verifica se os valores informados representam os lados de um Triangulo");
la = parseFloat(readline.question("Informe o valor do lado A: "));
lb = parseFloat(readline.question("Informe o valor do lado B: "));
lc = parseFloat(readline.question("Informe o valor do lado C: "));
//&&
if (la < (lb+lc)&& lb < (la+lc ) && lc < (lb+la)) {

texto = 'Os valores informados representam os lados de um triangulo';
}

console.log(texto);