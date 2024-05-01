// Import variables from their respective scripts
import { playerMoney, playerBet, changeBet, changeMoney } from "./playerMoney.js";
import { hit, update } from "./hit.js";
import { stand } from "./stand.js";
import { playerTotal } from "./deal.js";

// Doubles the player's bet, hits once, and stands after that
function doubleDown() {
    // Double's the player's bet if they have enough funds from playerMoney, forces the player to go "all in" otherwise
    if (playerBet * 2 <= playerMoney) {
        changeMoney(-playerBet);
        changeBet(playerBet);
    } else {
        changeMoney(-playerMoney);
        changeBet(playerMoney);
    }

    // Refreshes the front end with the amount the player has bet so far after doubling down
    document.getElementById("playerMoney").textContent = `Cash: ${playerMoney}`;
    document.getElementById("playerBet").textContent = `Bet: ${playerBet}`;
    
    // Runs the following functions
    hit();
    update();
    stand();

    // Shows the player the value of the cards in their hand
    document.getElementById('playerTotal').textContent = `Player Total: ${playerTotal}`;
}

// Exports doubleDown() to index.js
export { doubleDown };