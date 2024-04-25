import { playerMoney, playerBet, changeBet, changeMoney } from "./playerMoney.js";
import { hit, update } from "./hit.js";
import { stand } from "./stand.js";
import { playerTotal } from "./deal.js";

function doubleDown() {
    if (playerBet * 2 <= playerMoney) {
        changeMoney(-playerBet);
        changeBet(playerBet);
    } else {
        changeMoney(-playerMoney);
        changeBet(playerMoney);
    }
    // Refreshes the front end with the amount the player has bet so far
    document.getElementById("playerMoney").textContent = `Cash: ${playerMoney}`;
    document.getElementById("playerBet").textContent = `Bet: ${playerBet}`;
    hit();
    update();
    stand();
    // Shows the player the value of the cards in their hand
    document.getElementById('playerTotal').textContent = `Player Total: ${playerTotal}`;
}

export { doubleDown };