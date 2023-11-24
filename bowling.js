// Fonction pour jouer une partie de bowling
function playBowlingGame(pinsArray) {
    // Initialiser les variables
    let score = 0;
    let frame = 1;
    let roll = 1;
    let rolls = [];

    // Fonction pour traiter le lancer
    function processRoll(pins) {
        // Enregistre le nombre de quilles tombées
        rolls.push(pins);
        // Mettre à jour le score
        score = calculateScore();
        // Affiche les détails du lancer
        console.log(`Tour ${frame}, Lancer ${roll}: ${pins} quilles abattues`);
        console.log(`Score en live : ${score}`);
        console.log('--------------------------');
        // Passe au lancer suivant
        roll = (roll % 2) + 1;
        // Passe au cadre suivant si nécessaire
        if (roll === 1) {
            frame += 1;
        }
    }

    // Fonction pour calculer le score en live
    function calculateScore() {
        let totalScore = 0;
        let rollIndex = 0;

        // Parcourt chaque cadre de la partie 
        for (let currentFrame = 1; currentFrame <= frame; currentFrame++) {
            // Vérifie s'il s'agit d'un strike
            if (rolls[rollIndex] === 10) {
                // Ajoute 10 points plus le bonus pour le strike au score total
                totalScore += 10 + bonusForStrike(rollIndex);
                // Passe au prochain lancer
                rollIndex += 1;
            } 
            // Vérifie s'il s'agit d'un spare (toutes les quilles tombées en deux lancers)
            else if (rolls[rollIndex] + rolls[rollIndex + 1] === 10) {
                // Ajoute 10 points plus le bonus pour le spare au score total
                totalScore += 10 + bonusForSpare(rollIndex);
                // Passe aux deux prochains lancers
                rollIndex += 2;
            } 
            // Cas normal où aucune quille n'est tombée au premier lancer et le total des deux lancers est inférieur à 10
            else {
                // Ajoute le total des quilles tombées au score total
                totalScore += rolls[rollIndex] + rolls[rollIndex + 1];
                // Passe aux deux prochains lancers
                rollIndex += 2;
            }
        }

        return totalScore;
    }

    // Fonction pour calculer le bonus pour un strike
    function bonusForStrike(rollIndex) {
        return rolls[rollIndex + 1] + rolls[rollIndex + 2];
    }

    // Fonction pour calculer le bonus pour un spare
    function bonusForSpare(rollIndex) {
        return rolls[rollIndex + 2];
    }

    // Parcour tous les lancers
    for (let pins of pinsArray) {
        // Traite le lancer
        processRoll(pins);
    }

    // Affiche le score final
    console.log('Score final :', score);
}

// Test avec les exemples 
const pinsArray1 = [];
const pinsArray2 = [1];
const pinsArray3 = [2];
const pinsArray4 = [3, 2];
const pinsArray5 = [1, 6, 3, 5, 1, 2, 9, 0, 3, 2, 7, 2, 5, 4, 4, 3, 6, 2, 7, 2];
const pinsArray6 = [1, 9];
const pinsArray7 = [1, 9, 4];
const pinsArray8 = [1, 9, 7, 3, 7, 2];
const pinsArray9 = [10, 0, 0, 1, 0];
const pinsArray10 = [10, 2, 0, 5, 0];
const pinsArray11 = [10, 1, 4, 0, 0];
const pinsArray12 = [10, 10, 4, 0];
const pinsArray13 = [10, 10, 10, 0];
const pinsArray14 = [10, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0];
const pinsArray15 = [10, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5];
const pinsArray16 = [10, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 2];
const pinsArray17 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

playBowlingGame(pinsArray1);
playBowlingGame(pinsArray2);
playBowlingGame(pinsArray3);
playBowlingGame(pinsArray4);
playBowlingGame(pinsArray5);
playBowlingGame(pinsArray6);
playBowlingGame(pinsArray7);
playBowlingGame(pinsArray8);
playBowlingGame(pinsArray9);
playBowlingGame(pinsArray10);
playBowlingGame(pinsArray11);
playBowlingGame(pinsArray12);
playBowlingGame(pinsArray13);
playBowlingGame(pinsArray14);
playBowlingGame(pinsArray15);
playBowlingGame(pinsArray16);
playBowlingGame(pinsArray17);