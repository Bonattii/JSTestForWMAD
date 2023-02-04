/*

  1 - What's ES6 ?
    A.: Refers to the version 6 of the ECMAScript. It's the version that was
        release after the ES5 on 2011. It is considered a major enhancement to
        JavaScript, and adds many features with the purpose of making large-scale
        software development easier. It is also known as the newer version of JS.

*/

/*

  2 - Name 3 examples of ES6 features which you learnt.
    A.: The let and const keywords to declare variables;
        Arrow functions;
        Promises.

*/

/*

  3 - What is the difference between let and const?
    A.: Const is used to a identifier that won't be reassigned.
        Let is used to variables that may be reassigned, and another thing is that
        the variable will be used only in the block that it's defined in.

*/

/*

  4 - How do you access object values? Give 3 examples.
    A.: We can access objects values using the Dot property accessor, the Square
        brackets property accessor and using the Object destructuring.

        expression.identifier             => Dot property accessor
        expression[expression]            => Square brackets property accessor
        const { identifier } = expression => Object destructuring

*/

/*

  5 - What does setInterval and setTimeout do?
    A.: setTimeout allows us to run a function once after the interval of time
        setInterval allows us to run a funciton repeatedly, starting after the
        interval of time, and then repeating after this time endless

  5.1 - What will be the outuput of the following?

  5.1.a

    for (var i = 0 ; i < 5 ; i++) {
      setTimeout(() => {
        console.log(i);
      }, 0);
    }

    A.: Output => 5
                  5
                  5
                  5
                  5

  5.1.b

    for (let i = 0 ; i < 5 ; i++) {
      setTimeout(() => {
        console.log(i);
      }, 0);
    }

    A.: Output => 0
                  1
                  2
                  3
                  4

*/

/*

  6 - What are promises?
    A.: Firstly is good to know that a promise is a good way to handle
        asynchronous operations. It is used to find out if the operation was
        successfully completed or not.

        Promise may have one of three states: Pending, Fulfilled and Rejected.

*/

/*

  7 - Convert this async function to async/await

    getQuote().then((quote) => {
      console.log(quote);
    }).catch(function(err) {
      console.log(err);
    });

*/

// Answer to question 7

async function getQuoteAndLog() {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch (err) {
    console.log(err);
  }
}

/*

  8 - Convert this code to arrow function.

    function greeting(firstname, lastname) {
      return `Hello ${firstname} ${lastname}`;
    }

*/

// Answer to question 8

const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

/*

  9 - Explain what a callback function is.
    A.: A callback function basically is a function that is passed as an argument
        to another function and it is executed after an event or operation has
        been completed. Often used on asynchronous operations.

*/

/*

  10 - What does the function pop and push do to an array? And what do they return?
    A.: The pop function removes the last element of an array and returns this
        element that has been removed.
        The push function adds an element on as the last element of an array and
        return the total number of elements on the array after the new element
        has been added.

*/

/*

  11 - What is the expected answer to this code?

    let string = "";
    let object = { a: 1, b: 2, c: 3 };

    for (let key in object) {
      string += object[key];
    }

    console.log(string);

      A.: Output => 123

*/

/*

  12 -  What data type would Array.map() and Array.filter() return?
        Additionally what will be the output of this?

        let array = [1, 2, 3, 0, 4, 10, 0];
        let output = array.filter((item) => item);

          A.:   Map returns an array, that is an array of pieces of information
                from the original array. But in the callback it returns the data
                type that we wish to be part of the new array.

                Filter returns an array, that is a subset of the original array
                based on custom a criteria. And in the callback function it return
                a boolean value, that is the determination wheter or not each item
                will be included in the new array.

          A.1.: Output => [1, 2, 3, 4, 10]
*/

/*

  13 - What data type would Array.includes() and Array.some() return?
    A.: Includes return a boolean, true with the array have the element or false
        if the array don't have the element.

        Some return a boolean too, true with it finds in the array an element for
        which the provided function returns true, otherwise it returns false.

*/

/*

  14 - Write down the 4 main methods of rest api.
    A.: The four main methods of rest api are GET, POST, PUT and DELETE.

*/

/*

  15 - What is the difference between JSON and a JavaScript Object?
    A.: JSON cannot contain functions, the key should be in double quotes, JSON
        can be created and used by other programming languages.

        In JavaScript Object key can be without double quotes, can contain
        functions, can only be used in JavaScript.

*/

/*

  16 -  Use this endpoint and fetch the output using FETCH API and print them on
        the console. Use both .then and catch and try and catch block as well.

        https://www.boredapi.com/api/activity

        The above API returns what to do when you are bored.

*/

// .then and .catch

fetch('https://www.boredapi.com/api/activity')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));

// try and catch

async function fetchBoredApi() {
  try {
    const response = await fetch('https://www.boredapi.com/api/activity');

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
