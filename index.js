// Imports variables from their respective scripts
import { deck, shuffle } from "./scripts/shuffle.js";
import { playerMoney, playerBet, increaseBet, decreaseBet, maximumBet, refresh } from "./scripts/playerMoney.js";
import { deal, createCards, start } from "./scripts/deal.js";

// Shuffles the deck automatically when the window loads 
window.onload = shuffle();
console.log(deck);

// Show the player how much money they have and how much they're betting
document.getElementById('playerMoney').textContent = `Cash: ${playerMoney}`;
document.getElementById('playerBet').textContent = `Bet: ${playerBet}`;

// Adds event listeners to buttons to increase/decrease bid or bid the maximum amount
document.getElementById('increaseBet').addEventListener('click', increaseBet);
document.getElementById('increaseBet').addEventListener('click', refresh);
document.getElementById('decreaseBet').addEventListener('click', decreaseBet);
document.getElementById('decreaseBet').addEventListener('click', refresh);
document.getElementById('maximumBet').addEventListener('click', maximumBet);
document.getElementById('maximumBet').addEventListener('click', refresh);
document.getElementById('deal').addEventListener('click', deal);
document.getElementById('deal').addEventListener('click', createCards);
document.getElementById('deal').addEventListener('click', start);
