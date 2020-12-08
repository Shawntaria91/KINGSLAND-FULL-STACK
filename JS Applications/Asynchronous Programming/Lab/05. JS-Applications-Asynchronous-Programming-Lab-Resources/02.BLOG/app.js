// function attachEvents() {
//     console.log('TODO...');

//     let btnLoadPosts = document.getElementById('btnLoadPosts');
//     let btnViewPost = document.getElementById('btnViewPost');
//     let postBody = document.getElementById('post-body');
//     let postId = document.getElementsByTagName('option');
//     let postSelect = document.getElementById('posts');

//     btnLoadPosts.addEventListener('click', async function() {
//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//           };
          
//           fetch("https://blog-apps-c12bf.firebaseio.com/posts.json", requestOptions)
//             .then(response => response.json())
//             .then(result => {console.log(result); 

//                 for (const key in result) {
//                     let option = document.createElement('option');

//                     option.value = key;
//                     option.textContent = result[key].title;
//                     postSelect.appendChild(option);
//                 } 
                
            
//             } ) 
//             .catch(error => console.log('error', error));
          
//         });

//     btnViewPost.addEventListener('click' async function() {
//         var requestView = {
//             method: 'GET',
//             redirect: 'follow'
//         };

//         //Object format: id, postId, text
//         fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${postSelect}.json`, requestView)
//             .then(response => response.json())
//             .then(result => {console.log(result); 

//                 for (const key in result) {
//                     let option = document.createElement('option');

//                     option.value = key;
//                     option.textContent = result[key].title;
//                     postSelect.appendChild(option);
//     }
//     };

//     attachEvents();

function attachEvents() {
    let repoToGet = 'https://blog-apps-c12bf.firebaseio.com/posts.json';
    let loadButton = document.getElementById('btnLoadPosts')
    let post = document.getElementById('posts');
    let view = document.getElementById('btnViewPost');
    var requestOptions = {  method: 'GET',  redirect: 'follow'};
    loadButton.addEventListener('click', function() {
        fetch("https://blog-apps-c12bf.firebaseio.com/posts.json", requestOptions)  
        .then(response => response.text())  
        .then(result => {
            let resp = JSON.parse(result);
            for(let key in resp) {
                let option = document.createElement('option');
                let title = resp[key].title;
                option.value = key;
                option.innerText = title;
                post.appendChild(option);
            }
            view.addEventListener('click', function() {
                let id = document.getElementById('posts').value;
                let url = `https://blog-apps-c12bf.firebaseio.com/posts/${id}.json`
                fetch(url)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    let title = document.getElementById("post-title");
                    title.innerText = result.title;
                    let listItem = document.getElementById('post-body');
                    listItem.innerText = result.body;
                    fetch(`https://blog-apps-c12bf.firebaseio.com/comments.json`)
                    .then(response => response.json())
                    .then(result => {
                        let comments = document.getElementById('post-comments');
                       console.log(result);
                        for(let key in result) {
                            let listItem = document.createElement('li');
                            listItem.innerText = result[key].text;
                            comments.appendChild(listItem);
                        }
                    })
                })
                .catch(error => console.log('error', error));
            })
        })  
        .catch(error => console.log('error', error));
    })
}
attachEvents();