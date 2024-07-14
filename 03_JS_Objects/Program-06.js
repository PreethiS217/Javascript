var bookName;
var book;

function createBook(name) {
    return {
        title: name
    };
}

bookName = "The Adventures of Tom Sawyer";
book = createBook(bookName);
console.log(book);

bookName = "Moby Dick";
book = createBook(bookName);
console.log(book);