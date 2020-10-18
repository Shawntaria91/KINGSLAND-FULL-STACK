// In this problem, you should create a JS functionality that 
// keeps track of how many times a specific site has been visited.
// For instance,
// if we click twice on the Kingsland link and once on the YouTube link, the expected result must be:

function solve() {
  let websites = document.querySelectorAll('.link-1');
  Array.from(websites).forEach(website => {
      website.addEventListener(`click`, (ev) => {
          let paragraph = website.querySelector('p');
          let counter = paragraph.textContent.split(` `)[1];
          counter++;
          paragraph.innerText = `visited ${counter} times`;
      });
  });
}