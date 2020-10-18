// 1. Chat Room
// Write a function to create the functionality of a chat room. 
// Note: Do not forget to add event listener to the send button!
// The new div element with class message my-message should contain the current message that is about to be
// sent.
// The current div should be appended to the div with an id="chat_messages".
// The input should be cleared on each click of the send button. 

function solve() {
   let sendButton = document.querySelector('button#send');
   let sendTextarea = document.querySelector('textarea#chat_input');
   let chatMsgs = document.querySelector('div#chat_messages');
   sendButton.addEventListener('click', (ev) => {
       let msg = sendTextarea.value;
       let myMsg = document.createElement('div');
       myMsg.classList.add('my-message', 'message');
       myMsg.textContent = msg;
       chatMsgs.appendChild(myMsg);
       sendTextarea.value = '';
   });
}


