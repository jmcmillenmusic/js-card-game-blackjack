// Imports the variables below from base.js and deal.js
import { deck, computerPlay } from './base.js'
import { createComputerCard, computerPoints, computerTotal, increasecomputerTotal } from "./deal.js";

// While the computer's total is 16 or less, hit; otherwise, stand
function stand() {
    // Flips over the computer's first card
    const dealerFirstCardImg = document.getElementById('computerCards').getElementsByClassName('cardImg');
    dealerFirstCardImg[0].src = 'images/blank_card.png';
    const dealerFirstCardText = document.getElementById('computerCards').getElementsByClassName('cardText');
    dealerFirstCardText[0].style.visibility = 'visible';
    
    // Shows the dealer the value of the cards in their hand
    document.getElementById('dealerTotal').textContent = `Dealer Total: ${computerTotal}`;
    
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
    function computerStand() {
        if (computerTotal >= 17 && computerTotal <= 21) {
            console.log(computerPlay);
            console.log(`Dealer Stands on ${computerTotal}`);
        } else {
            console.log(computerPlay);
            console.log(`Dealer BUSTS on ${computerTotal}`);
        }
    }

    const dealerHand = setInterval(() => {
        if (computerTotal >= 17) {
            computerStand();
            clearInterval(dealerHand);
        };
        computerHit();
    }, 1000);

    // if (computerTotal <= 16) {
    //     setTimeout(computerHit, 1000);
    // } else {
    //     clearTimeout(computerHit);
    //     computerStand();
    // }
}

// Export stand() to index.js
export { stand };