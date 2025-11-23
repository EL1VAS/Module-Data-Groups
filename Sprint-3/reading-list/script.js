// for the tests, do not modify this array of books
const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        bookCoverImage:
            "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        alreadyRead: true,
        bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
    },
];

const readingList = document.getElementById("reading-list");
function createBookBox(books) {
    for (let i = 0; i < books.length; i++) {
        const book = books[i]; // Checks each book in the array
        const li = document.createElement("li"); // Creates an element li
        if (book.alreadyRead === true) {
            li.classList.add("green"); // Adding class to element li
        } else {
            li.classList.add("red");
        }
        const container = document.createElement("div"); // Created a div element for all info of our book
        container.className = "book-container"; // Adds div a class for css to use
        const textDiv = document.createElement("div"); // Created a div for all text elements
        textDiv.className = "book-text"; // Gave it a class for css styling
        const imgDiv = document.createElement("div"); // Created another div just for the image
        imgDiv.className = "book-image"; // Added class for css
        const titleAuthor = document.createElement("h2"); // Created element for our title and author
        titleAuthor.innerHTML =
            book.title + "<br><span class='by-text'> by </span>" + book.author; // Gave the element a text content of the title & author added a by element in beetween.
        const bookImage = document.createElement("img"); // Created an img element for just our book cover photo
        bookImage.src = book.bookCoverImage; // Matched it with our book cover image

        textDiv.appendChild(titleAuthor); // Inserted in our book-text container the title and author
        imgDiv.appendChild(bookImage); // Inserted in our imgDiv container the image

        container.appendChild(textDiv); // Inserted the book-text container into our main container
        container.appendChild(imgDiv); // Inserted the book-image container into our main container

        li.appendChild(container); // Inserted the main container into our li element

        readingList.appendChild(li); // Added the li element into our readingList
    }
}

createBookBox(books);
