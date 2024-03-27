import { deck, discardPile, playerPlay, computerPlay } from "./base.js";

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
        } else {
            playerPlay.push(deck[0]);
            deck.shift(deck[0]);
        }
    }
    console.log(computerPlay);
    console.log(playerPlay);
}

// Creates card images based on the last card you and the computer played
function createCards() {
    // TODO: Make these 2 for loops into a singular for loop if possible
    for (let i = 0; i < playerPlay.length; i++) {
        const playerCardArea = document.getElementById('playerCards');
    
        // Creates a container div with the fullcard class under playerCardArea
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
    
    for (let i = 0; i < computerPlay.length; i++) {
        const computerCardArea = document.getElementById('computerCards');
    
        // Creates a container div with the fullcard class under computerCardArea
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

function start() {
    // const betButtons = document.querySelectorAll('.betButton').disabled = true;
    // const actionButtons = document.querySelectorAll('.actionButton').disabled = false;
}

export { deal, createCards, start };