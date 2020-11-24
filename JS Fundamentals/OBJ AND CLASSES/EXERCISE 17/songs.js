// Define a class Song, which holds the following information about songs: typeList, name and time.

// You will receive the input as an array.

// The first element n will be the number of songs. Next n elements will be the songs data in the following format:

// "{typeList}_{name}_{time}", and the last element will be Type List / "all".

// Print only the names of the songs which are from that Type List / All songs.



function  main(arr) {

    class Song {

        constructor(typeList, name, time) {

            this.typeList = typeList;
            this.name = name;
            this.time = time;

        }

    } 



    let songs = [];
    let numOfSongs = arr.shift();
    let genre = arr.pop();



    for (let i = 0; i < numOfSongs; i++) { 
    //iterating through input array

        let [typeList, name, time] = arr[i].split('_');

        let song = new Song(typeList, name, time);
        songs.push(song);

    }

    if (genre === 'all') {
    
        songs.forEach((i) => console.log(i.name));
    
    } else {
    
        let filterForAllGenres = songs.filter((i) => i.typeList === genre);
        filterForAllGenres.forEach((i) => console.log(i.name));
    
    }

}
main([3,'favourite_DownTown_3:14','favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
