basicVacations = 15;

const years = Number(prompt("Ingrese cuántos años lleva trabajando en su empresa"));


if (years >= 4) { 
    
    const extraYears = years - 3;
    const extraVacations = extraYears * 2;
    totalVacations= extraVacations + basicVacations;

    alert(`Por ${years} años le corresponden un total de ${totalVacations} días.`);

}

else {

    alert(`Le corresponden un total de ${basicVacations} días.`);

}