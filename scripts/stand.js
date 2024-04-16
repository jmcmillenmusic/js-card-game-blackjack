// Imports the variables below from base.js and deal.js
import { deck, computerPlay } from './base.js'
import { createComputerCard } from "./deal.js";

// While the computer's total is 16 or less, hit; otherwise, stand
function stand() {
    while (computerTotal <= 16) {
        computerPlay.push(deck[0]);
        deck.shift(deck[0]);
        createComputerCard();
        console.log(computerPlay);
    }
}

// Export stand() to index.js
export { stand };