// 2. Playing Cards
// Create a JS factory function that returns a Card object to hold a card’s face and suit , both set through the
// constructor . Throw an error if the card is initialized with invalid face or suit or if an attempt is made to
// change the face or suit of an existing instance to an invalid value.

// ● Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// ● Valid card suits are: S ( ♠ ), H ( ♥ ), D ( ♦ ), C ( ♣ )

// Both face and suit are expected as an uppercase string . The class also needs to have a toString()
// method that prints the card’s face and suit as a string . Use the following UTF code literals to represent the
// suits:
// ● \u2660 – Spades ( ♠ )
// ● \u2665 – Hearts ( ♥ )
// ● \u2666 – Diamonds ( ♦ )
// ● \u2663 – Clubs ( ♣ )

// Input / Output
// The factory function takes two string parameters . The toString() method of the returned object must
// return a string .

function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    const suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    isValid(face, suit);

    return {
        face: face,
        suit: suit,
        toString: () => {
            return `${face}${suitToChar[suit]}`;
        }
    };

    function isValid(face, suit) {
        if (!validFaces.includes(face)) {
            throw new Error('Invalid face!');
        }
        if (!validSuits.includes(suit)) {
            throw new Error('Invalid suit!');
        }
    }
}

console.log(makeCard('2', 'H').toString());
console.log(makeCard('A', 'S').toString());


// Examples
// Input                      Output
// 'A', 'S'                      A♠
// '10', 'H'                     10♥
// '1', 'C'                      Error

// What to submit?

// Export your function in playingCards.js and import it in your test file to test it. 
// Submit a zip file containing the playingCards.js and tests folder containing the playingCards.test.js . 
// Do not include the node_modules folder.
// File Name: PLAYING-CARDS.zip