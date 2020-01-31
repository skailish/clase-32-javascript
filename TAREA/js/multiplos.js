const value1 = Number(prompt("Elija un valor"));

const value2 = Number(prompt("Elija otro valor"));

let test = value2 % value1;

if (test == 0) {

    alert(`${value1} es múltiplo de ${value2}`);

} else {

    alert(`${value1} NO es múltiplo de ${value2}`);

};
