const prompt = require("prompt-sync")();
const dayjs = require("dayjs");
const fs = require("fs");
const { get } = require("http");

const books = [];

const book = {
    name:"",
    interest:"",
    price: 0,
    added: ""
};

// const print = (book) => {
//     console.log(`Nama Buku: ${book.name} my fav`);
// }
// print(book);

// book.name=prompt("Masukkan Judul : ");
// book.interest=prompt("Masukkan interest : ");
// book.price=prompt("Masukkan Harga : ");
// book.added=dayjs().format("DD/MM/YYYY");



// console.log(`Judul: ${book.name}`);
// console.log(`Interest: ${book.interest}`);
// console.log(`Harga: ${book.price}`);
// console.log(`Tanggal: ${book.added}`);

// const date = dayjs().format("DD/MM/YYYY");
// console.log(date);

const show = () => {
    console.clear();

    for (const book of books){
        console.log(`${book.title} (${book.interest})`);
        console.log(`Rp${book.price}`);
        console.log(book.added+ "\n");
    }

    prompt("Press enter to continue..");
};

const add = () => {
    console.clear();
    title=prompt("Masukkan Judul : ");
    interest=prompt("Masukkan interest : ");
    price=prompt("Masukkan Harga : ");
    added=dayjs().format("DD/MM/YYYY");

    books.push({
        title,
        interest,
        price,
        added,
    })
};

const getBooks = () => {
    const data = fs.readFileSync("fav.json");
    const books = JSON.parse(data);

    return books;
};
 
const save = () => {
    fs.writeFileSync("fav.json", JSON.stringify(books));
}

books = getBooks();

let running= true;

while (running){
    console.clear();
    console.log("Fav-Books-Library");
    console.log("1. Show books");
    console.log("2. Add book");
    console.log("3. Save & Exit");
    const choice = prompt("What do you want to do?\n");

    if (choice==1){
        show();
    } else if (choice==2){
        add();
    } else if (choice==3){
        console.log("Exit");
        save();
        running=false;
    } else {
        console.log("Menu tidak ada!");
    }
}

