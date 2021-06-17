// // 6. Cards
// // You need to write an IIFE that results in an object containing two properties Card which is a class and Suits which
// // is an object that will hold the possible suits for the cards.
// // The Suits object should have exactly these 4 properties:
// //  SPADES: ♠
// //  HEARTS: ♥
// //  DIAMONDS: ♦
// //  CLUBS: ♣
// // Where the key is SPADES, HEARTS e.t.c. and the value is the actual symbol ♠, ♥ and so on.
// // The Card class should allow for creating cards, each card has 2 properties face and suit. The valid faces are the
// // following ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] any other are
// // considered invalid.
// // The Card class should have setters and getters for the face and suit properties, when creating a card or setting
// // a property validations should be performed, if an invalid face or a suit not in the Suits object is passed an Error
// // should be thrown.
// // Code Template
// // You are required to write and submit an IIFE which results in an object containing the above-mentioned Card and
// // Suits as properties. Here is an example template you can use:
// // cards.js 
// // (function(){
// // to do 
// //     return {
// //         Suits: {  
// //                  SPADES: ♠
// //                  HEARTS: ♥
// //                  DIAMONDS: ♦
// //                  CLUBS: ♣
// //                 }

// //         Card: class Card (face, suit)
//                    
// //     }
// // }())
// // What to submit?
// // Create a function main that returns the IIFE.

function main() {
    return (function() {
        let cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suitsObj = {
            SPADES: "♠",
            HEARTS: "♥",
            DIAMONDS: "♦",
            CLUBS: "♣"
        };

        class Card {
    
            constructor(face,suits){

                cardValues.includes(face) ? this._face = face : 
                console.log("Error");

                Object.values(suitsObj).includes(suits) ? this._suits = suits : 
                console.log("Error");
            } 
            
            get face() {
                return this._face;
            }
            set face(faceValue) {
                cardValues.indexOf(faceValue) ? this._face = faceValue : 0;
            }
            get suits() {
                return this._suits;
            }
            set suits(suitsValue) {
                Object.values(suitsObj).indexOf(suitsValue) ? this._suits = suitsValue : 
                console.log("Error");
            }
        }

        return {
            Suits: suitsObj,
            Card: Card,
        };

    }());
}

let result = main();
let Card = result.Card; 
let Suits = result.Suits; 
let card = new Card('Q', Suits.CLUBS); 
console.log(card); //Card {_face: 'Q', _suits: '♣'}
card.face = 'A'; 
console.log(card); //Card {_face: 'A', _suits: '♣'} 
card.suits = Suits.DIAMONDS; 
console.log(card); // Card {_face: 'A', _suits: '♦'}

let card2 = new Card("1", Suits.DIAMONDS); // Error
console.log(card2); //Card {_suits: '♦'}

