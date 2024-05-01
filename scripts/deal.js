// Imports the variables below from base.js
import { deck, discardPile, playerPlay, computerPlay } from "./base.js";

// Initialize variables that track card values as points
let playerTotal = 0;
let computerTotal = 0;
let playerPoints = [];
let computerPoints = [];

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
}

// Ensures that the computer's first card is face-down instead of face-up
function faceDown() {
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
    // const actionButtons = document.getElementById('actions').getElementsByClassName('actionButton');
    for (let i = 0; i < bettingButtons.length; i++) {
        bettingButtons[i].disabled = true;
    }
    // for (let i = 0; i < actionButtons.length; i++) {
    //     actionButtons[i].disabled = false;
    // }
    document.getElementById('hit').disabled = false;
    document.getElementById('stand').disabled = false;
}

// Resets the values of the below variables
function clearPoints() {
    playerPoints = [];
    computerPoints = [];
    playerTotal = 0;
    computerTotal = 0;
}

// Allows other scripts to change playerTotal
function increasePlayerTotal(amount) {
    playerTotal = playerTotal + amount;
}

// Allows other scripts to change computerTotal
function increasecomputerTotal(amount) {
    computerTotal = computerTotal + amount;
}

// Exports all functions and variables to index.js and other scripts that need these
export { playerPoints, playerTotal, computerPoints, computerTotal, createPlayerCard, createComputerCard, faceDown, deal, start, clearPoints, increasePlayerTotal, increasecomputerTotal };