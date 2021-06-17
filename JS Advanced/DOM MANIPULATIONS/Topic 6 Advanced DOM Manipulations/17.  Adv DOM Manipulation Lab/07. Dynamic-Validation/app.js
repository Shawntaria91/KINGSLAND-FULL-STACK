function validate() {
  let regex = /^([^A-Z]+)@([a-z]+)(\.[a-z]{2,4})$/m;
  let inputElement = document.querySelector('#email');

  inputElement.addEventListener('change', checkEmail);
  function checkEmail(event) {
    if (regex.test(event.target.value)) {
        event.target.removeAttribute('class');
        return;
    }
    event.target.className = 'error';
  }
}

