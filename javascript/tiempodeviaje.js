const distance = Number(prompt("Ingrese la distancia a recorrer."));

const bike = Math.ceil(distance / 5);
const walking = Math.ceil(distance / 10);
const car = Math.ceil(distance / 120);
const train = Math.ceil(distance / 80);

alert(`Usted tardaría en llegar a destino:`
+
if(bike < 1) {
    `- ${bike} hora en bicicleta.`
}
else {
    `- ${bike} horas en bicicleta.`

}
+
`- ${walking} horas a pie.
- ${car} horas en auto.
- ${train} horas en tren.`);