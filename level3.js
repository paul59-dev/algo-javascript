const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////

// Fonction pour convertir un nombre décimal en une base spécifiée
function decimalToBase(decimalNumber, base) {
    // Si le nombre est 0, le resultat dans n'importe quelle base est simplement '0'
    if (decimalNumber === 0) {
        return '0';
    }
  
    let result = '';
    // Boucle tant que le nombre décimal est supérieur à 0
    while (decimalNumber > 0) {
        // Obtenir le reste de la division par la base
        let remainder = decimalNumber % base;
        // Ajouter le reste au résultat
        result = remainder + result;
        // Diviser le nombre décimal par la base pour le prochain chiffre
        decimalNumber = Math.floor(decimalNumber / base);
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
// Normalement si on met 2 ca convertie en binaire
const decimalInputForBase = 255;
const baseOutput = decimalToBase(decimalInputForBase, 16);
console.log(`${decimalInputForBase} en base 16 : ${baseOutput}`);