//* NOTE OF JAVASCICPT BY REAYNABID123
//* USE Better comment extenstion for bettter results in vscode

// var a = 0;
// var b = 0;
// var a = (f = prompt("write a number"));
// var b = (fb = prompt("write a number"));
// if (a == b) {
//   var result = "a and b are equal";
//   console.log(r);
// } else {
//   var result = "a and b are not equal";
//   console.log(r);
// }
// var r = localStorage.getItem(result, "result");
// console.log(`RESULT : ${r}`);

// var a = prompt("write a number");
// var b = prompt("write a number");

// var result;
// if (a == b) {
//   result = "a and b are equal";
// } else {
//   result = "a and b are not equal";
// }

// localStorage.setItem("result", result);

// console.log(`RESULT : ${localStorage.getItem("result")}`);
// Prompt user for numbers
// var a = Number(prompt("Write a number"));
// var b = Number(prompt("Write a number"));

// // Compare numbers
// if (a === b) {
//   var result = "a and b are equal";
// } else {
//   var result = "a and b are not equal";
// }

// // Log the result to the console
// console.log(result);

// // Store the result in localStorage
// localStorage.setItem("result", result);

// // Retrieve and log the stored result
// var storedResult = localStorage.getItem("result");
// console.log(`RESULT: ${storedResult}`);

// یوزر سے نمبر مانگیں
// var a = Number(prompt("ایک نمبر لکھیں"));
// var b = Number(prompt("دوسرا نمبر لکھیں"));

// // نمبر کو موازنہ کریں
// if (a === b) {
//   var result = "a اور b برابر ہیں";
// } else {
//   var result = "a اور b برابر نہیں ہیں";
// }

// // نتیجہ کو کنسول پر دکھائیں
// console.log(result);

// // نتیجہ کو localStorage میں محفوظ کریں
// localStorage.setItem("result", result);

// // محفوظ شدہ نتیجہ حاصل کریں اور کنسول پر دکھائیں
// var storedResult = localStorage.getItem("result");
// console.log(`RESULT: ${storedResult}`);
// Get user input
// var a = Number(prompt("ایک نمبر لکھیں"));
// var b = Number(prompt("دوسرا نمبر لکھیں"));

// // Compare numbers
// var result;
// if (a === b) {
//   result = "a اور b برابر ہیں";
// } else {
//   result = "a اور b برابر نہیں ہیں";
// }

// // Get current date and time for unique key
// var now = new Date();
// var timestamp = now.toISOString(); // Generates a unique timestamp
// var key = `result_${timestamp}`;

// // Store the result in localStorage with the unique key
// localStorage.setItem(key, result);

// // Retrieve and display the stored result
// var storedResult = localStorage.getItem(key);
// console.log(`RESULT (${key}): ${storedResult}`);
// Get user input
// var a = Number(prompt("ایک نمبر لکھیں"));
// var b = Number(prompt("دوسرا نمبر لکھیں"));

// // Compare numbers
// var result;
// if (a === b) {
//   result = "a اور b برابر ہیں";
// } else {
//   result = "a اور b برابر نہیں ہیں";
// }

// // Get current date and time for unique key
// var now = new Date();
// var timestamp = now.toISOString(); // Generates a unique timestamp
// var key = `result_${timestamp}`;

// // Store the result in localStorage with the unique key
// localStorage.setItem(key, result);

// // Retrieve and display all stored results on the page
// var resultsContainer = document.getElementById('results');
// resultsContainer.innerHTML = ''; // Clear the container

// // Iterate over all items in localStorage
// /**
//  * Iterates over the items stored in the localStorage and displays them in the resultsContainer.
//  * @param None
//  * @returns None
//  */
// for (var i = 0; i < localStorage.length; i++) {
//   var storedKey = localStorage.key(i); // Get key
//   var storedResult = localStorage.getItem(storedKey); // Get value
//   resultsContainer.innerHTML += `<p><strong>${storedKey}:</strong> ${storedResult}</p>`; // Display result
// }
// var old hi
// let old hote hi
// you can use var anywaher in funtion
// function cbs(){
//   for(var i = 1; i < 12 ; i++) {
//   console.log(i);

//   }
//   console.log(i);
// }
// cbs()
// you can not  use let anywaher in funtion

// function cbs() {
//   for (let i = 1; i < 12; i++) {
//     console.log(i);
//   }
//   console.log(i); //!NOT WORk
// }
// cbs(); \
//* WHAT IS WINDOW OBJECT
//*The window object is the topmost object of DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of document, the window object is created

//* var add it self ot the window object and let do not add this in window object

//? EXAMPLE :
// var a = 12;

// function myFunction() {
//   a = 10; // This will change the value of a in the global scope (window object)
//   console.log(a); // Outputs: 10
// }

//? exicution conquest function
function abc() {
  var a = 10;
  function def() {
    var b = 10;
  }
}
// ? exicution context is a constainer where the funtion's code 