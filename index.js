// Utilisation du pacckge prompt-sync pour la saisie de l'utilisateur
const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////

// Fonction exercice 9
function sommeTableau(tableau) {
    if (tableau.length === 0) {
      return 0; 
    }
  
    // Utilisation de la méthode reduce pour calculer la somme des élément du tableau
    let somme = tableau.reduce(function(acc, valeur) {
      return acc + valeur;
    }, 0);
  
    return somme;
}

///////////////////////////////////////////////////////////////////////////////
// Exercice 1

// Demander à l'utilisateur de saisir son nom
let nomUtilisateur = prompt("Veuillez saisir votre nom :");

console.log(`Bienvenue ${nomUtilisateur} !`);

///////////////////////////////////////////////////////////////////////////////

// Exercice 2
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

///////////////////////////////////////////////////////////////////////////////

// Exercice 3
// Demande à l'utilisateur de saisir le premier nombre et le convertit en nombre à virgule (float)
let premierNombre = parseFloat(prompt("Veuillez saisir le premier nombre :"));
let deuxiemeNombre = parseFloat(prompt("Veuillez saisir le deuxième nombre :"));

// Vérifie si les saisies des variable sont des nombres valides
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
// Boucle de 1 à 10 pour afficher la table de multiplication de nombre2
for (let i = 1; i <= 10; i++) {
    let resultat = nombre2 * i;
    console.log(`${nombre2} x ${i} = ${resultat}`);
}

// Exercice 9
let monTableau = [1, 2, 3, 4, 5];
let resultat = sommeTableau(monTableau); // Utilisation de la fonction sommeTableau()
console.log("La somme du tableau est :", resultat);