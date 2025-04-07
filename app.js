const books = ['The Shining', 'Pride and Prejudice', 'Human Acts', 'The Idiot'];
books[1] = 'The Vegetarian';
console.log(books[1])
for (let idx = 0; idx < books.length; idx++) {
    console.log(books[idx]);
  }

  console.log(books.at(1));

  function logBooks(item) {
    console.log(`Book is ${item}`);
  }
  books.forEach(function (item) {
    console.log(`book is ${item}`);
  })

//start lke cutting bread if I want to cute Pride and Prejudice book
  
  const library = books.slice(1,2); 
  console.log(library);
  console.log(books);