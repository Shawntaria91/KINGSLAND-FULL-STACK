// In this problem, you should create a JS functionality which 
// creates articles and appends them into some article section.
// The programs in this language are called scripts. 
// They can be written right in the HTML and executed automatically as the page loads.
// Scripts are provided and executed as a plain text. 
// They don't need a special preparation or a compilation to run.
// In this aspect, JavaScript is very different from another language called Java. 

// Constraints: Title value from the title input should be a heading 3 element <h3>
//  Content text from the textarea element should be a paragraph <p>
//  Both new created elements (h3 and p) should be appended to a new article element <article>
//  The current article element should be appended to the section which has an id articles (#articles) 
// You should create new article element only if title and content are not e

function createArticle() {
    let title = document.createElement('h3');
    title.innerText = document.getElementById('createTitle').value;

    let content = document.createElement('p');
    content.innerText = document.getElementById('createContent').value;

    let article = document.createElement('article');
    article.appendChild(title);
    article.appendChild(content);
    
    if (title.innerText != "" && content.innerText != "") {
        document.getElementById("articles").appendChild(article);
    }
    document.getElementById('createTitle').value = "";
    document.getElementById('createContent').value = "";
}