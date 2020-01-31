const value1 = Number(prompt("Escriba una cantidad de segundos"));

if (value1 >= 60) {

    let seconds = value1 % 60;

    let minutes = Math.trunc(value1 / 60);

    if (minutes => 60) {
        
        let hours = Math.trunc(minutes / 60);

        minutes %= 60;

        alert(`${value1} segundos equivalen a ${hours}h, ${minutes}m, ${seconds}s`);

    }
    
    else {

        alert(`${value1} segundos equivalen a ${minutes}m, ${seconds}s`);
    
    }

}
    
else {

    alert(`${value1} segundos no llegan a sumar un minuto`);
}
