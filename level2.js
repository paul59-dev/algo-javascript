const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////

// Exercice 1
let nombre1 = parseFloat(prompt("Veuillez saisir le premier nombre :"));
let nombre2 = parseFloat(prompt("Veuillez saisir le deuxième nombre :"));
let nombre3 = parseFloat(prompt("Veuillez saisir le troisième nombre :"));

let plusGrand = Math.max(nombre1, nombre2, nombre3); // Plus grand nombre parmi nombre1, nombre2, et nombre3

console.log(`Le plus grand nombre est : ${plusGrand}`);

///////////////////////////////////////////////////////////////////////////////

// Exercice 2
let note = parseFloat(prompt("Veuillez saisir la note de l'élève (entre 0 et 20) :"));

if (note >= 0 && note <= 4) {
    console.log("Catastrophique, il faut tout revoir");
} else if (note >= 5 && note <= 10) {
    console.log("Insuffisant");
} else if (note >= 11 && note <= 14) {
    console.log("Peut mieux faire");
} else if (note >= 15 && note <= 17) {
    console.log("Bien");
} else if (note >= 18 && note <= 20) {
    console.log("Excellent, bon travail");
} else {
    console.log("La note saisie n'est pas valide. Veuillez entrer une note entre 0 et 20.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 3
let n = parseInt(prompt("Veuillez saisir un nombre N :"));

if (!isNaN(n)) {
    let somme = 0;
  
    // Calculer la somme de tous les nombres entre 1 et N
    for (let i = 1; i <= n; i++) {
      somme += i;
    }

    console.log(`La somme des nombres entre 1 et ${n} est : ${somme}`);
  } else {
    console.log("Veuillez saisir un nombre valide.");
}  

///////////////////////////////////////////////////////////////////////////////

// Exercice 4
let nombre = parseInt(prompt("Veuillez saisir un nombre :"));

if (!isNaN(nombre)) {
    // Boucle pour générer chaque ligne de la pyramide
    for (let i = 1; i <= nombre; i++) {
        let ligne = '*'.repeat(i);
        console.log(ligne);
    }
} else {
    console.log("Veuillez saisir un nombre valide.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 5
let nombre5 = parseInt(prompt("Veuillez saisir un nombre :"));

if (!isNaN(nombre5)) {
    // Generation une pyramide d'étoiles ascendante 
    for (let i = 1; i <= nombre5; i++) {
        let ligne = '*'.repeat(i);
        console.log(ligne);
    }

    // Generation une pyramide d'étoiles descendante 
    for (let i = nombre5 - 1; i >= 1; i--) {
        let ligne = '*'.repeat(i);
        console.log(ligne);
    }
} else {
    console.log("Veuillez saisir un nombre valide.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 6
let nombre6 = parseInt(prompt("Veuillez saisir un nombre :"));

if (!isNaN(nombre6)) {
    // Génère une pyramide d'étoiles avec un nombre de lignes égal au nombre donnée
    for (let i = 1; i <= nombre6; i++) {
        let espaces = ' '.repeat(nombre6 - i);
        let etoiles = '*'.repeat(2 * i - 1);
        console.log(espaces + etoiles);
    }
} else {
    console.log("Veuillez saisir un nombre valide.");
}