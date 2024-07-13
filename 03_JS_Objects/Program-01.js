var books = [];
for (var i = 1; i <= 100; i++) {
    books.push({ title: "Book Title " + i, author: "Author " + i });
}

for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
}
