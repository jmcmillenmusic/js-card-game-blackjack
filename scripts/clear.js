import { discardPile, playerPlay, computerPlay } from './base.js';
import { clearPlayerPoints } from './deal.js';

// Re-enables buttons that change the player's bet to start the next hand of Blackjack
function end() {
    const bettingButtons = document.getElementById('betting').getElementsByClassName('betButton');
    const actionButtons = document.getElementById('actions').getElementsByClassName('actionButton');
    for (let i = 0; i < bettingButtons.length - 1; i++) {
        bettingButtons[i].disabled = false;
    }
    for (let i = 0; i < actionButtons.length; i++) {
        actionButtons[i].disabled = true;
    }
    // Resets playerTotal to 0 by clearing the playerPoints array
    clearPlayerPoints();
    document.getElementById('playerTotal').textContent = `Player Total: ??`;
}

function clear() {
    // Discards all cards from the player's hand
    for (let i = playerPlay.length; i > 0; i--) {
        discardPile.push(playerPlay[0]);
        playerPlay.shift(playerPlay[0]);
    }

    // Discards all cards from the computer's hand
    for (let i = computerPlay.length; i > 0; i--) {
        discardPile.push(computerPlay[0]);
        computerPlay.shift(computerPlay[0]);
    }

    // Removes the images of all played cards
    var playerCardArea = document.getElementById('playerCards');
    var computerCardArea = document.getElementById('computerCards');
    var playerCards = document.querySelectorAll('#playerCards .fullcard');
    var computerCards = document.querySelectorAll('#computerCards .fullcard');
    var playerCardIds = [...document.querySelectorAll('#playerCards .fullcard')].map(({ id }) => id);
    var computerCardIds = [...document.querySelectorAll('#computerCards .fullcard')].map(({ id }) => id);
    
    for (let i = 0; i < playerCardIds.length; i++) {
        playerCardArea.removeChild(playerCards[i]);
    }
    for (let i = 0; i < computerCardIds.length; i++) {
        computerCardArea.removeChild(computerCards[i]);
    }
    
    end();
}

// Export clear() to index.js
export { clear };