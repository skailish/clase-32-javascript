const roomForTwo = Number(prompt("Indique cuántas habitaciones para 2 personas hay en el hotel"));

const roomForThree = Number(prompt("Indique cuántas habitaciones para 3 personas hay en el hotel"));

const roomForFour = Number(prompt("Indique cuántas habitaciones para 4 personas hay en el hotel"));

const guests = (roomForTwo * 2) + (roomForThree * 3) + (roomForFour * 4);

alert(`El hotel puede albergar un total de ${guests} huéspedes`);