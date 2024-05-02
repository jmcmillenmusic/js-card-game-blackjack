// Imports the variables below from base.js and deal.js
import { deck, computerPlay } from './base.js'
import { createComputerCard, computerPoints, computerTotal, increasecomputerTotal, playerTotal } from "./deal.js";
import { playerMoney, playerBet, changeBet, changeMoney } from "./playerMoney.js";
import { bust } from './gameLogic.js';

// While the computer's total is 16 or less, hit; otherwise, stand
function stand() {
    // Disables all action buttons until the hand is resolved
    const actionButtons = document.getElementById('actions').getElementsByClassName('actionButton');
    for (let i = 0; i < actionButtons.length; i++) {
        actionButtons[i].disabled = true;
    }
    
    // Flips over the computer's first card
    const dealerFirstCardImg = document.getElementById('computerCards').getElementsByClassName('cardImg');
    dealerFirstCardImg[0].src = 'images/blank_card.png';
    const dealerFirstCardText = document.getElementById('computerCards').getElementsByClassName('cardText');
    dealerFirstCardText[0].style.visibility = 'visible';
    
    // Shows the dealer the value of the cards in their hand
    document.getElementById('dealerTotal').textContent = `Dealer Total: ${computerTotal}`;
    
    // Adds a card to the dealer's hand if computerTotal is 16 or less
    function computerHit() {
        if (computerTotal <= 16) {
            computerPlay.push(deck[0]);
            deck.shift(deck[0]);
            createComputerCard();
            console.log(computerPlay);
            console.log(computerTotal);
            console.log("Dealer Hits!");
            switch (computerPlay[computerPlay.length - 1].Value) {
                case ('J'):
                case ('Q'):
                case ('K'):
                    computerPlay[computerPlay.length - 1].Points = 10;
                    computerPoints.push(computerPlay[computerPlay.length - 1].Points);
                    break;
                case ('A'):
                    if (computerTotal <= 10) {
                        computerPlay[computerPlay.length - 1].Points = 11;
                        computerPoints.push(computerPlay[computerPlay.length - 1].Points);
                    } else {
                        computerPlay[computerPlay.length - 1].Points = 1;
                        computerPoints.push(computerPlay[computerPlay.length - 1].Points);
                    }
                    break;
                default:
                    computerPlay[computerPlay.length - 1].Points = Number(computerPlay[computerPlay.length - 1].Value);
                    computerPoints.push(computerPlay[computerPlay.length - 1].Points);
                    break;
            }
            // Adds all of the points from the dealer's cards to computerTotal
            increasecomputerTotal(computerPlay[computerPlay.length - 1].Points);

            // Shows the dealer the value of the cards in their hand
            document.getElementById('dealerTotal').textContent = `Dealer Total: ${computerTotal}`;
        
            console.log(computerPoints);
            console.log(computerTotal);
        }
    }

    // Stops adding cards to the dealer's hand if computerTotal is 17 or more
    function computerStand() {
        if (computerTotal >= 17 && computerTotal <= 21) {
            console.log(computerPlay);
            console.log(`Dealer Stands on ${computerTotal}`);
            if (computerTotal > playerTotal) {
                console.log("Dealer Wins!");
                bust();
            } else if (playerTotal > computerTotal) {
                console.log("Player Wins!");
                changeBet(playerBet);
                changeMoney(playerBet);
                changeBet(-playerBet);
                // Refreshes the front end with the amount the player has won
                document.getElementById("playerMoney").textContent = `Cash: ${playerMoney}`;
                document.getElementById("playerBet").textContent = `Bet: ${playerBet}`;
            } else if (computerTotal === playerTotal) {
                console.log("PUSH!");
                changeMoney(playerBet);
                changeBet(-playerBet);
                // Refreshes the front end with the amount the player has won
                document.getElementById("playerMoney").textContent = `Cash: ${playerMoney}`;
                document.getElementById("playerBet").textContent = `Bet: ${playerBet}`;
            }
        } else {
            console.log(computerPlay);
            console.log(`Dealer BUSTS on ${computerTotal}`);
            console.log("Player Wins!");
            changeBet(playerBet);
            changeMoney(playerBet);
            changeBet(-playerBet);
            // Refreshes the front end with the amount the player has won
            document.getElementById("playerMoney").textContent = `Cash: ${playerMoney}`;
            document.getElementById("playerBet").textContent = `Bet: ${playerBet}`;
        }
    }

    // Every second, check computerTotal's value; hit on 16 or less, stand on 17 or more
    const dealerHand = setInterval(() => {
        if (computerTotal >= 17) {
            computerStand();
            clearInterval(dealerHand);
            // Enable the clear button to run the clear() function
            document.getElementById('clear').disabled = false;
        };
        computerHit();
    }, 1000);
}

// Export stand() to index.js
export { stand };