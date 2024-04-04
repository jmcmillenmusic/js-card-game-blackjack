// Imports the variables below from base.js
import { deck, discardPile, playerPlay, computerPlay } from "./base.js";

// Creates card images for cards dealt to the player
function createPlayerCard() {
    // Creates a container div with the fullcard class under playerCardArea
    const playerCardArea = document.getElementById('playerCards');
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'fullcard');
    playerCardArea.appendChild(cardContainer);

    // Creates the card image with the cardImg class under cardContainer
    const cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'cardImg');
    cardImg.src = 'images/blank_card.png';
    cardContainer.appendChild(cardImg);

    // Creates the card text with the cardText class under cardContainer
    const cardText = document.createElement('h3');
    cardText.setAttribute("class", "cardText");
    cardContainer.appendChild(cardText);

    // Sets the card value, suit, and text color
    for (let i = 0; i < playerPlay.length; i++) {
        const card = playerPlay[i];
        cardContainer.id = `${card.Value} of ${card.Suit}`;
        switch (card.Suit) {
            case ("clubs"):
                cardText.textContent = `${card.Value}\u2663`;
                cardText.style.color = "black";
                break;
            case ("diamonds"):
                cardText.textContent = `${card.Value}\u2666`;
                cardText.style.color = "red";
                break;
            case ("hearts"):
                cardText.textContent = `${card.Value}\u2665`;
                cardText.style.color = "red";
                break;
            case ("spades"):
                cardText.textContent = `${card.Value}\u2660`;
                cardText.style.color = "black";
                break;
        }
    }
}

// Creates card images for cards dealt to the computer
function createComputerCard() {
    // Creates a container div with the fullcard class under computerCardArea
    const computerCardArea = document.getElementById('computerCards');
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'fullcard');
    computerCardArea.appendChild(cardContainer);

    // Creates the card image with the cardImg class under cardContainer
    const cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'cardImg');
    cardImg.src = 'images/blank_card.png';
    cardContainer.appendChild(cardImg);

    // Creates the card text with the cardText class under cardContainer
    const cardText = document.createElement('h3');
    cardText.setAttribute("class", "cardText");
    cardContainer.appendChild(cardText);

    // Sets the card value, suit, and text color
    for (let i = 0; i < computerPlay.length; i++) {
        const card = computerPlay[i];
        cardContainer.id = `${card.Value} of ${card.Suit}`;
        switch (card.Suit) {
            case ("clubs"):
                cardText.textContent = `${card.Value}\u2663`;
                cardText.style.color = "black";
                break;
            case ("diamonds"):
                cardText.textContent = `${card.Value}\u2666`;
                cardText.style.color = "red";
                break;
            case ("hearts"):
                cardText.textContent = `${card.Value}\u2665`;
                cardText.style.color = "red";
                break;
            case ("spades"):
                cardText.textContent = `${card.Value}\u2660`;
                cardText.style.color = "black";
                break;
        }
    }

    // Ensures that the computer's first card is face-down instead of face-up
    const dealerFirstCardImg = document.getElementById('computerCards').getElementsByClassName('cardImg');
    dealerFirstCardImg[0].src = 'images/card_back.png';
    const dealerFirstCardText = document.getElementById('computerCards').getElementsByClassName('cardText');
    dealerFirstCardText[0].style.visibility = 'hidden';
}

function deal() {
    // Shuffle the discard pile back into the deck if there are 10 or fewer cards first
    if (deck.length <= 10) {
        // Shuffles the discard pile using the Fisher-Yates Algorithm
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
            createComputerCard();
        } else {
            playerPlay.push(deck[0]);
            deck.shift(deck[0]);
            createPlayerCard();
        }
    }
    console.log(computerPlay);
    console.log(playerPlay);
}

// Disables buttons that change the player's bet and enables buttons that allow the player to play Blackjack
function start() {
    const bettingButtons = document.getElementById('betting').getElementsByClassName('betButton');
    const actionButtons = document.getElementById('actions').getElementsByClassName('actionButton');
    for (let i = 0; i < bettingButtons.length; i++) {
        bettingButtons[i].disabled = true;
    }
    for (let i = 0; i < actionButtons.length; i++) {
        actionButtons[i].disabled = false;
    }
}

// Compares your card and the computer's card to see which card has a higher value
function compare() {
    let playerTotal = 0;
    let computerTotal = 0;
    let playerPoints = [];
    let computerPoints = [];

    // Sets the value of all face cards and aces to a number; otherwise, converts the cards' value from a string to a number
    // TODO: Change value of aces to 1 if playerTotal or computerTotal > 21.
    for (let i = 0; i < computerPlay.length; i++) {
        switch (computerPlay[i].Value) {
            case ('J'):
            case ('Q'):
            case ('K'):
                computerPlay[i].Points = 10;
                // computerTotal = computerTotal + 10;
                break;
            case ('A'):
                if (computerTotal <= 10) {
                    computerPlay[i].Points = 11;
                    // computerTotal = computerTotal + 11;
                    // console.log("Ace is 11");
                } else {
                    computerPlay[i].Points = 1;
                    // computerTotal = computerTotal + 1;
                    // console.log("Ace is 1");
                }
                break;
            default:
                computerPlay[i].Points = Number(computerPlay[i].Value);
                // computerTotal = computerTotal + Number(computerPlay[i].Value);
                break;
        }
    }
    
    for (let i = 0; i < playerPlay.length; i++) {
        switch (playerPlay[i].Value) {
            case ('J'):
            case ('Q'):
            case ('K'):
                playerPlay[i].Points = 10;
                playerPoints.push(playerPlay[i].Points);
                console.log(playerPoints);
                // playerTotal = playerTotal + 10;
                break;
            case ('A'):
                if (playerTotal <= 10) {
                    playerPlay[i].Points = 11;
                    playerPoints.push(playerPlay[i].Points);
                    console.log(playerPoints);
                    // playerTotal = playerTotal + 11;
                    // console.log("Ace is 11");
                } else {
                    playerPlay[i].Points = 1;
                    playerPoints.push(playerPlay[i].Points);
                    console.log(playerPoints);
                    // playerTotal = playerTotal + 1;
                    // console.log("Ace is 1");
                }
                break;
            default:
                playerPlay[i].Points = Number(playerPlay[i].Value);
                playerPoints.push(playerPlay[i].Points);
                console.log(playerPoints);
                // playerTotal = playerTotal + Number(playerPlay[i].Value);
                break;
        }
        playerTotal = playerPoints.reduce((a, b) => a + b, 0);
        console.log(playerTotal);
        // console.log(playerPlay[i].Value);
    }
    // console.log(playerTotal);

    // Reduces an ace's value from 11 to 1 if it would cause the player to go over 21
    // if (playerTotal > 21) {
    //     if (playerPlay.findIndex(x => x.Value === 'A') > -1) {
    //         playerTotal = playerTotal - 10;
    //     }
    // }

    // Shows the player the value of the cards in their hand
    document.getElementById('playerTotal').textContent = `Player Total: ${playerTotal}`;
}

export { createPlayerCard, createComputerCard, deal, start, compare };