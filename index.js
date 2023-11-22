const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////

// Fonction exercice 9
function sommeTableau(tableau) {
    if (tableau.length === 0) {
      return 0; 
    }
  
    let somme = tableau.reduce(function(acc, valeur) {
      return acc + valeur;
    }, 0);
  
    return somme;
}

///////////////////////////////////////////////////////////////////////////////
// Exercice 1

// Demander à l'utilisateur de saisir son nom
let nomUtilisateur = prompt("Veuillez saisir votre nom :");

// Afficher le message de bienvenue avec le nom
console.log(`Bienvenue ${nomUtilisateur} !`);

///////////////////////////////////////////////////////////////////////////////

// Exercice 2
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 3
let premierNombre = parseFloat(prompt("Veuillez saisir le premier nombre :"));
let deuxiemeNombre = parseFloat(prompt("Veuillez saisir le deuxième nombre :"));

if (!isNaN(premierNombre) && !isNaN(deuxiemeNombre)) {
  let somme = premierNombre + deuxiemeNombre;
  console.log(`${premierNombre} + ${deuxiemeNombre} = ${somme}`);
} else {
  console.log("Veuillez saisir des nombres valides.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 4
let age = parseInt(prompt("Veuillez entrer l'âge de l'enfant :"));

if (age >= 12) {
  console.log("Cadet");
} else if (age >= 10) {
  console.log("Minime");
} else if (age >= 8) {
  console.log("Pupille");
} else {
  console.log("Poussin");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 5
let prixFabrication = parseFloat(prompt("Veuillez saisir le prix de fabrication du produit :"));
let prixVente = parseFloat(prompt("Veuillez saisir le prix de vente du produit :"));

if (prixFabrication > prixVente) {
  console.log("Il y a une perte.");
} else if (prixFabrication < prixVente) {
  console.log("Il y a un profit.");
} else {
  console.log("Le prix de fabrication est égal au prix de vente.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 6
let nombre = parseInt(prompt("Veuillez saisir un nombre :"));

if (nombre % 2 === 0) {
  console.log("Le nombre est pair.");
} else {
  console.log("Le nombre est impair.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 7
let nombre1 = parseFloat(prompt("Veuillez saisir un nombre :"));

if (nombre1 > 0) {
  console.log("Le nombre est positif.");
} else if (nombre1 < 0) {
  console.log("Le nombre est négatif.");
} else {
  console.log("Le nombre est nul.");
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 8
let nombre2 = parseInt(prompt("Veuillez saisir un nombre :"));

console.log(`Table de multiplication de ${nombre2}:`);
for (let i = 1; i <= 10; i++) {
  let resultat = nombre2 * i;
  console.log(`${nombre2} x ${i} = ${resultat}`);
}

// Exercice 9
let monTableau = [1, 2, 3, 4, 5];
let resultat = sommeTableau(monTableau);
console.log("La somme du tableau est :", resultat);