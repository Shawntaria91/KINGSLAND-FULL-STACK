// 3. Deck of Cards
// Write a function that takes a deck of cards as an array of strings and prints them as a sequence of
// cards ( space separated ). Use the solution from the previous task to generate the cards.
// Print " Invalid card: [card] " when an invalid card definition is passed as input.

// Input / Output
// The function takes an array of strings as parameter. Print the list of cards as string , separated by space .

//                 deckOfCards.js

// function printDeckOfCards(cards) {
//     function createCard {
// Use the solution from the previous task
//     }
// TODO
// }

function printDeckOfCards(deck) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    const suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    let cards = [];
    let face = '';
    let suit = '';

    for (let card of deck) {
        if (!isValid(card)) {
            return;
        }

        cards.push(makeCard(face, suit))
    }

    console.log(cards.join(', '));

    function makeCard(face, suit) {
        return {
            face: face,
            suit: suit,
            toString: () => {
                return `${face}${suitToChar[suit]}`;
            }
        };
    }

    function isValid(card) {
        if (card.length > 3 || card.length < 2) {
            console.log(`Invalid card: ${card}`);
            return false;
        }

        if (card.length === 3) {
            face = '10';
            suit = card[2];
        } else {
            face = card[0];
            suit = card[1];
        }

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            console.log(`Invalid card: ${card}`);
            return false;
        }

        return true;
    }
}

printDeckOfCards(['10D', '3D', 'QD', '10C']);


// Examples

// Sample Input                           Sample Output
// ['AS', '10D', 'KH', '2C']                   A♠ 10♦ K♥ 2♣
// ['5S', '3D', 'QD', '1C']                    Invalid card: 1C

// What to submit?

// Export your function in deckOfCards.js and import it in your test file to test it. Submit a zip file containing the
// deckOfCards.js and tests folder containing the deckOfCards.test.js . Do not include the node_modules folder.
// File Name: DECK-OF-CARDS.zip