function createArticle() {

	let title = document.createElement('h3');// create <h3> for title
	title.innerText = document.getElementById('createTitle').value;// set the value of 'createTitle' box to whatever is in 'createTitle'
	let content = document.createElement('p');// create <p> for content
	content.innerText = document.getElementById('createContent').value;// text in paragraph = the value of 'createContent' box
	let article = document.createElement('article');// create <article> for article
	article.appendChild(title);// append title to <article>
	article.appendChild(content);// append content to <article>
		if(title.innerText != "" && content.innerText != ""){//if the title box and paragraph box are not empty,
			document.getElementById("articles").appendChild(article);// append article to <articles>
		}
		document.getElementById('createTitle').value = "";//clear title box
		document.getElementById('createContent').value = "";//clear content box
}

