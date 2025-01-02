const searchBar = document.querySelector('#ask');
const press = document.querySelector('#press');
const answer = document.querySelector('#display');

const library = [];

const books = [
    {
        title: 'The Revenant',
        author: 'Bradd Peterson',
        pages: 383,
        read: 'Yes'
    },

    {
        title: 'Red October',
        author: 'Marie Clawson',
        pages: 309,
        read: 'Yes'
    },

    {
        title: 'Little Nightmares',
        author: 'Adora Mellis',
        pages: 501,
        read: 'No'
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// function toLibrary() {
//     let unit = searchBar.value.toLowerCase();
//     for (let i = 0; i < books.length; i++) {
//         if (unit === books[i].title.toLowerCase() ||
//             unit === books[i].author.toLowerCase() ||
//             unit === books[i].read.toLowerCase()) {
//                 console.log(`${books[i].title} by ${books[i].author} has ${books[i].pages} pages and it matches prompt`);
//         }
//     }
// };

function toLibrary() {
    let unit = searchBar.value.toLowerCase();
    for (let i = 0; i < books.length; i++) {
        if (unit === books[i].title.toLowerCase() ||
            unit === books[i].author.toLowerCase() ||
            unit === books[i].read.toLowerCase()) {
                answer.innerHTML += `${books[i].title} by ${books[i].author} has ${books[i].pages} pages and it matches prompt.<br>`;
        }
    }
};


press.addEventListener('click', toLibrary);
 
// function addToLibrary() {
//     if (searchBar.value.toLowerCase() === title.toLowerCase() || 
//         searchBar.value.toLowerCase() === author.toLowerCase() ||
//         searchBar.value.toLowerCase() === read.toLowerCase()) {

//     }
// }
