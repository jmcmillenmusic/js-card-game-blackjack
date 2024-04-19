// Imports variables and functions from their respective scripts
import { deck, shuffle } from "./scripts/shuffle.js";
import { playerMoney, playerBet, increaseBet, decreaseBet, maximumBet, refresh } from "./scripts/playerMoney.js";
import { deal, start, compare, checkForBust, faceDown } from "./scripts/deal.js";
import { hit, update } from "./scripts/hit.js";
import { clear } from "./scripts/clear.js";
import { stand } from "./scripts/stand.js";

// Shuffles the deck automatically when the window loads 
window.onload = shuffle();
console.log(deck);

// Show the player how much money they have and how much they're betting
document.getElementById('playerMoney').textContent = `Cash: ${playerMoney}`;
document.getElementById('playerBet').textContent = `Bet: ${playerBet}`;

// Shows the total value of cards of the dealer and player
document.getElementById('dealerTotal').textContent = 'Dealer Total: ??';
document.getElementById('playerTotal').textContent = `Player Total: ??`;

// Adds event listeners to the #increaseBet button
document.getElementById('increaseBet').addEventListener('click', increaseBet);
document.getElementById('increaseBet').addEventListener('click', refresh);

// Adds event listeners to the #decreaseBet button
document.getElementById('decreaseBet').addEventListener('click', decreaseBet);
document.getElementById('decreaseBet').addEventListener('click', refresh);

// Adds event listeners to the #maximumBet button
document.getElementById('maximumBet').addEventListener('click', maximumBet);
document.getElementById('maximumBet').addEventListener('click', refresh);

// Adds event listeners to the #deal button
document.getElementById('deal').addEventListener('click', deal);
document.getElementById('deal').addEventListener('click', faceDown);
document.getElementById('deal').addEventListener('click', start);
document.getElementById('deal').addEventListener('click', compare);

// Adds event listeners to the #hit button
document.getElementById('hit').addEventListener('click', hit);
document.getElementById('hit').addEventListener('click', update);
document.getElementById('hit').addEventListener('click', checkForBust);

// Adds event listeners to the #stand button
document.getElementById('stand').addEventListener('click', stand);

// Adds event listeners to the #clear button
document.getElementById('clear').addEventListener('click', clear);
