// Write a function that stores information about movies inside an array. 
// The movie's object info must be name, director and date. 
// You can receive several types of input:

// ● "addMovie {movie name}" – add the movie

// ● "{movie name} directedBy {director}" – check if the movie exists and then add the director

// ● "{movie name} onDate {date}" – check if the movie exists and then add the date

// At the end print all the movies that have all the info 
// (if the movie has no director, name or date, don’t print it) in JSON format.



function main(strArr) {

    let movieList = [],
        itemIdx = 0,
        directorName = '';

    for (let i = 0; i < strArr.length; i++) {

        //make 2 arrays
        let tempArr = strArr[i].split(' ');
        
        if (tempArr.includes('addMovie')) {

            let movie = {
                name: tempArr[1]
            };

            //add object to to movie list 
            movieList.push(movie);
        } else if (tempArr.includes('directedBy')) {

            itemIdx = getIndexArr(tempArr[0], movieList);
            
            if (itemIdx >= 0) {

                // check for multiple dir. 
                for (let i = 2; i < tempArr.length; i++) {
                    
                    directorName += `${tempArr[i]} `;
                }

            //add director at movie idx. 
            movieList[itemIdx].director =
            directorName.trim();
            directorName = ' ';
            
            
            }
        } else if (tempArr.includes('onDate')) {

            itemIdx = getIndexArr(tempArr[0], movieList);
            
            if (itemIdx >= 0) {

                movieList[itemIdx].date = tempArr[2];
            }
        }
    }

    //loop through movie list
    for (let j = 0; j < movieList.length; j++) {

        
        if (movieList[j].name != undefined && 
            movieList[j].director != undefined && 
            movieList[j].date != undefined) {

            
            console.log(JSON.stringify(movieList[j]));
        }
    }

}

function getIndexArr(searchNum, numArr) {

    //var index = 0;

    for (let i = 0; i < numArr.length; i++) {

        if (searchNum == numArr[i].name) {
            
            return i;
        }
    }

return -1;

}
main(['addMovie FastAndFurious',
    'addMovie Godfather', 
    'Inception directedBy Christopher Nolan', 
    'Godfather directedBy Francis Ford Coppola', 
    'Godfather onDate 29.07.2018', 
    'FastAndFurious onDate 30.07.2018', 
    'Batman onDate 01.08.2018', 
    'FastAndFurious directedBy Rob Cohen']);