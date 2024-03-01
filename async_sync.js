// synchronous code
// each line will run in order
console.log("1");
console.log("2");
console.log("3");

// asynchronous code
// this is not executed line by line
console.log("a");

// Callback
setTimeout(() => {
  console.log("b");
}, 2000);
console.log("c");

// 1. callbacks
// 2. promises
// 3. async await

// States of promises
// pending
// fullfilled
// rejected

const url = "http://localhost:3001/";
console.log("loading...");
fetch(url).finally((result) => {
  console.log("completed");
  console.log("After completeing");
});
