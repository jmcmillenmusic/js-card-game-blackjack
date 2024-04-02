// Imports the variables below from base.js and deal.js
import { deck, playerPlay } from "./base.js";
import { createPlayerCard } from "./deal.js";

// Adds the top card of the deck to the player's hand
function hit() {
    playerPlay.push(deck[0]);
    deck.shift(deck[0]);
    createPlayerCard();
    console.log(playerPlay);
}

// Exports hit() to index.js
export { hit };