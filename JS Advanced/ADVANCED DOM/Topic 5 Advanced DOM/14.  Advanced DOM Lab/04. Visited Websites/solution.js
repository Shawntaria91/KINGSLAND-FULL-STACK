function solve() {
  let webSites = document.querySelectorAll('.link-1');// returns an HTML collection of all elements with class = 'link-1'
  //turn the collection into a proper array with Array.from, and .map to add the event listener to each element in the array (site = each website link in the array)
  Array.from(webSites).map(site => {
      site.addEventListener(`click`, (event) => {
          let paragraph = site.querySelector('p');// define 'paragraph' to refer to the first <p>tag in each 'site' (class="link-1")
          let counter = paragraph.textContent.split(` `)[1];//the text content of <p> is: 'visited 1 times' (for each 'site'). 
          //splitting it would return the array ['visited', '1', 'times']
          //counter is defined as index[1] (second element in the array) which is the number 
          counter++;// increment counter each time event happens
          paragraph.innerText = `visited ${counter} times`;// set the inner text of the paragraph with current counter value
      });
  });
}


