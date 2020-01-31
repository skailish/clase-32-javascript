const origin = Number(prompt("Elegí un número inicial"));
const sum = Number(prompt("Elegí un número para incrementarlo"));

let result = origin + sum;

let messageNumber = 1; 

alert(`Incremento número ${messageNumber}.
Total: ${result}`);


messageNumber++;
result += sum;

alert(`Incremento número ${messageNumber}.
Total: ${result}`);

messageNumber++;
result += sum;

alert(`Incremento número ${messageNumber}.
Total: ${result}`);

messageNumber++;
result += sum;

alert(`Incremento número ${messageNumber}.
Total: ${result}`);