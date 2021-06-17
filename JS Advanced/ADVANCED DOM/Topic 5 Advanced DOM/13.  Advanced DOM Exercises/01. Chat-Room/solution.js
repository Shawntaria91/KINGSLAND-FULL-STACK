// Note: Do not forget to add event listener to the send button!
// The new div element with class message my-message should contain the current message that is about to be
// send.
// Append current div to div id ="chat_messages".
// The input should be cleared on each click of the send button. 

function solve() {
    let sendButton = document.querySelector('#send');
    let chatInput = document.querySelector('#chat_input');
    let chatThread = document.querySelector('#chat_messages');

    sendButton.addEventListener('click', sendMsg);
    chatInput.addEventListener('keyup', enterFunc);

    function sendMsg(){
        let message = chatInput.value;
        let myMessage = document.createElement('div');
        myMessage.classList.add('message', 'my-message' );
        myMessage.textContent = message;
        chatThread.appendChild(myMessage);
        chatInput.value = '';
    }
    function enterFunc(event){
        event.key == "Enter" ? sendMsg() : 0;
    }
}



