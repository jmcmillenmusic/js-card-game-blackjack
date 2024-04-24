// Imports the variables below from base.js and deal.js
import { deck, playerPlay } from "./base.js";
import { createPlayerCard, playerPoints, playerTotal, increasePlayerTotal } from "./deal.js";

// Adds the top card of the deck to the player's hand
function hit() {
    playerPlay.push(deck[0]);
    deck.shift(deck[0]);
    createPlayerCard();
    // console.log(playerPlay);
}

// Updates playerPoints and playerTotal when the player hits
function update() {
    switch (playerPlay[playerPlay.length - 1].Value) {
        case ('J'):
        case ('Q'):
        case ('K'):
            playerPlay[playerPlay.length - 1].Points = 10;
            playerPoints.push(playerPlay[playerPlay.length - 1].Points);
            break;
        case ('A'):
            if (playerTotal <= 10) {
                playerPlay[playerPlay.length - 1].Points = 11;
                playerPlay[playerPlay.length - 1].AceAltered = false;
                playerPoints.push(playerPlay[playerPlay.length - 1].Points);
            } else {
                playerPlay[playerPlay.length - 1].Points = 1;
                playerPlay[playerPlay.length - 1].AceAltered = true;
                playerPoints.push(playerPlay[playerPlay.length - 1].Points);
            }
            break;
        default:
            playerPlay[playerPlay.length - 1].Points = Number(playerPlay[playerPlay.length - 1].Value);
            playerPoints.push(playerPlay[playerPlay.length - 1].Points);
            break;
    }
    // Adds all of the points from the player's cards to playerTotal
    increasePlayerTotal(playerPlay[playerPlay.length - 1].Points);
    console.log(playerPlay);
    console.log(playerPoints);
    console.log(playerTotal);
}

// Exports hit and update to index.js
export { hit, update };