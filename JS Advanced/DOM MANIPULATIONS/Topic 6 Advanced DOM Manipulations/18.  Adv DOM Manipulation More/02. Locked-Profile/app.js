// 2. Locked Profile
// In this problem, you should create a JS functionality which shows and hides the additional information about users.
// When one of the [Show more] buttons is clicked, the hidden information inside the div should
// be shown, only if the profile is not locked! If the current profile is locked, nothing should
// happen.
// If the hidden information is displayed and we lock the profile again, the [Hide it] button
// should not be working! Otherwise, when the profile is unlocked and we click on the [Hide it]
// button, the new fields must hide again
function lockedProfile() {
    const buttons = [...document.querySelectorAll('button')];
    buttons.map(btn => btn.addEventListener('click', showHide));

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.querySelectorAll('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}
