function loadCommits() {
    // Try it with Fetch API
    // TODO: https://api.github.com/repos/<username>/<repository>/commits
    let username = document.getElementById("username");
    let repo = document.getElementById("repo");
    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    console.log(url);
    let commitsUL = document.getElementById('commits');

    console.dir(commitsUL);

    fetch(url)
    .then(response => {
        if (response.status == 200) {
            response.json();
        } else {
            console.log(response.status);
            console.log(response.statusText);

            let errorLiEl = document.createElement('li');
            errorLiEl.textContent = `Error: ${response.status} (${response.statusText})`;

            commitsUL.appendChild(errorLiEl);

        }

    })
    .then(data => {

        data.forEach((each) =>{
            console.log(each.commit.author.name);
            console.log(each.commit.message);

            let newLiEl = document.createElement('li');
            newLiEl.textContent = `${each.commit.author.name}: ${each.commit.message}`;

            commitsUL.appendChild(newLiEl);

        
        });

    });
}