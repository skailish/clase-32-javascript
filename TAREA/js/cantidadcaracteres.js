const sentence = prompt("Escriba una frase");

alert("Frase: " + sentence + ". La suma de los caracteres de la frase, sin espacios, es: " + sentence.replace(/\s+/g, '').length);