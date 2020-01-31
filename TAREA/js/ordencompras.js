const pencilUnit = 12;
const rubberUnit = 3;
const sharpenerUnit = 5

const pencil = Number(prompt("Indique cuántos lápices compra"));

let pencilTotal = Number(pencilUnit * pencil);

const rubber = Number(prompt("Indique cuántas gomas compra"));

let rubberTotal = Number(rubberUnit * rubber);

const sharpener = Number(prompt("Indique cuántos sacapuntas compra"));

let sharpenerTotal = Number(sharpenerUnit * sharpener);

const installments = Number(prompt("El total a pagar es "+ pencilTotal + rubberTotal + sharpenerTotal + " pesos. Indique en cuántas cuotas abonará."));

let totalPrice = pencilTotal + rubberTotal + sharpenerTotal;
let installementValue = totalPrice / installments;

alert(`Detalles de la compra:
- ${pencil} lápices: ${pencilTotal} pesos
- ${rubber} gomas: ${rubberTotal} pesos
- ${sharpener} sacapuntas: ${sharpenerTotal} pesos

Total a pagar:  ${totalPrice} pesos en ${installments} cuotas.
Valor de cada cuota: ${installementValue.toFixed(2)} pesos.
`);