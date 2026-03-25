let numUm;
let numDois;
let result;

numUm = Number(prompt("Escreva o primeiro número:"));
numDois = Number(prompt("Escreva o segundo número:"));
result = numUm + numDois;
alert(`O resultado da soma sera ${result.toFixed(2)}`);

numUm = Number(prompt("Coloque o primeiro número"));
numDois = Number(prompt("Coloque o segundo número"));
result = numUm / numDois;
alert(`O resultado da divisão será igual a ${result.toFixed(2)}`);

numUm = Number(prompt("insira o primeiro numero da subtracao"));
numDois = Number(prompt("insira o segundo numero da subtracao"));
result = numUm - numDois;
alert(`o valor da subtracao ${(numUm - numDois).toFixed(2)}`);

numUm = Number(prompt("insira o primeiro numero da multiplicacao"));
numDois = Number(prompt("insira o segundo numero da multiplicacao"));
result = numUm * numDois;
alert(`o valor da multiplicacao ${(numUm * numDois).toFixed(2)}`); 
