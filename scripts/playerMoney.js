// Initialize starting amount of player money
let playerMoney = 100;
let playerBet = 0;

// Increases the bet by $1 if the player can bet at least $1
function increaseBet() {
    if (playerMoney > 0 && playerBet <= 9) {
        playerMoney--;
        playerBet++;
        console.log(playerMoney);
        console.log(playerBet);
    }
    else {
        console.log("Can't bet any more money!");
    }
}

// Decreases the bet by $1 if the player bet at least $1
function decreaseBet() {
    if (playerBet > 0) {
        playerMoney++;
        playerBet--;
        console.log(playerMoney);
        console.log(playerBet);
    }
    else {
        console.log("Must bet at least $1!");
    }
}

// Automatically bets $10 if the player has at least $10
function maximumBet() {
    if (playerBet > 0) {
        playerMoney = playerMoney + playerBet;
        playerBet = 0;
    }
    if (playerMoney >= 10) {
        playerMoney = playerMoney - 10;
        playerBet = 10;
        console.log(playerMoney);
        console.log(playerBet);
    }
}

// Updates the player's money and bet when they increase, decrease, or bet the maximum amount
function refresh() {
    document.getElementById("playerMoney").textContent = `Cash: ${playerMoney}`;
    document.getElementById("playerBet").textContent = `Bet: ${playerBet}`;
}

export { playerMoney, playerBet, increaseBet, decreaseBet, maximumBet, refresh };