//* JAVASCRIPT کا مکمل گائیڈ - BY REYANABID123
//* BETTER COMMENTS استعمال کریں بہتر نتائج کے لیے

//* 1. VARIABLES (متغیرات)
//? JavaScript میں متغیرات کو ڈیٹا اسٹور کرنے کے لیے استعمال کیا جاتا ہے
//* تین طریقے ہیں: var، let، const

//* var: اس کا استعمال globally یا function کے اندر ہوتا ہے، اور یہ window object کا حصہ بن جاتا ہے۔
var age = 25; //? اس کو پوری function میں استعمال کیا جا سکتا ہے

//* let: اس کا استعمال block-scoped ہوتا ہے، یعنی یہ صرف اسی block کے اندر کام کرتا ہے۔
let name = "Reyan"; //? block کے اندر استعمال ہوتا ہے

//* const: اس کو constant ویلیو کے لیے استعمال کرتے ہیں جو کبھی تبدیل نہیں ہوتی۔
const PI = 3.14; //? اس کو بعد میں تبدیل نہیں کیا جا سکتا

//* 2. DATA TYPES (ڈیٹا کی اقسام)
//* JavaScript میں مختلف قسم کا ڈیٹا ہوتا ہے:
//? String (متن): جیسے "Hello, World!"
//? Number (نمبر): جیسے 123، 3.14
//? Boolean (س یا جھوٹ): جیسے true یا false
//? Object (آبجیکٹ): جیسے {name: "Reyan", age: 13}
//? Array (فہرست): جیسے [1, 2, 3, 4]

let person = {
  name: "Reyan", //* ایک object جس میں دو properties ہیں
  age: 13,
};

let numbers = [1, 2, 3, 4]; //? ایک array جس میں چار نمبر ہیں

//* 3. OPERATORS (آپریٹرز)
//* JavaScript میں مختلف آپریٹرز ہیں:
//? Arithmetic Operators (ریاضیاتی): +, -, *, /, %
//? Comparison Operators (موازنہ): ==, ===, !=, !==, >, <, >=, <=
//? Logical Operators (منطقی): &&, ||, !

let x = 5;
let y = 10;

//? Arithmetic Example
let sum = x + y; //* جمع کرنا
let product = x * y; //* ضرب دینا

//? Comparison Example
let isEqual = x == y; //* برابر ہونے کا موازنہ (true یا false)

//? Logical Example
let condition = x > 5 && y < 15; //* اور (AND) آپریٹر کا استعمال

//* 4. CONDITIONALS (شرائط)
//* JavaScript میں ہم if-else statements کا استعمال کرتے ہیں فیصلے لینے کے لیے۔

let number = 10;

if (number > 0) {
  console.log("نمبر مثبت ہے"); //* اگر نمبر 0 سے بڑا ہو
} else if (number < 0) {
  console.log("نمبر منفی ہے"); //* اگر نمبر 0 سے کم ہو
} else {
  console.log("نمبر صفر ہے"); //* ورنہ نمبر صفر ہے
}

//* 5. LOOPS (لُوپس)
//* جب ہمیں کوڈ کو بار بار چلانے کی ضرورت ہوتی ہے تو ہم loops استعمال کرتے ہیں۔

//? FOR LOOP
for (let i = 0; i < 5; i++) {
  console.log(i); //* 0 سے 4 تک کے نمبر کو کنسول میں دکھاتا ہے
}


//? WHILE LOOP
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//* 6. FUNCTIONS (فنکشنز)
//* فنکشن ایک block of code ہوتا ہے جو مخصوص کام انجام دیتا ہے۔

function greet(name) {
  console.log(`Hello, ${name}!`); //* نام کے ساتھ پیغام دے گا
}

greet("Reyan"); //? فنکشن کو call کر کے نتیجہ حاصل کریں

//* 7. EVENTS (ایونٹس)
//* JavaScript ایونٹس کو سننے کے لیے استعمال ہوتا ہے جیسے بٹن پر کلک کرنا۔

//? HTML میں:
// <button id="myButton">Click me!</button>

//? JavaScript میں:
let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("بٹن کو کلک کیا گیا!");
});

//* 8. OBJECTS (آبجیکٹس)
//* JavaScript میں object ایک ایسا ڈیٹا structure ہے جس میں properties اور methods ہوتے ہیں۔

let car = {
  make: "Toyota", //* properties
  model: "Corolla",
  year: 2020,
  start: function () {
    //* method
    console.log("کار سٹارٹ ہو گئی!");
  },
};

car.start(); //* method call کرنا

//* 9. ARRAYS (ارے)
//* Array ایک ایسی list ہے جس میں آپ multiple items رکھ سکتے ہیں۔

let fruits = ["Apple", "Banana", "Mango"];

//? Array کی length معلوم کرنا
console.log(fruits.length); //? Output: 3

//? Array میں item add کرنا
fruits.push("Orange");

//? Array سے item نکالنا
fruits.pop();

//* 10. DOM (DOCUMENT OBJECT MODEL)
//* DOM ایک ایسا structure ہے جو HTML کو JavaScript کے ساتھ interact کرنے دیتا ہے۔

//? HTML میں:
// <h1 id="title">Welcome</h1>

//? JavaScript میں:
let title = document.getElementById("title");
title.innerHTML = "Welcome, Reyan!"; //* HTML کو JavaScript سے تبدیل کرنا

//* 11. LOCAL STORAGE (لوکل سٹوریج)
//* LocalStorage ایک ایسی جگہ ہے جہاں آپ browser میں ڈیٹا سٹور کر سکتے ہیں۔

localStorage.setItem("username", "Reyan"); //* ڈیٹا محفوظ کریں
let username = localStorage.getItem("username"); //* ڈیٹا لائیں
console.log(username); //? Output: "Reyan"

//* 12. EVENTS LOOP (ایونٹ لوپ)
//* JavaScript میں ایونٹ لوپ وہ میکانزم ہے جو asynchronous code کو handle کرتا ہے۔

console.log("پہلا میسج");
setTimeout(() => {
  console.log("یہ میسج 2 سیکنڈ کے بعد آئے گا");
}, 2000);
console.log("تیسرا میسج"); //* Output: پہلا، تیسرا، پھر دوسرا

//* 13. CALLBACKS اور PROMISES (کال بیک اور پرومسز)
//* Callbacks اور Promises کو asynchronous کاموں کو ہینڈل کرنے کے لیے استعمال کرتے ہیں۔

//? Example of a callback function
function fetchData(callback) {
  setTimeout(() => {
    callback("ڈیٹا موصول ہو گیا!");
  }, 1000);
}

fetchData(function (message) {
  console.log(message); //* 1 سیکنڈ کے بعد پیغام دکھائے گا
});

//? Example of a Promise
let myPromise = new Promise(function (resolve, reject) {
  let success = true; //? کچھ شرط
  if (success) {
    resolve("پرومس مکمل ہوا!");
  } else {
    reject("پرومس ناکام ہو گیا!");
  }
});

myPromise
  .then(function (result) {
    console.log(result); //* اگر resolve ہو تو نتیجہ دکھائے گا
  })
  .catch(function (error) {
    console.log(error); //* اگر reject ہو تو نتیجہ دکھائے گا
  });
