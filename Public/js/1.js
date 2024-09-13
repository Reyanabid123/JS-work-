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
var a = Number(prompt("ایک نمبر لکھیں"));
var b = Number(prompt("دوسرا نمبر لکھیں"));

// Compare numbers
var result;
if (a === b) {
  result = "a اور b برابر ہیں";
} else {
  result = "a اور b برابر نہیں ہیں";
}

// Get current date and time for unique key
var now = new Date();
var timestamp = now.toISOString(); // Generates a unique timestamp
var key = `result_${timestamp}`;

// Store the result in localStorage with the unique key
localStorage.setItem(key, result);

// Retrieve and display all stored results on the page
var resultsContainer = document.getElementById('results');
resultsContainer.innerHTML = ''; // Clear the container

// Iterate over all items in localStorage
for (var i = 0; i < localStorage.length; i++) {
  var storedKey = localStorage.key(i); // Get key
  var storedResult = localStorage.getItem(storedKey); // Get value
  resultsContainer.innerHTML += `<p><strong>${storedKey}:</strong> ${storedResult}</p>`; // Display result
}
