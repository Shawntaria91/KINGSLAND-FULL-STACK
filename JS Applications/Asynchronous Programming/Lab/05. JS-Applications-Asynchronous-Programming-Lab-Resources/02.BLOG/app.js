function attachEvents() {
    console.log('TODO...');

    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');
    let postBody = document.getElementById('post-body');
    let postId = document.getElementsByTagName('option');
    let postSelect = document.getElementById('posts');

    btnLoadPosts.addEventListener('click', async function() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://blog-apps-c12bf.firebaseio.com/posts.json", requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result); 

                for (const key in result) {
                    let option = document.createElement('option');

                    option.value = key;
                    option.textContent = result[key].title;
                    postSelect.appendChild(option);
                } 
                
            
            } ) 
            .catch(error => console.log('error', error));
          
        });
    };

    attachEvents();