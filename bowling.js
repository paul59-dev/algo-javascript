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

        for (let currentFrame = 1; currentFrame <= frame; currentFrame++) {
            // Traitement des cas spéciaux pour les strikes et les spares
            if (rolls[rollIndex] === 10) {
                totalScore += 10 + bonusForStrike(rollIndex);
                rollIndex += 1;
            } else if (rolls[rollIndex] + rolls[rollIndex + 1] === 10) {
                totalScore += 10 + bonusForSpare(rollIndex);
                rollIndex += 2;
            } else {
                // Traitement normal pour les lancers
                totalScore += rolls[rollIndex] + rolls[rollIndex + 1];
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
        // Traiter le lancer
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