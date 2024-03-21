// Imports variables from their respective scripts
import { deck, shuffle } from "./scripts/shuffle.js";

// Shuffles the deck automatically when the window loads 
window.onload = shuffle();
console.log(deck);