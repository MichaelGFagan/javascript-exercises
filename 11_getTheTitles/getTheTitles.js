const getTheTitles = function(books) {
    book_titles = []
    for (const book of books) {
        let book_title = book['title']
        book_titles.push(book_title)
    }
    return book_titles
};

// Do not edit below this line
module.exports = getTheTitles;
