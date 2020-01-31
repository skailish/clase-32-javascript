const number = Number(prompt("Ingrese el número"));
const percent = Number(prompt("Ingrese el porcentaje"));

const result = number * (percent / 100);

alert(`El ${percent}% de ${number} es ${result}.`);