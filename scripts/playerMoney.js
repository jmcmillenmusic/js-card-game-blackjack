// Initialize starting amount of player money
let playerMoney = 100;
let playerBet = 0;

// Increases the bet by $1 if the player can bet at least $1
function increaseBet() {
    if (playerMoney > 0 && playerBet <= 9) {
        playerMoney--;
        playerBet++;
    }
}

// Decreases the bet by $1 if the player bet at least $1
function decreaseBet() {
    if (playerBet > 0) {
        playerMoney++;
        playerBet--;
    }
}

// Automatically bets $10 if the player has at least $10
function maximumBet() {
    if (playerMoney >= 10) {
        playerMoney = playerMoney - 10;
        playerBet = 10;
    }
}