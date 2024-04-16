// Initializes starting amount of player money and their current bet
var playerMoney = 100;
var playerBet = 0;

// Increases the bet by $1 if the player can bet at least $1
function increaseBet() {
    if (playerMoney > 0 && playerBet <= 9) {
        playerMoney--;
        playerBet++;
    }
    else {
        // TODO: Show this on the front end as well.
        console.log("Can't bet any more money!");
    }
}

// Decreases the bet by $1 if the player bet at least $1
function decreaseBet() {
    if (playerBet > 0) {
        playerMoney++;
        playerBet--;
    }
    else {
        // TODO: Show this on the front end as well.
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
    }
}

// Updates the player's money and bet when they increase, decrease, or bet the maximum amount
function refresh() {
    // Refreshes the front end with the amount the player has bet so far
    document.getElementById("playerMoney").textContent = `Cash: ${playerMoney}`;
    document.getElementById("playerBet").textContent = `Bet: ${playerBet}`;
    
    // Enables or disables the Deal button if the player bets at least $1
    if (playerBet > 0) {
        document.getElementById('deal').disabled = false;
    } else {
        document.getElementById('deal').disabled = true;
    }
}

// Allows other functions to change playerBet
function lose(money) {
    playerBet = money;
}

export { playerMoney, playerBet, increaseBet, decreaseBet, maximumBet, refresh, lose };