function main(favoriteBook, books) {
    let currentBook = books.shift();
    while (currentBook !== favoriteBook) {
        console.log(`Invalid book: ${currentBook}`);
        currentBook = books.shift();
    }
    console.log("Book found!");
}
main("Alice in Wonderland", ["Winnie the Pooh","Alice in Wonderland"]);