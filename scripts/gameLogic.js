import { playerPlay, computerPlay } from "./base.js";
import { playerPoints, playerTotal, computerPoints, computerTotal, increasecomputerTotal, increasePlayerTotal } from "./deal.js"
import { lose, refresh } from "./playerMoney.js";

// Disables actions buttons except Clear when the player goes over 21
function bust() {
    const actionButtons = document.getElementById('actions').getElementsByClassName('actionButton');
    for (let i = 0; i < actionButtons.length - 1; i++) {
        actionButtons[i].disabled = true;
    }
    lose(0);
    refresh();
}

// Compares your card and the computer's card to see which card has a higher value
function compare() {
    // Sets the value of the computer's face cards and aces to a number; otherwise, converts the cards' value from a string to a number
    for (let i = 0; i < computerPlay.length; i++) {
        switch (computerPlay[i].Value) {
            case ('J'):
            case ('Q'):
            case ('K'):
                computerPlay[i].Points = 10;
                computerPoints.push(computerPlay[i].Points);
                break;
            case ('A'):
                if (computerTotal <= 10) {
                    computerPlay[i].Points = 11;
                    computerPoints.push(computerPlay[i].Points);
                } else {
                    computerPlay[i].Points = 1;
                    computerPoints.push(computerPlay[i].Points);
                }
                break;
            default:
                computerPlay[i].Points = Number(computerPlay[i].Value);
                computerPoints.push(computerPlay[i].Points);
                break;
        }
        // Adds all of the points from the computer's cards to computerTotal
        increasecomputerTotal(computerPlay[i].Points);
    }
    
    // Sets the value of the player's face cards and aces to a number; otherwise, converts the cards' value from a string to a number
    for (let i = 0; i < playerPlay.length; i++) {
        switch (playerPlay[i].Value) {
            case ('J'):
            case ('Q'):
            case ('K'):
                playerPlay[i].Points = 10;
                playerPoints.push(playerPlay[i].Points);
                break;
            case ('A'):
                if (playerTotal <= 10) {
                    playerPlay[i].Points = 11;
                    playerPlay[i].AceAltered = false;
                    playerPoints.push(playerPlay[i].Points);
                } else {
                    playerPlay[i].Points = 1;
                    playerPlay[i].AceAltered = true;
                    playerPoints.push(playerPlay[i].Points);
                }
                break;
            default:
                playerPlay[i].Points = Number(playerPlay[i].Value);
                playerPoints.push(playerPlay[i].Points);
                break;
        }
        // Adds all of the points from the player's cards to playerTotal
        increasePlayerTotal(playerPlay[i].Points);
    }
    console.log(playerPlay);
    console.log(playerPoints);
    console.log(playerTotal);

    // Shows the player the value of the cards in their hand
    document.getElementById('playerTotal').textContent = `Player Total: ${playerTotal}`;
}

function checkForBust() {
    // TODO: Fix this function to correctly alter an ace's value
    // Initialize variables that track whether the player has an ace and if an ace has had its value reduced to 1
    const lookForAce = playerPlay.find(item => item.Value === 'A');
    console.log(lookForAce);
    // let aceAltered = false;
    
    // Reduces an ace's value from 11 to 1 if it would cause the player to go over 21
    if (playerTotal > 21 && lookForAce != undefined) {
        console.log("First conditions check");
        if (lookForAce.AceAltered === false) {
            console.log("Second conditions check");
            for (let i = 0; i < playerPlay.length; i++) {
                if (playerPlay[i].Value === 'A') {
                    playerPlay[i].Points = 1;
                    playerPlay[i].AceAltered = true;
                    playerPoints[i] = 1;
                    increasePlayerTotal(-10);
                    // playerTotal = playerPoints.reduce((a, b) => a + b, 0);
                    // aceAltered = true;
                    console.log(playerPoints);
                    console.log(playerTotal);
                }
            }
            console.log(lookForAce);
            // console.log(aceAltered);
        } else if (lookForAce.AceAltered === true) {
            bust();
            console.log("Busted!");
        }
        
    } else if (playerTotal > 21 && lookForAce === undefined) {
        bust();
        console.log("Busted!");
    }

    // Reduces an ace's value from 11 to 1 if it would cause the computer to go over 21
    if (computerTotal > 21) {
        for (let i = 0; i < computerPlay.length; i++) {
            if (computerPlay[i].Value === 'A') {
                computerPlay[i].Points = 1;
                playerPoints[i] = 1;
                computerTotal = playerPoints.reduce((a, b) => a + b, 0);
                console.log(playerPoints);
                console.log(computerTotal);
            }
        }
    }

    // Shows the player the value of the cards in their hand
    document.getElementById('playerTotal').textContent = `Player Total: ${playerTotal}`;
}

// Exports all functions to index.js and other scripts that need these
export { compare, checkForBust };