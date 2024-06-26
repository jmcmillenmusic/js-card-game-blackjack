// Initializes the deck and the discard pile as empty arrays
const deck = [];
const discardPile = [];

// Initializes empty arrays to store the cards being played
const playerPlay = [];
const computerPlay = [];

// Establishes suits and values of cards in a standard 52-card deck
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Exports variables to all other scripts in scripts folder
export { deck, discardPile, playerPlay, computerPlay, suits, values };

/* 

File Path:

base.js => shuffle.js, playerMoney.js, deal.js, hit.js

deal.js => hit.js

ALL SCRIPTS => index.js

*/