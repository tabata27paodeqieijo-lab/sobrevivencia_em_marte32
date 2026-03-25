let numUm;
let numDois;
let result;

numUm = Number(prompt("insira o primeiro numero da subtracao"));
numDois = Number(prompt("insira o segundo numero da subtracao"));
result = numUm - numDois;

alert(`o valor da subtracao ${(numUm - numDois).toFixed(2)}`);