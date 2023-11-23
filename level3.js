const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////

// Fonction exercice 3
function decimalToBase(decimalNumber, base) {
    // Si le nombre est 0 le resultat dans n'importe quelle base est simplement '0'
    if (decimalNumber === 0) {
        return '0';
    }
  
    let result = '';
    // Boucle tant que le nombre décimal est supérieur à 0
    while (decimalNumber > 0) {
        // Obtient le reste de la division par la base
        let remainder = decimalNumber % base;
        // Ajout le reste au résultat
        result = remainder + result;
        // Divise le nombre décimal par la base pour le prochain chiffre
        decimalNumber = Math.floor(decimalNumber / base);
    }
  
    return result;
}

///////////////////////////////////////////////////////////////////////////////

// Fonction exercice 4
function decimalToRoman(decimalNumber) {
    // Tableaux associant les valeurs décimale et les chiffre romain correspondant
    let decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    // Vérifie si le nombre est dans la plage valide pour les chiffres romains
    if (decimalNumber <= 0 || decimalNumber >= 4000) {
        return "Le nombre n'est pas dans la plage valide pour les chiffres romains.";
    }

    let result = '';

    for (let i = 0; i < decimalValues.length; i++) {
        // Tant que le nombre en base 10 est plus grand ou égal à la valeur décimale actuelle
        while (decimalNumber >= decimalValues[i]) {
            // Ajout du chiffre romain correspondant au résultat
            result += romanNumerals[i];
            // Soustrait la valeur décimale du nombre en base 10
            decimalNumber -= decimalValues[i];
        }
    }

    return result;
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 1
let n = parseInt(prompt("Veuillez saisir un nombre N :"));

// Vérifie si la saisie est un nombre valide
if (!isNaN(n)) {
    // Affiche les nombres de 0 à N avec FizzBuzz
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FIZZBUZZ");
        } else if (i % 3 === 0) {
            console.log("FIZZ");
        } else if (i % 5 === 0) {
            console.log("BUZZ");
        } else {
            console.log(i);
        }
    }
} else {
    console.log("Veuillez saisir un nombre valide.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 2
// Demander à l'utilisateur de saisir le nombre de tentatives
const nombreDeTentatives = parseInt(prompt("Veuillez saisir le nombre de tentatives :"));

// Vérifier si la saisie est un nombre valide
if (!isNaN(nombreDeTentatives)) {
    // Générer un nombre aléatoire entre 0 et N
    const N = parseInt(prompt("Veuillez saisir un nombre N :"));
    if (!isNaN(N)) {
        const nombreAttendu = Math.floor(Math.random() * (N + 1));

        // Boucle pour gérer les tentatives
        for (let i = 0; i < nombreDeTentatives; i++) {
            // Saisir un nombre de l'utilisateur
            const nombreSaisi = parseInt(prompt("Saisissez un nombre :"));

            // Comparation avec le résultat attendu
            if (!isNaN(nombreSaisi)) {
                if (nombreSaisi === nombreAttendu) {
                    console.log("Bravo, vous avez deviné le bon nombre !");
                    break;
                } else if (nombreSaisi < nombreAttendu) {
                    console.log("Plus");
                } else {
                    console.log("Moins");
                }
            } else {
                console.log("Veuillez saisir un nombre valide.");
            }

            console.log(`Tentatives restantes : ${nombreDeTentatives - i - 1}`);
        }

        // Affiche un message si toutes les tentatives sont épuisées
        if (nombreDeTentatives === 0) {
            console.log(`Désolé, vous avez épuisé toutes vos tentatives. Le nombre attendu était ${nombreAttendu}.`);
        }
    } else {
        console.log("Veuillez saisir un nombre N valide.");
    }
} else {
    console.log("Veuillez saisir un nombre de tentatives valide.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 3
// Test de la conversion en base quelconque, j'ai utiliser la base 16 pour l'exemple
const decimalInputForBase = 255;
// Normalement si on met 2 cela convertie en binaire
const baseOutput = decimalToBase(decimalInputForBase, 16); // Utilise la fonction decimalToBase() ecrit en haut
console.log(`${decimalInputForBase} en base 16 : ${baseOutput}`);

///////////////////////////////////////////////////////////////////////////////

// Exercice 4
const decimalInputForRoman = 1984;
const romanOutput = decimalToRoman(decimalInputForRoman); // Utilise la fonction decimalToRoman() ecrit en haut
console.log(`${decimalInputForRoman} en chiffres romains : ${romanOutput}`);