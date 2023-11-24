const prompt = require('prompt-sync')();

function tennisGame(points) {
    // Demander les nom des joueurs
    const player1Name = prompt("Nom du joueur 1: ");
    const player2Name = prompt("Nom du joueur 2: ");

    // Initialisation des variables
    let scorePlayer1 = 0;
    let scorePlayer2 = 0;
    let gameInProgress = true;

    // Fonction pour calculer le score d'un jeu
    function calculateGameScore() {
        /* 
            Verifie si l'un des joueurs a gagner le jeu en ayant au moins 4 points
            et en ayant une avance d'au moins 2 points sur l'adversaire.
        */
        if (scorePlayer1 >= 4 && scorePlayer1 - scorePlayer2 >= 2) {
            return `Game, ${player1Name}`; // Si la condition est vraie, le joueur 1 gagne le jeu.
        } else if (scorePlayer2 >= 4 && scorePlayer2 - scorePlayer1 >= 2) {
            return `Game, ${player2Name}`; // Si la condition est vraie, le joueur 2 gagne le jeu.
        }

        // Conversion des scores en termes classiques du tennis
        const tennisScores = ['0', '15', '30', '40'];

        // Verifie si les deux joueurs ont atteint au moins 3 points.
        if (scorePlayer1 >= 3 && scorePlayer2 >= 3) {
            // Si les scores sont egaux, retourne "Deuce".
            if (scorePlayer1 === scorePlayer2) {
                return `Deuce`;
            } else if (scorePlayer1 - scorePlayer2 === 1) {
                // Si le joueur 1 a un point d'avance, retourne "Advantage, Player 1".
                return `Advantage, ${player1Name}`;
            } else if (scorePlayer2 - scorePlayer1 === 1) {
                // Si le joueur 2 a un point d'avance, retourne "Advantage, Player 2".
                return `Advantage, ${player2Name}`;
            }
        }

        return `${tennisScores[scorePlayer1]}-${tennisScores[scorePlayer2]}`;
    }

    // Parcourir les points
    for (let point of points) {
        // Verifier si le jeu est déjà termine
        if (!gameInProgress) {
            break;
        }

        // Traite le point
        if (point === 1) {
            scorePlayer1 += 1; // Incremente le score du joueur 1 si le point vaut 1
        } else if (point === 2) {
            scorePlayer2 += 1; // Incremente le score du joueur 2 si le point vaut 2
        }

        // Calcule le score du jeu en appelant la fonction calculateGameScore()
        const gameScore = calculateGameScore();

        // Affiche le score du jeu
        console.log(`| ${player1Name} | ${gameScore} | ${player2Name} |`);

        // Verifie si le jeu est terminer en verifiant si le score contient le mot "Game"
        if (gameScore.includes("Game")) {
            gameInProgress = false; // Mettre fin au jeu si la condition est vraie
        }
    }

    // Affiche le score final si le jeu n'est pas terminer
    if (gameInProgress) {
        console.log(`| ${player1Name} | ${scorePlayer1} | ${scorePlayer2} | ${player2Name} |`);
    }
}

// Test avec les points fournis
const points = [1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2];
tennisGame(points);