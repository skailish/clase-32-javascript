const moneyInitial = Number(prompt("Indique de cuánto dinero dispone"));

const services = ["Teléfono", "Gas", "Alquiler"];

const telephone = Number(prompt(`Dispone de ${moneyInitial} pesos. Indique cuánto debe pagar para el servicio de ${services[0]}. Quedan ${services.length} servicios por definir.`));

let moneyLeft = moneyInitial - telephone;

const gas = Number(prompt(`Dispone de ${moneyLeft} pesos. Indique cuánto debe pagar para el servicio de ${services[1]}. Quedan ${services.length - 1} servicios por definir.`));

moneyLeft -= gas;

const rent = Number(prompt(`Dispone de ${moneyLeft} pesos. Indique cuánto debe pagar para el servicio de ${services[2]}. Quedan ${services.length - 2} servicios por definir.`));
    
moneyLeft -= rent;


alert(`Saldo inicial de ${moneyInitial} pesos.
${services[0]}: ${telephone} pesos
${services[1]}: ${gas} pesos
${services[2]}: ${rent} pesos
Total a pagar:  ${telephone + gas + rent} pesos
Dinero restante: ${moneyLeft} pesos.
`);