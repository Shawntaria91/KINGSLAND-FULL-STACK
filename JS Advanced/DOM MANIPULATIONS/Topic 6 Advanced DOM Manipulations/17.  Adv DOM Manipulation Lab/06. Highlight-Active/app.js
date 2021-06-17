function focus() {
    let sections = document.querySelectorAll('input');
    Array.from(sections).map(section => {
    section.addEventListener('focus', (event) => {
            console.log('focused!');
            section.parentNode.className = 'focused';
            console.log('node name is ' + section.parentNode.nodeName);
        });
        section.addEventListener('blur', (event) => {
            console.log('Not focused!');
            section.parentNode.className = '';
        });
    });
}