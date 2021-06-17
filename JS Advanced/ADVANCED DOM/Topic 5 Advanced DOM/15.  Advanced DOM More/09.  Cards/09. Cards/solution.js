// 4. Cards
// Write a function which checks cards , shows which one is greater and keeps history of all hands.
//Create a functionality which checks all cards, shows which one is greater and keeps history of all hands.
// cards vs cards
// Firstly, add click events to all cards . When one of the cards is clicked, the current background card must be changed
// with the " whiteCard.jpg " picture (it is given in the skeleton) and the card name should be appended to one of
// the span elements in the div with id =" result" .
// If a card from the top side is clicked , append the card name to the left span (first empty span ), otherwise append
// the card name to the right span (second/last span ).
// Creates a functionality which checks all cards, shows which one is greater and keeps history of all hands.
// 10 vs
// Creates a functionality which checks all cards, shows which one is greater and keeps history of all hands.
// vs 7 
// When cards from both sides are selected, check which one is greater . The greater card should have border " 2px
// solid green " and the lower card - " 2px solid red ".
// Create a functionality which checks all cards, shows which one is greater and keeps history of all hands.
// 12 vs 9
// [12 vs 9]
// Create a functionality which checks all cards, shows which one is greater and keeps history of all hands.
// 10 vs 3
// [12 vs 9][10 vs 3]
// You should clear the span elements which hold the current card names when both are selected, and the winner is
// selected. After every hand, push the current card names in the history div in the following format:
// [{top side card name} vs {bottom side card name} ]
// Create a functionality which checks all cards, shows which one is greater and keeps history of all hands.
// vs 
// [12 vs 9][10 vs 3]
// What to submit?
// Zip file containing the following:
// ● solution.js
// ● template.css
// ● template.html
// File Name: CARDS.zip
// function solve() {
//    let p1CardIndex = null;
//    let p2CardIndex = null;
//    let p1CardValue = null;
//    let p2CardValue = null;
//    let cardHistory = [];
//    let images = document.querySelectorAll('section.cards img');
//    for (let i = 0; i < images.length; i++) {
//       images[i].addEventListener('click', function (e) {
//          let currentImg = e.target;
//          currentImg.src = 'images/whiteCard.jpg';
//          let imgName = +currentImg.name;
//          const parentId = e.target.parentElement.id;
//          if (parentId === 'player1Div') {
//             let player1Result = document.getElementsByTagName('span')[0];
//             player1Result.textContent = imgName;
//             p1CardValue = imgName;
//             p1CardIndex = i;
//          } else if (parentId === 'player2Div') {
//             let player2Result = document.getElementsByTagName('span')[2];
//             player2Result.textContent = imgName;
//             p2CardValue = imgName;
//             p2CardIndex = i;
//          }
//          if (p1CardIndex !== null && p2CardIndex !== null) {
//             if (p1CardValue < p2CardValue) {
//                images[p1CardIndex].style.border = '2px solid red';
//                images[p2CardIndex].style.border = '2px solid green';
//             } else if (p1CardValue > p2CardValue) {
//                images[p1CardIndex].style.border = '2px solid green';
//                images[p2CardIndex].style.border = '2px solid red';
//             }
//             cardHistory.push(`[${p1CardValue} vs ${p2CardValue}]`);
//             p1CardIndex = null;
//             p2CardIndex = null;
//             p1CardValue = null;
//             p2CardValue = null;
//             // player1History = (Number(currentImg.name));
//             let history = document.getElementById('history');
//             history.textContent = cardHistory.join(' ') + ' ';
//             console.log(cardHistory);
//          }
//       });
//    }
// }
// Another way to solve same question 
function solve() {
   const playerOne = document.getElementById('player1Div');
   const playerTwo = document.getElementById('player2Div');
   const result = document.getElementById('result').children;
   const history = document.getElementById('history');
   let playerOneCard = '';
   let playerTwoCard = '';
   [playerOne, playerTwo].map(player => player.addEventListener('click', function (c) {
      if (c.target.name === undefined) {
         return '';
      }
      player === playerOne ?
         playerOneCard = showCard(playerOneCard, result[0], c) :
         playerTwoCard = showCard(playerTwoCard, result[2], c);
      if (result[0].textContent !== '' && result[2].textContent !== '') {
         Number(playerOneCard.name) > Number(playerTwoCard.name) ?
            createBorder(playerOneCard, playerTwoCard) :
            createBorder(playerTwoCard, playerOneCard);
         saveHistory();
         defaultValues();
      }
   }))

   function createBorder(card1, card2) {
      card1.style.border = "2px solid green";
      card2.style.border = "2px solid red";
   }

   function showCard(player, span, c) {
      c.target.src = "images/whiteCard.jpg";
      span.textContent = c.target.name;
      player = c.target;
      return player;
   }

   function defaultValues() {
      result[0].textContent = '';
      result[2].textContent = '';
      playerOneCard = '';
      playerTwoCard = '';
   }

   function saveHistory() {
      history.textContent += `[${playerOneCard.name} vs ${playerTwoCard.name}] `;
   }
}
// //