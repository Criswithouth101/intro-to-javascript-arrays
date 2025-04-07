/*
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

Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.
Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza','cheeseburger');

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/



console.log('Exercise 3 result:', foods);

