import { deck, discardPile, playerPlay, computerPlay } from "./base.js";

function deal() {
    // Shuffle the discard pile back into the deck if there are 10 or fewer cards first
    if (deck.length <= 10) {
        // Shuffles the discard pile
        for (let i = discardPile.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [discardPile[i], discardPile[j]] = [discardPile[j], discardPile[i]];
        }

        // Adds the shuffled discard pile to the bottom of the deck
        for (let i = discardPile.length; i > 0; i--) {
            deck.push(discardPile[0]);
            discardPile.shift(discardPile[0]);
        }
        console.log(discardPile);
        console.log(deck);
    } 

    // Deal the first 4 cards out
    for (let i = 0; i < 4; i++) {
        if (computerPlay.length === playerPlay.length) {
            computerPlay.push(deck[0]);
            deck.shift(deck[0]);
        } else {
            playerPlay.push(deck[0]);
            deck.shift(deck[0]);
        }
    }
    console.log(computerPlay);
    console.log(playerPlay);
}

export default deal;