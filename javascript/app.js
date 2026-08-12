// import { client } from "./confg.js";
// console.log(client);
const supabaseUrl = 'https://kerazyzofdhkkypiwpzw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlcmF6eXpvZmRoa2t5cGl3cHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMjAwMTMsImV4cCI6MjA2ODY5NjAxM30.aCmnptFsLXwrfuTL2FQl5NNAsHijYPnfEKL8_irzqNM'
const client = supabase.createClient(supabaseUrl, supabaseKey)


// let name = prompt("Apna naam batao:");
// // console.log("Hello, " + name + "!");
// // document.write("Hello, " + name + "!")
// alert("Hello, " + name + "!")

//  var numberOfCats = +prompt("How many cats?");
//  var tooManyCats = numberOfCats + 1;
//  console.log(tooManyCats);

// var userInput = +prompt("Enter anything (number or text):");

// console.log("You entered: " + userInput);
// let name = +prompt("Enter your name");
// console.log("Welcome " + name + "!")

//  var question = "Your species?";
//  var defaultAnswer = "human";
// var spec = prompt("Your species?", "human");
//  var spec = prompt(question, defaultAnswer);
//  console.log(spec);

// ------------------------------------------------------------------
// pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
// atm machine

// let pin = prompt("Enter your Pin!");
// let deposite = ""
// let currentBalance = 5000;
// if(pin === "1234"){
//     let userMessage = prompt("1. Deposite \n2. Current Balance \n3. Exit")
//     if(userMessage === "1"){
// let deposite = +prompt("Enter your amount")
// alert(`Your Total Amount is ${deposite + currentBalance}`)
// }else if(userMessage === "2"){
// alert(`your current balance is ${currentBalance}`)
// }else{
//     alert("Now Your are exit")
// }
// }else{
//     alert("enter a valid pin code")
// }

// -----------------------------------------------------------
// leap year find

// let year = +prompt('Enter a Year')
// if(year % 4 === 0){
// if(year % 100 === 0){
// if(year % 400 === 0){
//     alert(`${year} is a leap year`)
// }else{
//     alert(`${year} is not a leap year`)
// }
// }else{
//     alert(`${year} is a leap year`)
// }
// }else{
// alert(`${year} is not a leap year`)
// }

// ---------------------------------------------------

// positive  and negative tasks

// let number = +prompt("Enter Any Number")
// if(number > 0){
//     alert(`${number} is positive number`)
// }else if(number < 0){
//     alert(`${number} is negative number`)
// }
// else{
//     alert(`${number} is your number`)
// }

// ------------------------------------------------------------

// even and odd

// let number = +prompt("Enter Any Number")
// if(isNaN(number)){
//     alert(`enter a valid number`)
// }else if(number % 2 ===0 ){
//     alert(`${number} is even number`)
// }else{
//     alert(`${number} is odd number`)
// }

// ---------------------------------------------------------------------

// Even or Odd Number:

// Ek variable num lo.
// Agr num 2 se divide hone par remainder 0 de to "Even number" print kro.
// Warna "Odd number" print kro.

// let num = +prompt('Enter number');

// if(num % 2 == 0){
//     alert(`${num} is even number`)
// }else if(num % 2 !== 0){
//     alert(`${num} is odd number`)
// }else{
//     alert(`your num is ${num} `)
// }

// -------------------------------------------------------------
// Sir Rizwan Assignments

// 1. Age Group Identifier
// Task:
// User se age input lena hai aur uske basis par uska category (Child, Teenager, Adult, ya Senior Citizen) bataani hai.
// Logic:
// • 0 se 12 saal: Child
// • 13 se 19 saal: Teenager
// • 20 se 59 saal: Adult
// • 60 ya us se zyada: Senior Citizen
// • Agar input invalid ho (negative ya non-numeric value), toh "Invalid Input" show karein.

// let age = +prompt("Enter your Age");
// if(isNaN(age) || age < 0){
// alert("Invalid Input")
// }else{
//     if(age <= 12){
//         alert("Child")
//     }else if( age >= 13 && age <= 19 ){
//         alert("Teenager")
//     }else if(age >= 20 && age <= 59){
//         alert("Adult")
//     }else if(age >= 60 && age < 200){
//         alert("Senior Citizen")
//     }else{
//         alert("Invalid Input")
//     }

// }

// 2. Even or Odd Number
// Task:
// User se ek number input lena hai aur check karna hai ke woh even hai ya odd.
// Logic:
// • Agar number ko 2 se divide karne par remainder 0 aaye, toh woh even hai.
// • Agar remainder 1 aaye, toh woh odd hai.
// • Agar user ne invalid ya non-numeric input diya, toh error message show karein.

// let num = +prompt("Enter any number");
// if(isNaN(num)){
// alert("Please Enter a valid number")
// }else{
//     if(num % 2 == 0){
//         alert("Even Number")
//     }else if(num % 2 !== 0){
//         alert("Odd Number")
//     }
// }

// 3. Positive, Negative, or Zero
// Task:
// User se ek number input lena hai aur batana hai ke woh positive, negative ya zero hai.
// Logic:
// • Agar number 0 se bara hai, toh woh positive hai.
// • Agar number 0 se chhota hai, toh woh negative hai.
// • Agar number 0 ke barabar hai, toh woh zero hai.

// let num = +prompt("Enter positive negative number");

// if(isNaN(num)){
//     alert("Invalid Number")
// }else{
//     if(num > 0){
//         alert("Positive Number")
//     }else if(num < 0){
//         alert("Negative Number")
//     }else{
//         alert("Your is 0")
//     }
// }

// 4. Vowel or Consonant Checker
// Task:
// User se ek letter input lena hai aur batana hai ke woh vowel hai ya consonant.
// Logic:
// • Agar letter 'a', 'e', 'i', 'o', ya 'u' hai, toh woh vowel hai.
// • Agar koi aur alphabet hai (b, c, d, ...z), toh woh consonant hai.

// • Agar user ne koi number ya special character diya, toh "Invalid Input" show karein.

// let letter = prompt("Enter vowel or consonant");
// if(letter.length === 1 && ((letter >="a" && letter <= "z") || (letter >= "A" && letter <= "Z"))){

// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ||
//     letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"
// ){
//     alert("Vowel")
// }else{
//     alert("consonant")
// }

// }else{
//     alert("Error")
// }

// 5. Simple Calculator
// Task:
// User se *do numbers aur ek operator (+, -, , /) lena hai aur uske mutabiq calculation perform karna hai.
// Logic:
// • Agar operator '+' hai, toh dono numbers ka sum return karo.
// • Agar operator '-' hai, toh subtraction karo.
// • Agar operator '*' hai, toh multiplication karo.
// • Agar operator '/' hai, toh division karo.
// • Agar user ne division ke waqt denominator 0 diya, toh error message show karein.

// let num1 = +prompt("Enter first Number")
// let num2 = +prompt("Enter second Number")
// let opeartor = prompt("Enter Operator + , - , * , /")

// if(opeartor == "+"){
// alert(`Your sum is ${num1 + num2}`)
// }else if(opeartor == "-"){
//     alert(`Your subtraction is ${num1 - num2}`)
// }else if(opeartor == "*"){
//     alert(`Your multiplication is ${num1 * num2}`)
// }else if(num2 === 0){
//     alert("Error")
// }else if(opeartor == "/"){
//     alert(`Your division is ${num1 / num2}`)
// }

// 6. Leap Year Checker
// Task:
// User se year input lena hai aur batana hai ke woh leap year hai ya nahi.
// Logic:
// • Agar year 4 se divisible hai aur 100 se nahi divisible hai, toh woh leap year hai.
// • Agar year 400 se divisible hai, toh bhi woh leap year hai.
// • Baaki sab cases mein woh normal year hoga.
// 📌Example:
// • 2024 → Leap Year
// • 2100 → Not a Leap Year
// • 2000 → Leap Year

// let year = +prompt("Enter a year");

// if (year % 400 == 0) {
//     alert("Leap Year");
// } else if (year % 4 == 0 && year % 100 !== 0) {
//     alert("Leap Year");
// } else {
//     alert("Not a Leap Year");
// }

// 7. Temperature Checker
// Task:
// User se temperature input lena hai aur uske basis par uska weather category batana hai.
// Logic:
// • Agar temperature 30°C ya zyada hai, toh "It's Hot" show karo.
// • Agar temperature 20-29°C hai, toh "It's Warm" show karo.
// • Agar temperature 10-19°C hai, toh "It's Cool" show karo.
// • Agar temperature 10°C se kam hai, toh "It's Cold" show karo.

// let temp = +prompt("Enter Temperature");

// if(isNaN(temp)){
//     alert("Just Enter temperature in Nmber")
// }else{
//     if(temp >= 30){
//         alert("It Hot")
//     }else if(temp > 20 && temp < 29){
//         alert("It Warm")
//     }else if(temp > 10 && temp < 19){
//     alert("It Cool")
//     }else if(temp < 10){
//         alert("It cold")
//     }
// }

// 8. Grade Calculator
// Task:
// User se marks input lena hai aur uske basis par grade (A, B, C, D, Fail) display karna hai.
// Logic:
// • 90 se 100: A Grade
// • 80 se 89: B Grade
// • 70 se 79: C Grade
// • 60 se 69: D Grade
// • 50 se 59: E Grade
// • 0 se 49: Fail
// • Agar user ne invalid number diya, toh "Invalid Input" show karein.
// 📌Example:
// • Marks: 85 → "B Grade"
// • Marks: 40 → "Fail"
// let grade = +prompt("Enter Your Marks")

// if(isNaN(grade)){
//     alert("Please Enter A number")
// }else{
//     if(grade >= 90 && grade <= 100){
//         alert("A")
//     }else if(grade >= 80 && grade <= 89 ){
//         alert("B")
//     }else if(grade >= 70 && grade <= 79){
//         alert("C")
//     }else if(grade >= 60 && grade <= 69){
//      alert("D")
//     }else if(grade >= 50 && grade <= 59){
//    alert("E")
//     }else if(grade >= 0 && grade <= 49){
//         alert("Fail")
//     }
// }

// 9. Largest of Three Numbers
// Task:
// User se teen numbers input lena hai aur batana hai ke inme se sabse bara number kaunsa hai.
// Logic:
// • Agar pehla number dusre aur teesre se bara hai, toh woh largest hai.
// • Agar dusra number pehle aur teesre se bara hai, toh woh largest hai.
// • Agar teesra number pehle aur dusre se bara hai, toh woh largest hai.
// • Agar teeno equal hain, toh "All numbers are equal" show karein.
// 📌Example:
// • Numbers: 10, 25, 15 → "Largest number is 25"

// let firstNum = +prompt("Enter first number");
// let secondNum = +prompt("Enter second number");
// let thirdNum = +prompt("Enter third number");

// if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
//     alert("Invalid Number");
// } else {
//     if (firstNum > secondNum && firstNum > thirdNum) {
//         alert(`Largest number is ${firstNum}`);
//     } else if (secondNum > firstNum && secondNum > thirdNum) {
//         alert(`Largest number is ${secondNum}`);
//     } else if (thirdNum > firstNum && thirdNum > secondNum) {
//         alert(`Largest number is ${thirdNum}`);
//     } else {
//         alert("All numbers are equal");
//     }
// }

// 10. Login System
// Task:
// User se username aur password lena hai aur check karna hai ke credentials sahi hain ya nahi.
// Logic:
// • Agar username "admin" aur password "12345" hai, toh "Login Successful" show karein.

// • Agar username ya password galat hai, toh "Incorrect Credentials" show karein.
// • Agar user ne koi field empty chhodi, toh "Please enter all details" show karein.
// 📌Example:
// • Username: admin, Password: 12345 → "Login Successful"
// • Username: admin, Password: 00000 → "Incorrect Credentials"

// let userName = prompt("Enter User Name")
// let password = prompt("Enter password")

// if(userName == "" || password == ""){

//     alert("Please enter all details")
// }else{
//     if(userName == "admin" && password == 12345){
//         alert("Login Successful")
//     }else{
//         alert("Incorrect Credentials")
//     }

// }

// -------------------------------------------------------------

// { logical operators }

// Temperature Check:

// Ek variable temperature lo.
// Agr temperature 30°C se zyada ho to "It's hot outside!" print kro.
// Agr 20°C se 30°C ke darmiyan ho to "The weather is nice!" print kro.
// Warna "It's cold outside!" print kro

// let temp = +prompt('Enter Temp')
// if(temp > 30){
//     alert('It hot outside!')
// }else if(temp >= 20 && temp <=30){
//     alert('The weather is nice!')
// }else{
//     alert('It cold outside!')
// }

// ----------------------------------------

// || operator

// let day = prompt('Enter day')
// if(day === "saturday" || day ==="sunday"){
//     console.log(`Today is off`);
// }else{
//     console.log(`Today is workig day!`);

// }

// --------------------------------------------------------------------------------------

//                      ARRAY

// Declare an empty array using JS literal notation to store
// student names in future.
// let arr = [];
// console.log(arr);

// Declare an empty array using JS literal notation to store
// student names in future.
// let arr = new Array(5)
// arr[3] = "Sumair"
// console.log(arr);

// Declare and initialize a strings array.
// let arr = ["apple", "banana", "grapes", "peach"]
// console.log(arr[2]);

// Declare and initialize a numbers array.
// let num = [1,2,3,4,5]
// console.log(num[2]);

// Declare and initialize a boolean array.
// let arr = [true,false,true,false]
// console.log(arr);

// Declare and initialize a mixed array.
// let arr = ["hello",2, true, {name:"ali"},[1,2,3]]
// console.log(arr[4][2]);

// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let education = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PhD"]
// // console.log(education.length);
// for(let i = 0; i < education.length; i++){
//     console.log(education[i]);

// }

// let stdName = ["John","alex","mike"]
// let score = [420,350,480]
// let totalMarks = 500;

// for(let i = 0; i < stdName.length; i++){
//     let persentage = (score[i] / totalMarks) * 100;
//     document.write(
//         `Students ${stdName[i]}
//         | score ${score[i]}
//         | Persentage ${persentage}%
//         `
//     )
// }

// Initialize colors array
// let colors = ["Red", "Green", "Blue", "Yellow"];
// document.write("<b>Initial Colors:</b> " + colors.join(", ") + "<br><br>");

// // (a) Add color at the beginning
// let colorStart = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorStart);
// document.write("<b>After adding color at the beginning:</b> " + colors.join(", ") + "<br><br>");

// // (b) Add color at the end
// let colorEnd = prompt("Enter a color to add at the end:");
// colors.push(colorEnd);
// document.write("<b>After adding color at the end:</b> " + colors.join(", ") + "<br><br>");

// // (c) Add two colors at the beginning
// colors.unshift("Purple", "Orange");
// document.write("<b>After adding two colors at the beginning:</b> " + colors.join(", ") + "<br><br>");

// // (d) Delete the first color
// colors.shift();
// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br><br>");

// // (e) Delete the last color
// colors.pop();
// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br><br>");

// // (f) Add color at user-defined index
// let indexAdd = prompt("Enter the index where you want to add a color:");
// let newColor = prompt("Enter the color name:");
// colors.splice(indexAdd, 0, newColor);
// document.write("<b>After adding color at index " + indexAdd + ":</b> " + colors.join(", ") + "<br><br>");

// // (g) Delete color(s) from user-defined index
// let indexDelete = prompt("Enter the index from where you want to delete color(s):");
// let deleteCount = prompt("Enter the number of colors you want to delete:");
// colors.splice(indexDelete, deleteCount);
// document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexDelete + ":</b> " + colors.join(", ") + "<br><br>");

// ------------------------------------------------------------------------

// ARRAY

// Basic Tasks (Push, Pop, Shift, Unshift)
// Ek empty array banao.
// Isme alag-alag fruits ke naam push method se add karo.
// Push Task:

// let arr = [];
// arr.push("banana","mango","apple","grape")
// console.log(arr);

// Pop Task:

// Pehle ek array create karo jisme 4 cities ke naam hon.
// pop method ka use karke last city remove karo.

// let city = ["karachi","lahore","islamabad","multan"]
// city.pop()
// console.log(city);

// Unshift Task:

// Ek array banao jisme 3 numbers hon.
// unshift ka use karke ek aur number start mein add karo.

// let arr = [1,2,3,4,5]
// arr.unshift(0)
// console.log(arr);

// Shift Task:

// Ek array banao jisme 5 colors hon.
// shift ka use karke pehla color remove karo.

// let colors = ["red","green","blue","yellow","purple"]
// colors.shift()
// console.log(colors);

// ------------------------------------------------------------------------

// Multiple Push & Pop:

// Ek empty array banao.
// push ka use karke 5 items add karo.
// pop ka use karke 2 items remove karo.

// let arr = []
// arr.push('apple','banana','mango','orange','peach')
// arr.pop()
// arr.pop()
// console.log(arr);

// Queue Simulation (FIFO - First In, First Out)

// Ek empty array banao jo ek queue ko represent kare.
// push ka use karke 3 log add karo.
// shift ka use karke pehla banda remove karo (jo sabse pehle aya tha).

// let queue = []
// queue.push('ali','ahmed','usman')
// queue.shift()
// queue.shift()
// console.log(queue);

// Stack Simulation (LIFO - Last In, First Out)

// Ek empty array banao jo ek stack ko represent kare.
// push ka use karke 4 items add karo.
// pop ka use karke ek ek item remove karo jab tak sirf ek item bache.

// let arr  = [];
// arr.push("apple","grapes","mango","orange")
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);

// Mixing Methods:

// Ek array {10, 20, 30} se start karo.
// unshift(5), push(40), pop(), shift() use karo aur final array check karo.

// let arr = [10,20,30]
// arr.unshift(5)
// arr.push(40)
// arr.pop()
// arr.shift()
// console.log(arr);

// ---------------------------------------------------------------------
// splice method slice method

// Slice Basic Task
// Ek array ['apple', 'banana', 'mango', 'orange', 'grape'] banao.
// slice() ka use karke sirf middle ke 3 fruits ka ek new array banao.
// Original array same rehna chahiye.

// let arr =['apple', 'banana', 'mango', 'orange', 'grape'];
// newArr = arr.slice(1,4)
// console.log(newArr);
// console.log(arr);

// Ek array [10, 20, 30, 40, 50] banao.
// splice() ka use karke middle se 30 ko remove karo.
// Phir usi position par 25, 35 insert karo.
// Original array change hona chahiye.

// let arr = [10, 20, 30, 40, 50];
// let newArr = arr.splice(2,1,25,35)
// console.log(newArr);
// console.log(arr);

// Extract Last N Elements (Using Slice)
// Ek array [5, 10, 15, 20, 25, 30] lo.
// slice() ka use karke last 3 elements ka ek new array banao.
// Original array change nahi hona chahiye.

// let  arr = [5, 10, 15, 20, 25, 30];
// newArr = arr.slice(-3)
// console.log(newArr);
// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60, 70]
// arr.splice(2,3,50,40,30)
// console.log(arr);

// let arr =  [5, 10, 15, 20, 25, 30, 35, 40, 45];

// newArr = arr.slice(-4)
// console.log(newArr);
// console.log(arr);

// ---------------------------------------------------------

//  FOR LOOP

//  for(let num = 0; num<=5000; num++ ){
//         console.log(num)
//  }

// for (let i = 0; i < 10; i++) {
//     console.log("Hello");
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }

// for (let i = 0; i < 3; i++) {
//     console.log("Loop Run", i);
//   }

// for (let i = 5; i >= 1; i--) {
//     console.log(i);
//   }

// print table of any number
// let tableOf = +prompt("enter any number");
// for(let x=1; x <=10; x++){

//            console.log(`${tableOf} * ${x} = ${tableOf * x} `);
//     }

// let myName = "Sumair";
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);

// print hello world 10 times
// for(let i = 0; i < 10; i++){
//     console.log("hello world");
// }

// print my name 10 times
// for(let i = 0; i < 10; i++){
//     console.log(myName);
// }

// print 1 to 100
// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }

// print 100 to 1
// for(let i = 100; i >= 1; i--){
//     console.log(i);
// }

// print table of any number
// let table = +prompt("Enter any number")

// for(let i = 1; i <=10; i++){
//     console.log(`${table} * ${i} = ${table * i}`);
// }

// print even number
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
//   }

// print odd number
// for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
//   }

// print reverse number
// let n =  +prompt("Enter any number")
// for( let i = n; i >= 1; i--){
//     console.log(i);
// }

// print square of any number
// for(let i = 1; i <= 10; i++){
//     console.log(i * i);
// }

// print cube of any number
// for(let i = 1; i <= 10; i++){
//     console.log(i * i * i);
// }

// let n = +prompt("Enter any number")
// for(let i = n; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i * i);
// }

// let num = prompt("number")
// let num1 = prompt("number")

// for(let num = 1; num <= 20; num += 2){
//     console.log(num);
// }
// for(let num1 = 2; num1 <= 20; num1 += 2){
//     console.log(num1);
// }

// // Task 10: Ek array ke sab elements print karo
// let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// Task 11: Ek array ke elements ko reverse order mein print karo
// let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(colors[i]);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log("Total Sum:", sum);

// ------------------------------------------------------------------------

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 0; i <= 10; i += 2){
// console.log(i);
// }

// for(let i = 1; i <= 10; i += 2){
//     console.log(i);
//     }

// let table = 7;
// for(let i = 1; i <= 10; i++){
//     console.log(`${table} * ${i} = ${table * i}`);
// }

// let num = prompt("Enter any number");
// for(let i = 1; i <= num; i++){
//     console.log(i);
// }

// let num = prompt("Enter any number");
// for(let i = num; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 1; i <=10; i++){
//     console.log(i * i);
// }

// for(let i = 1; i <=10; i++){
//     console.log(i * i * i);
// }

// let arr = ["apple","banana","grapes"]

// console.log(arr[0]);
// console.log(arr[1]);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let i = arr.length -1; i >= 0; i--){
//     console.log(arr[i]);
// }

// arr.length - 1 = 3 - 1 = 2 → (i = 2, arr[2] = "grapes")
// i = 1 → (arr[1] = "banana")
// i = 0 → (arr[0] = "apple")
// i = -1 → loop stop (kyunki i >= 0 condition false ho gayi)

// --------------------------------------------------
//     nested for loop

// for (let i = 0; i < 3; i++) {         // Outer loop
//     for (let j = 0; j < 3; j++) {     // Inner loop
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("------------"); // Separator
// }

// let size = 4;
// for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let j = 0; j < size; j++) {
//         row += `* `;  // Ek row me * add karte jao
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

// for(let i = 1; i <= 3; i++){
//     console.log(`outer iteration ${i}`);
//     for(let i = 1; i <=2; i++){
//         console.log(`inner iteration ${i}`);
//     }

// }

// Task #1:
// Ek nested loop likho jo ek 3x3 grid print kare.

// for(let i = 1; i <= 10; i++){ //outer loop row
//     let row = " "     // har row k liye eik empty string
// for(let j = 1; j <= 10; j++){ //inner loop column
//     row += j + " ";
// }
// console.log(row);
// }

// Task #2:
// Ek nested loop likho jo ek 5x5 star pattern print kare.

// let pattern = ""
// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         pattern += "* "
//     }
//     pattern += "\n";
//     // console.log(row);
//     // document.write(row)
// }
// console.log(pattern);

// Task #3:
// Ek nested loop likho jo 1 se lekar 5 tak numbers print kare, magar har row i ke according print ho.

// for(let i = 1; i <= 5; i++){
//     let row = ""
//     for(
// let j = 1; j <= i; j++){
//         row += j + " "
//     }
//     console.log(row);

// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullName = []

// for(let i = 0; i < firstNames.length; i++){
//     for(let j = 0; j < lastNames.length; j++){
//         fullName.push(firstNames[i] + lastNames[j])
//     }
// }
// console.log(fullName);

// Task 1: Square Pattern Print Karo
// Ek square pattern print karna hai nested for loop ka use karke.
// Example:
// Agar user n = 4 de, to output yeh hoga:
// ****
// ****
// ****
// ****
// Hint: Pehla loop rows ke liye hoga, doosra loop har row ke andar * print karega.

// let userInput = prompt("Enter number")
// let row = ""
// for(let i = 0; i < userInput; i++){
//     for(let j = 0; j < 4; j++){
//       row += "* "
//     }
//    row +="\n"
// }
// console.log(row);

// Task 2: Right-Angled Triangle Print Karo
// Agar user n = 5 de, to output yeh hoga:

// *
// **
// ***
// ****
// *****

// Hint: i rows handle karega aur j har row ke andar stars print karega.

// let userInput = prompt("Enter any number")
// for(let i = 1; i <= userInput; i++){
//     let row = ""
//     for(let j = 1; j <= i; j++){
//       row += "* "
//     }
//     //  row = ""
//     row += "\n"
//     console.log(row);
// }

// Task 3: Multiplication Table Print Karo (2 se 5 tak)
// Example
// Table of 2:
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// Table of 5:
// 5 x 1 = 5
// 5 x 2 = 10
// ...

// Hint: Pehla loop 2 se 5 tak tables ke liye hoga, doosra loop 1 se 10 tak multiplication ke liye.

// for(let i = 2; i <=5; i++){
//    for(let j = 1; j <= 10; j++){
//     console.log(`${j} * ${i} = ${i * j}`);

//    }
//    console.log("======================");

// }

// ----------------------------------------------------------------

// Task 1: Print Even Numbers in an Array
// Task: Given an array of integers, print only the even numbers.

// let arr = [1,2,-3,4,-5,6,-7,8,-9,10]

// for(let i = 0; i < arr.length; i++){
//     // console.log(arr[i]);
//     if(arr[i] % 2 == 0){
//         console.log(`Even number ${arr[i]}`);

//     }else{
//         // console.log(`odd number ${arr[i]}`);

//     }

// }

// Task 2: Count Even and Odd Numbers
// Task: Given an array of integers, count how many numbers are even and how many are odd.

// let arr =  [1,2,3,4,5,6,7,8,9,10,22,34,5,6]
// let evenNum = []
// let oddNum = []

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         evenNum.push(arr[i])
//     }else{
//         oddNum.push(arr[i])
//     }
// }

// console.log(`Even Number ${evenNum.length}`);
// console.log(`Odd Number ${oddNum.length}`);

// Task 3: Sum of Even Numbers
// Task: Find the sum of all even numbers in the array.

// let arr =  [1,2,3,4,5,6,7,8,9,10]
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//      sum += arr[i]
//     }
// }

// console.log("sum " + sum);

// Task 4: Find the Maximum and Minimum Numbers
// Task: Find the largest and smallest number in the array.

// let arr =  [1,2,3,4,5,6,7,8,9,10,-2,20]
// arr = [1, 2, 3, 4, 5, -2, 20]
// let max = 0;
// let min = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] <= min){
//        min = arr[i]
//     }
// }
// console.log("Max Num in the array is " + max);
// console.log("Min Num in the array is " + min);

// Task 5: Reverse the Array
// Task: Reverse the elements of an array without using built-in reverse functions.

// let arr =  [1,2,3,4,5,6,7,8,9,10]

// for(let i = arr.length -1; i >= 0; i--){
//     console.log(arr[i]);

// }

// Task 6: Check if a Number Exists in the Array
// Task: Given a number, check if it exists in the array and print a message indicating whether
// it’s found or not.

// let arr =  [1,2,3,4,5,6,7,8,9,10]
// let check = prompt("enter number")
// let notFound = false;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == check){
//         console.log(`${arr[i]} is found`);
//         notFound = true;
//         break;
//     }
// }
// if(!notFound){
//     console.log("not found");
// }

// Task 7: Remove All Negative Numbers
// Task: Given an array that contains both positive and negative numbers, remove all negative
// numbers from the array.

// let arr =  [1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7]
// let positive = []

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] >= 0){
//         positive.push(arr[i])
//         // console.log(arr[i]);

//     }
// }
// console.log(positive);

// Task 8: Student Attendance
// Task: Ek array mein students ki attendance ko track karo (1 for present, 0 for absent). Count
// karo kitne students present hain aur kitne absent hain.

// let arr = [1,0,1,0,1,0,1,0,1,0,1,1,1]
// let present = [];
// let absent = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 1){
//        present.push(arr[i])
//     }
//     if(arr[i] == 0){
//         absent.push(arr[i])
//     }
// }

// console.log("present "+ present.length);
// console.log("absent "+absent.length);

// let arr = [1,0,1,0,1,0,1,0,1,0,1,1,1]
// let preCount = 0;
// let absCount = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 1){
//         preCount++;
//     }else{
//         absCount++;
//     }
// }
// console.log(preCount);
// console.log(absCount);

// =====================================================================================

// postfix prefix

//pre-increment
// ++num
//post increment
// num++

// let a = 10
// let b = ++a
// let b = a--

// console.log(b);

// let a = 10;
// let b = a--  //10
// let c = ++a

// console.log(a);  //  10
// console.log(b);  //  10
// console.log(c);  //  10

// let a = 5;
// let b = 10;
// //        10  + 9   +  6  - 6   + 8
// let ans = b-- + b-- + ++a - a-- + b--

// console.log(ans);

// let a = 10;
// let b = a++;
// let c = ++a;

// console.log(a); // 12
// console.log(b); // 10
// console.log(c); // 12

// let a = 1;
// let b = 2;

// //        1 -  2  - 1   +  2  +  4  -  -1
// let c = --b - ++a - b-- + a++ + ++a - --b

// console.log(c);

// var totalCost = 1 + 3 * 4;
// console.log(totalCost);

// var totalCost = 1 + (3 * 4);
// console.log(totalCost);

// var totalCost = (1 + 3) * 4;
// console.log(totalCost);

// let a = ((2 * 4) * 4) + 2;
// console.log(a);

// let myName = "Sumair Khan"
// console.log("Hello " + myName);

// alert("2 plus 2 = " + 2 + 2 );

// let myName = prompt("Enter your name!")
// console.log("Welcome " + myName);

//  var question = "Your species?";
//  var defaultAnswer = "human";
//  var spec = prompt(question, defaultAnswer);
//  console.log(spec);

// let num1 = Number(prompt("Enter a first num"))
// let num2 = Number(prompt("Enter a Second num"))

// let ans = num1 + num2

// console.log(ans);

// let city = prompt("Enter your city")
// if(city == "karachi"){
//     console.log("Correct Answer");
// }else{
//     console.log("Wrong Answer");

// }

// let age = prompt("Enter your age")
// if(age >= 18){
//  console.log("Eligible for vote");
// }else{
//     console.log("Not Eligible for vote");

// }

// let a =  10;
// let b = 10;

// console.log(a == b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

// var correctAnswer = "Vatican";

// if (correctAnswer === "Vatican") {
//      alert("Correct!");
// }
// else {
//      alert("Wrong answer");
// }

// let marks =  55;
// if(marks >= 90){
//     console.log("Your Grade is A+");
// }else if(marks >= 80){
//     console.log("Your Grade is A");
// }else if(marks >= 70){
//     console.log("Your Grade is B");
// }else if(marks >= 60){
//     console.log("Your Grade is C");
// }else{
//     console.log("Fail");
// }

// let a = 5
// let b = -10

// console.log(a > b && a < b); //true false
// console.log(a > b && a > b); //true false
// console.log(a < b || a > b); //true false
// console.log(a < b || a > b); //true false

// let email = prompt("Enter Your Email");
// let password = +prompt("Enter your Password");

// if(email == "sumair@gmail.com" && password == 1234){
//     console.log("Login");
// }else{
//     console.log("Incorrect Email or Password");
// }
//  index    0         1        2      3      4       5
// let colors = ["green", "yellow", "pink","blue","purple"]
// console.log(colors[0]);
// colors.push("black")
// colors.unshift("black")
// colors.pop()
// colors.shift()
// colors.splice(2,0,"green")

// let newColors = colors.slice(3,1)
// let newColors = colors.slice(-4)
// console.log(newColors);

// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");

// for(let i = 1; i <= 100; i++){
// console.log("Hello world");
// }

// for(let i = 10; i >= 5; i--){
// console.log(i);

// }

// let colors = ["green", "yellow", "pink","blue","purple"]
// console.log(colors[0]);
// console.log(colors[1]);

// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// let nums = [10,20,30,40,50]
// let findNum = 25;
// let found = false;

// for(let i =0; i < nums.length; i++){
//     // console.log(nums[i]);
//     if(nums[i] == findNum){
//         found = true;
//         break;
//     }

// }
// if(found){
//     console.log("Your Number is Found");
// }else{
//     console.log("Not Found");

// }

// for(let i = 1; i <= 3; i++){
//     console.log("Outer loop", i);

//     for(let i = 1; i <=4; i++){
//         console.log("Inner Loop",i);

//     }

// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] + lastNames[j]);

// }

// }

// console.log(fullNames);

//==============================================================================================

// IF ELSE IF

// 1. Age Group Identifier
// Task:
// User se age input lena hai aur uske basis par uska category (Child, Teenager, Adult, ya Senior Citizen) bataani hai.
// Logic:
// • 0 se 12 saal: Child
// • 13 se 19 saal: Teenager
// • 20 se 59 saal: Adult
// • 60 ya us se zyada: Senior Citizen
// • Agar input invalid ho (negative ya non-numeric value), toh "Invalid Input" show karein.

// let userInput = +prompt("Enter Your Age: ")

// if(userInput > 0){
// if(userInput <= 12){
//     console.log("Child");
// }else if(userInput >= 13 && userInput <= 19){
//     console.log("Teenager");
// }else if(userInput >= 20 && userInput <= 59){
//     console.log("Adult");
// }else{
//     console.log("Senior Citizen");
// }
// }else{
//     console.log("Invalid Input");
// }

// 2. Even or Odd Number
// Task:
// User se ek number input lena hai aur check karna hai ke woh even hai ya odd.
// Logic:
// • Agar number ko 2 se divide karne par remainder 0 aaye, toh woh even hai.
// • Agar remainder 1 aaye, toh woh odd hai.
// • Agar user ne invalid ya non-numeric input diya, toh error message show karein.

// let userInput = +prompt("Enter Any Number")

// if(userInput > 0){
// if(userInput % 2 == 0){
//     console.log("Even Number");
// }else{
//     console.log("Odd Number");
// }
// }else{
//     console.log("Invalid Input");
// }

// 3. Positive, Negative, or Zero
// Task:
// User se ek number input lena hai aur batana hai ke woh positive, negative ya zero hai.
// Logic:
// • Agar number 0 se bara hai, toh woh positive hai.
// • Agar number 0 se chhota hai, toh woh negative hai.
// • Agar number 0 ke barabar hai, toh woh zero hai.

// let userInput = +prompt("Enter any nuumber")

// if(!isNaN(userInput)){

// if(userInput > 0){
//     console.log("Positive Number");
// }else if(userInput < 0){
//     console.log("Negative number");
// }else{
//     console.log("Your number is zero");
// }
// }else{
//     console.log("Please enter a number");
// }

// 4. Vowel or Consonant Checker
// Task:
// User se ek letter input lena hai aur batana hai ke woh vowel hai ya consonant.
// Logic:
// • Agar letter 'a', 'e', 'i', 'o', ya 'u' hai, toh woh vowel hai.
// • Agar koi aur alphabet hai (b, c, d, ...z), toh woh consonant hai.
// • Agar user ne koi number ya special character diya, toh "Invalid Input" show karein.

// let userInput = prompt("Enter vowel to check")

// if(isNaN(userInput)){

// if(userInput == 'a' || userInput == 'e' || userInput == 'i' || userInput == 'o' || userInput == 'u'){
//     console.log(`${userInput} is vowel`);
//  }else{
//      console.log(`${userInput} is consonant`);
//  }
// }else{
//     console.log("Please enter a aplha");
// }

// 5. Simple Calculator
// Task:
// User se *do numbers aur ek operator (+, -, , /) lena hai aur uske mutabiq calculation perform karna hai.
// Logic:
// • Agar operator '+' hai, toh dono numbers ka sum return karo.
// • Agar operator '-' hai, toh subtraction karo.
// • Agar operator '*' hai, toh multiplication karo.
// • Agar operator '/' hai, toh division karo.
// • Agar user ne division ke waqt denominator 0 diya, toh error message show karein.

// let num1 = +prompt("Enter First Number: ")
// let num2 = +prompt("Enter Seconnd Number: ")
// let opeartor = prompt("Enter Operator: ")

// if(!isNaN(num1) && !isNaN(num2)){
//     if(opeartor == "+"){
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     }else if(opeartor == "-"){
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     }else if(opeartor == "*"){
//         console.log(`${num1} x ${num2} = ${num1 * num2}`);
//     }else if(opeartor == "/"){
//         if(num2 == 0){
//             console.log("Maths error");
//         }else{
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         }
//     }
// }else{
//     console.log("Please Enter a number");
// }

// 6. Leap Year Checker
// Task:
// User se year input lena hai aur batana hai ke woh leap year hai ya nahi.
// Logic:
// • Agar year 4 se divisible hai aur 100 se nahi divisible hai, toh woh leap year hai.
// • Agar year 400 se divisible hai, toh bhi woh leap year hai.
// • Baaki sab cases mein woh normal year hoga.
// 📌Example:
// • 2024 → Leap Year
// • 2100 → Not a Leap Year
// • 2000 → Leap Year

// let userInput = +prompt("Enter a year: ")
// if(userInput % 4 == 0 && userInput % 100 != 0 || userInput % 400 == 0){
// console.log("Leap year");
// }else{
//     console.log("Not a leap year");
// }

// 7. Temperature Checker
// Task:
// User se temperature input lena hai aur uske basis par uska weather category batana hai.
// Logic:
// • Agar temperature 30°C ya zyada hai, toh "It's Hot" show karo.
// • Agar temperature 20-29°C hai, toh "It's Warm" show karo.
// • Agar temperature 10-19°C hai, toh "It's Cool" show karo.
// • Agar temperature 10°C se kam hai, toh "It's Cold" show karo.

// let userInput = prompt("Enter a temperature: ")

// if(userInput > 30){
//     console.log("It Hot")
// }else if(userInput > 20){
//     console.log("It warm");
// }else if(userInput > 10){
//  console.log("It cool");
// }else{
//     console.log("It cold");
// }

// 8. Grade Calculator
// Task:
// User se marks input lena hai aur uske basis par grade (A, B, C, D, Fail) display karna hai.
// Logic:
// • 90 se 100: A Grade
// • 80 se 89: B Grade
// • 70 se 79: C Grade
// • 60 se 69: D Grade
// • 50 se 59: E Grade
// • 0 se 49: Fail
// • Agar user ne invalid number diya, toh "Invalid Input" show karein.
// 📌Example:
// • Marks: 85 → "B Grade"
// • Marks: 40 → "Fail"

// let userInput = +prompt("Enter your number")

// if(userInput >= 90 && userInput <= 100){
//   console.log("Grade A");
// }else if(userInput >= 80){
//     console.log("Grade B");
// }else if(userInput >= 70){
//   console.log("Grade C");
// }else if(userInput >= 60){
// console.log("Grade D");
// }else if(userInput >= 50){
//     console.log("Grade E");
// }else{
//     console.log("Fail");

// }

//largest word in string

// let str =  `im learning javascript programming`
// let arr =  str.split(" ")
// let largestWord = ""

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     if(arr[i].length > largestWord.length){
//         largestWord = arr[i]
//     }
// }

// console.log(largestWord);

// 9. Largest of Three Numbers
// Task:
// User se teen numbers input lena hai aur batana hai ke inme se sabse bara number kaunsa hai.
// Logic:
// • Agar pehla number dusre aur teesre se bara hai, toh woh largest hai.
// • Agar dusra number pehle aur teesre se bara hai, toh woh largest hai.
// • Agar teesra number pehle aur dusre se bara hai, toh woh largest hai.
// • Agar teeno equal hain, toh "All numbers are equal" show karein.
// 📌Example:
// • Numbers: 10, 25, 15 → "Largest number is 25"

// let num1 = +prompt("Enter First Number")
// let num2 = +prompt("Enter Second Number")
// let num3 = +prompt("Enter Third Number")

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is largest number`);
// }else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is largest number`);
// }else if(num3 > num1 && num3 > num2){
//     console.log(`${num3} is largest number`);
// }

// 10. Login System
// Task:
// User se username aur password lena hai aur check karna hai ke credentials sahi hain ya nahi.
// Logic:
// • Agar username "admin" aur password "12345" hai, toh "Login Successful" show karein.

// • Agar username ya password galat hai, toh "Incorrect Credentials" show karein.
// • Agar user ne koi field empty chhodi, toh "Please enter all details" show karein.
// 📌Example:
// • Username: admin, Password: 12345 → "Login Successful"
// • Username: admin, Password: 00000 → "Incorrect Credentials"

// let email = prompt("Enter your email")
// let password = prompt("Enter your Password")

// if(email != "" && password != ""){
// if(email == "admin@gmail.com" && password == 123){
//     console.log("Login");
//     }else{
//         console.log("Incorrect email or password");
//     }
// }else{
//     console.log("Please enter all details");

// }

//========================================================================================
// array

// Multiple Push & Pop:
// Ek empty array banao.
// push ka use karke 5 items add karo.
// pop ka use karke 2 items remove karo.

// let emptyarr = []

// emptyarr.push("apple","banana","peach","grapes","orange")
// emptyarr.pop()
// emptyarr.pop()
// console.log(emptyarr);

// Queue Simulation (FIFO - First In, First Out)
// Ek empty array banao jo ek queue ko represent kare.
// push ka use karke 3 log add karo.
// shift ka use karke pehla banda remove karo (jo sabse pehle aya tha).

// let emptyarr = []

// emptyarr.push("apple","banana","peach","grapes","orange")
// emptyarr.pop()
// emptyarr.pop()
// console.log(emptyarr);

// ================================================================================

// Changing case

// let myName = "Sumair Khan"
// let upper = myName.toUpperCase()
// let lower = myName.toLowerCase()
// console.log(upper);
// console.log(lower);

// let myName = "sUmAiR"

// let formmated = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()
// console.log(formmated);

//Task 2: Take a name as input and print it in Title Case (First letter capital only).
// let userInput = prompt("Enter anything")
// let formmated = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
// console.log(formmated);

// Task 3: Har word ka pehla letter capital karo (title case without function)
// Hint:
// split(" ") use karo taake words ka array ban jaye
// for loop se har word par chalo
// Har word ka charAt(0).toUpperCase() + slice(1).toLowerCase() karo
// Final result ko join(" ") karke string bana do

// let word = "hello im javascript how day going so far?"
// let wordArr = word.split(" ")
// for(let i = 0; i < wordArr.length; i++){
//     // console.log(wordArr[i]);
//     wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1).toLowerCase()
// }
// let string = wordArr.join(" ")
// console.log(string);

// Task 3: Ek array mein mixed case words hain, sabko lowercase mein convert karo
// ["Hello", "WoRLd", "JAVAscript", "Is", "FuN"]
// Convert to:
// ["hello", "world", "javascript", "is", "fun"]
//  Hint:
// Ek new empty array banao
// for loop chalao words array pe
// Har word pe .toLowerCase() lagao
// New array mein push karo

// let words = ["Hello", "WoRLd", "JAVAscript", "Is", "FuN"];
// let empty = []
// for(i = 0; i<words.length; i++){
//     words[i] = words[i].toLowerCase()
//     empty.push(words[i])
// }
// console.log(empty);

// ======================================================================================

// Finding Segments Common Methods

// let word = "Hello JavaScript"
// console.log(word.indexOf("Java"));
// console.log(word.indexOf("python"));

// let word = "Hello Hello JavaScript"
// console.log(word.lastIndexOf("Hello"));

// let word = "Hello hello JavaScript"
// console.log(word.includes("hello"));

// Task 1: First and Last Word Matching

// let str = "JavaScript is love and JavaScript is life";

// Check karo: Kya first word aur last word same hain?
// (Hint: split(), comparison)

// let str = "JavaScript is love and JavaScript is Life";
// let newstr = str.split(" ")
//     if(newstr[0] == newstr[newstr.length -1]){
//         console.log("Match");
//     }else{

//         console.log("Not Match");
//     }

// Task 2: Find all indexes of a word (not just first)
// let sentence = "Hello world, hello again, and hello forever!";
// Har jagah "hello" kis index pe mila? (case-insensitive search)
// Output: [0, 19, 36]
//  Hint: Use indexOf() in a loop with updated starting position.

// let sentence = "Hello world, hello again, and hello forever!";
// let lower = sentence.toLowerCase().split(" ")
// let index = []

// for(let i = 0; i < lower.length; i++){
//     if(lower[i].includes("hello")){
//      index.push(i)
//     }
// }
// console.log(index);

// Task 3: Censor Words

//Tumhe ["stupid", "annoying"] jaise bad words ko "***" se replace karna hai.
//"This is so *** and ***!"
//(Hint: use loop + replace() or replaceAll())

// let text = "This is so stupid and annoying!";
// let arr = ["stupid","annoying!"]

// let lower = text.toLowerCase()

// for(let i = 0; i<arr.length; i++){
//     lower  = lower.replaceAll(arr[i], "***")
// }
// console.log(lower);

// Task 4: Check Palindrome Words in Sentence

// let input = "madam and racecar are both palindrome";
// Jo words reverse karne par bhi same hain, sirf unko print karo.
// madam
// racecar

// (Hint: loop + reverse string + check)

// let input = "madam and racecar are both palindrome";
// let words = input.toLowerCase().split(" ");

// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let reversed = "";

//     for (let j = word.length - 1; j >= 0; j--) {
//         reversed += word[j]; // last se start karke add karte jao
//     }

//     if (word === reversed) {
//         console.log(word);
//     }
// }

// ===============================================================================
// switch case
// Ek program banao jisme user ek number enter kare (1 to 7) aur program us din ka naam bataye using switch.

// let value = +prompt("Enter number (1-7)")

// switch (value) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break
//     case 4:
//         console.log("Thursday");
//         break
//     case 5:
//         console.log("Friday");
//         break
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break
//     default:
//         console.log("No case match");
//         break;
// }

// Ek grade variable lo (e.g. "A", "B", "C"...), aur switch use karke message print karo:
// A = Excellent
// B = Good
// C = Average
// D = Poor
// F = Fail

// let grade = "c"

// switch (grade) {
//     case "a":
//         console.log("Excellent");
//         break;
//     case "b":
//         console.log("Good");
//         break;
//     case "c":
//         console.log("Average");
//         break
//     case "d":
//         console.log("Poor");
//         break
//     case "f":
//         console.log("Fail");
//         break
//     default:
//         console.log("No case match");
//         break;
// }

// Advanced Task 1:
// Ek program banao jo user ke role ko check kare:

// Admin → "You have full access"

// Moderator → "You can edit content"

// User → "You can view content"

// Guest or unknown → "Please login"

// let grade = "Admin".toLowerCase()

// switch (grade) {
//     case "admin":
//         console.log("You have full access");
//         break;
//     case "Moderator":
//         console.log("You can edit content");
//         break;
//     case "User":
//         console.log("You can view content");
//         break
//     case "Guest":
//         console.log("Please login");
//         break
//     default:
//         console.log("No case match");
//         break;
// }

// Task 04:

// Ek calculator banao jisme:
// let num1 = 10;
// let num2 = 5;
// let operator = "+"; // try with "-", "*", "/"

// let num1 = 5
// let num2 = 10
// let opeartor = "+"

// switch (opeartor) {
//     case "+":
//         console.log(`Addition ${num1 + num2}`);
//         break;
//     case "-":
//         console.log(`Subtraction ${num1 - num2}`);
//         break;
//     case "*":
//         console.log(`Multipication ${num1 * num2}`);
//         break
//     case "/":
//         console.log(`Division ${num1 / num2}`);
//         break
//     default:
//         console.log("No case match");
//         break;
// }

// =================================================================================

// While loop

// let i = 1;

// while(i <= 5){
//     console.log("Number: ",i);
//     i++
// }

// Basic Task 1:
// while loop ka use karke 1 se 10 tak numbers print karo.

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++
// }

// Basic Task 2:
// Even numbers print karo from 2 to 20 using while.

// let i = 2;

// while(i <= 20){
//     console.log(i);
//     i+=2
// }

// Basic Task 2:
// User se ek number lo (e.g. 5), aur while loop se uska multiplication table print karo. (e.g. 5 x 1 = 5, ..., 5 x 10 = 50)

// let i = 1;
// let table = +prompt("Enter any number")

// while(i <= 10){
//     console.log(`${table} x ${i} = ${table * i}`);
//     i++
// }

// Basic Task 3:

// Ek secret number guessing game banao:
// Secret number: 7
// Jab tak user correct guess nahi karta, loop repeat ho
// Agar guess wrong ho toh Try again print ho
// Sahi ho toh Correct! print ho
// Ismein tum prompt() ka use kar sakte ho browser mein test karne ke liye.

// let secret_num = 7
// let userInput = +prompt("Enter the secret number")

// while(userInput !== secret_num){
//     console.log("Try Again");
//     userInput = +prompt("Enter the secrect number again")
// }
// console.log("Correct number");

// Tasks 4: Capitalize and Combine Sentences

// Ek program banao jo bar bar user se prompt mein sentence mangta rahe. Har word ka pehla letter capital ho aur baqi small ho. Jab user "done" likhe, tab loop ruk jaye aur final sentence show ho alert mein.

// Hint:
// while loop ka use karo.
// Har dafa user se ek sentence lo via prompt().
// Sentence ko split(" ") karke words mein divide karo.
// Har word ka first letter uppercase aur baqi lowercase karo.
// Har word ko ek array mein store karo.
// Jab user "done" likhe (case-insensitive), loop break karo.
// Sare words ko space ke sath join() karke final sentence banao.
// alert() se final sentence aur thank you message show karo.

// let password = 1234;
//     let attempt = 0;
//     let maxAttempts = 3;
//     let userInput;

//     while(userInput != password && attempt < maxAttempts){
//         userInput = +prompt("Enter your password: ")
//         attempt++
//       if(userInput == password){
//         alert("User Login")
//         break;
//       }else if(attempt < maxAttempts){
//        alert(`You have just ${maxAttempts - attempt} attempts left`)
//       }else{
//         alert("Your account is locked")
//         break
//       }
//     }

// Tasks 5: Password Check with Limited Attempts

// Ek program banao jo user se password input le prompt() ke zariye.
// User ke paas 3 dafa password enter karne ka chance ho. Agar sahi password de to login successful, warna account lock ho jaye.

// Hint:
// while loop ka use karo.
// Original password set karo (e.g., 1234).
// User se prompt() ke through password lo.
// Agar password sahi ho to:
//  Alert mein show karo: "User Login"
// Agar galat ho aur attempts bache hon to:
//  Alert mein show karo: "You have just X attempts left"
// Agar 3 attempts khatam ho jayein to:
//  Alert mein show karo: "Your account is locked"
// Number check ke liye +prompt() ka use karo (string to number conversion).

//  let empArr = []
//     while(true){
//         let userInput = prompt("Enter your Sentence:  || type 'done' to finish sentence")
//         if(userInput.toLowerCase() == 'done'){
//             let sentence = empArr.join(" ");
//             alert("Your sentence is:\n" + sentence)
//             alert("Thank for using me!")
//             break;
//         }else{
//             let arr = userInput.split(" ");
//             for(let i = 0; i < arr.length; i++){
//                 arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
//                 empArr.push(arr[i])
//             }

//         }
//     }

//===============================================================================

//do while loop

// let i = 1;

// do{
//     console.log("Number: ", i);
//     i++

// }while(i <= 10)

// Tasks 1: Print "Hello World" 3 times using do...while
// Hint:
// Ek counter variable banao, aur do...while mein 3 baar "Hello World" print karwao

// let counter = 1;

// do{
//     counter++
//     console.log("Hello world");

// }while(counter <= 3)

// Tasks 2: Use do...while to print even numbers from 2 to 10
// Hint:
// i = 2 se start karo, i += 2 se next even number lo

// let i = 0;
// do{
//     i+=2
//     console.log("even number",i);
// }while(i < 10)

// Tasks 3: Use do...while to print countdown from 5 to 1
// Hint:
// Reverse loop banao, i-- karo

// let i = 5;

// do{
//     console.log(i);
//     i--
// }while(i >= 1)

// Tasks 4: Take user input until they type "exit"
// Hint:
// prompt() use karo (browser mein) aur do...while(input !== "exit")

// do{
//     let userInput = prompt("Exit").toLowerCase()
//     if(userInput == "exit"){
//         console.log("Loop is break");
//         break;
//     }else{
//         console.log("Hwllo");
//     }
// }while(true)

// Tasks 5: Create a simple login system that gives 3 attempts using do...while
// Hint:
// Counter variable rakho aur do...while(attempts < 3) mein input check karo

// let counter = 3
// let max = 1
// do{
//     let userInput = prompt("Enter your pin")
//         if(max <= counter){
//             if(userInput == "1234"){
//                 console.log("Login");
//                 break;
//                }else if(counter > max){

//                    console.log("Wrong password");
//                    alert(`${counter - max} attempts left`)
//                       max++;
//                }else{
//                 console.log("Acc locked");
//                 break
//                }
//         }

// }while(true)

// Tasks 6: Use do...while to create a menu system (like ATM: 1-Check balance, 2-Deposit, 3-Exit)
// Hint:
// switch-case + do...while(option !== 3)

// let balance = 1000;
// let option;

// do{
//     option = prompt(
//         "Welcome to ATM\n" +
//         "1. Check Balance\n" +
//         "2. Deposite\n" +
//         "3. Exit\n"+
//         "Options (1-3)"
//     )

//     switch(option){
//         case "1":
//             alert(`Your current balance is ${balance}`)
//             break
//         case "2":
//             let amount = +prompt("Enter your deposite amount")
//             balance = balance + amount;
//             alert(`Your current balance is ${balance}`)
//             break;
//         case "3":
//             alert("Thankyou")
//             break;
//     }
// }while(option != "3")

// Tasks 7: Validate user input to accept only numbers using do...while
// Hint:
// isNaN(input) check karo aur input repeat karo jab tak valid number na mile

// let userInput;

// do{
//     userInput = prompt("enter a valid number")
//     if(isNaN(userInput)){
//         alert("Please enter any number")
//     }
// }while(isNaN(userInput))

// alert(`Thanks for using valid number ${userInput}`)

//============================================================================================

// function declaration

// greet()
// function greet(){
//     console.log("Hello Word");
// }

// function expression

// let greet = function(){
//     console.log("Hello world");
// }
// greet()

// function with parameters

// function foo(name){
//     console.log(`hello ${name}`);
// }
// foo("Sumair")

// Tasks 1: Greet the user

//  Ek function banao greetUser(name) jo console mein message print kare:

// function greet(name){
//     return `Hello ${name}`
// }

// let newGreet = greet("Sumair")
// console.log(newGreet);

// Tasks 2: Sum of 2 numbers

// Ek function add(a, b) likho jo do numbers ka sum return kare.

// function add(a, b){
//     return a + b;
// }
// let newAdd = add(10,10)
// console.log(newAdd);

// .Tasks 3: Check even or odd

// Ek function banao isEven(num) jo return kare "Even" ya "Odd"

// function isEven(num){
//     if(num % 2 == 0){
//         console.log("Even Number");
//     }else{
//         console.log("Old Number");
//     }

// }
// isEven(2);

// .Tasks 4: Count characters in string

// Ek function countChars(str) likho jo string ke characters count kare

// function count(){
//     let word = "Hello world"
//     console.log(word.length);

// }
// count()

// Tasks 5: Capitalize each word

//  Function capitalizeWords(str) likho jo har word ka pehla letter capitalize kare.

// function capitalizeWords(str){
//     let word = "hello world"
//     let arr = word.split(" ")

//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()

//     }
//     let upper1 = arr.join(" ")
//     console.log(upper1);
// }

// capitalizeWords()

//     Tasks 6: Check if string is palindrome

//  Function isPalindrome(str) likho jo check kare string palindrome hai ya nahi.

// function isPalindrome(str){
//     let word = "hero"
//     let reverse = ""
//     for(let i = word.length -1; i >= 0; i--){
//         reverse += word[i]
//     }
//     if(word == reverse){
//        console.log("Palindrome");
//     }else{
//      console.log("Not Palindrome");
//     }
// }

// isPalindrome()

// Tasks 7: Find largest number in array

//  Function findMax(arr) likho jo array mein se sabse bada number de.

// function findMax(){
//     let arr = [8,2,9,4,5,6]
//     let max = 0
//     for(let i = 0; i < arr.length; i++){
//         // console.log(arr[i]);
//         if(arr[i] > max){
//             max = arr[i]

//         }
//     }
//     console.log("Your max number is: ", max)
// }

// findMax()

// Tasks 8: Make calculator function

//  Function calculator(a, b, operator) likho jo +, -, *, / handle kare.

// function calculator(a,b, opeartor){
//         switch (opeartor){
//             case "+":
//                 console.log(a + b, "Addition");
//                 break;
//             case "-":
//                 console.log(a - b, "Minus");
//                 break;
//             case "*":
//                     console.log(a * b, "Multiplcation");
//                     break;
//             case "/":
//                 if(a < b){
//                     console.log("Maths error");
//                     break;
//                 }else{
//                     console.log(a / b, "Minus");
//                 }
//                 break;
//         default:
//             console.log("Invalid Operator");

//         }
// }

// calculator(10,20, "/")

// ======================================================================================

// Math Object in javascript

// round
// let num1 = 5.4 // 4
// let num1 = 5.5 //  6
// let num1 = 5.6 //  6
// let num1 = -5.6 //  -6
// let num1 = -5.4 //  -5
// console.log(Math.round(num1));

// floor

// let num = 5.4  // 5
// let num = 5.9  // 5
// let num = -5.1  // -6
// console.log(Math.floor(num));

// ceil

// let num = 4.1 // 5
// let num = -4.1 // 4
// let num = -4.9 // 4
// console.log(Math.ceil(num));

// trunc

// let num = 4.23456
// let num = 4.53456
// let num = 4.63456
// console.log(Math.trunc(num));

// max
// Spread operator ...a array ke elements ko individual values mein convert karta hai:
// Math.max(9, 3, 4, 5, 67)

// let a = [9,3,4,5,67]
// console.log(Math.max(...a));

// min

// let a = [9,23,34,1,45]
// console.log(Math.min(...a));
// console.log(Math.min(3,4,4,677,8,9));

// pow
// console.log(Math.pow(2,3));
// console.log(Math.pow(87,9));

// sqrt
// let a = 36
// let a = 49
// let a = 64
// console.log(Math.sqrt(a));

// random
// let num = Math.floor(Math.random() * 10 )
// console.log(num);

// abs

// let num = -98
// console.log(Math.abs(num));

// PI
// console.log(Math.PI);

// ===============================================================

// Tasks 1: Get lowest number from input:

// Ask user 3 numbers using prompt → show smallest.

// let num1 = +prompt("Enter any number")
// let num2 = +prompt("Enter any number")
// let num3 = +prompt("Enter any number")

// let lowest = Math.min(num1,num2,num3)
// console.log(`Your lowest nuber is ${lowest}`);

// Tasks 3: Square root finder:

// User inputs a number → print its square root.

// let userInput = +prompt("Enter Squre root: ")

// let sqr = Math.sqrt(userInput)

// let equal = Number.isInteger(sqr)
// equal ? alert(`${sqr} sqr root of ${userInput}`) : alert(`${userInput} is not a sqrt root`)

// Ye JavaScript ka built-in method hai jo check karta hai:

// Kya given value ek integer (poora number) hai ya nahi?
// Number.isInteger(5)        // true
// Number.isInteger(5.0)      // true (because 5.0 === 5)
// Number.isInteger(5.1)      // false
// Number.isInteger("5")      // false (string hai)
// Number.isInteger(NaN)      // false
// Number.isInteger(Infinity) // false

// Tasks 4: Absolute value practice:

// User inputs negative number → convert to positive using Math.abs.
// let userInput = +prompt("Enter negative: ")
// console.log(Math.abs(userInput));

// Tasks 5: Random Dice Simulator:

// Generate number between 1–6 using Math.random().

// Hint:
// Ek random decimal number lo (0 se 1 ke beech), usse dice ke range (1–6) mein convert karo using multiply, rounding, aur shifting.

// let dice =  Math.ceil(Math.random() * 6)
// console.log(dice);

// Tasks 6: Max/Min in an array manually:

// Use Math.max.apply(null, arr) and Math.min.apply(...).

// Hint:
// Math ka method normally numbers accept karta hai, array directly pass nahi hoti. Isliye array ke elements ko method ke andar individual values ke form mein pass karna padta hai.

// let arr = [2,5,23,2.2,323,23.21]
// console.log(Math.max(...arr));

// let arr = [2,5,23,2.2,323,23.21]
// console.log(Math.min(...arr));

// Tasks 7: Random OTP Generator (4 digits):

// Use Math.floor(Math.random()*9000 + 1000).

// Hint:
// Ek aisa random number generate karo jo hamesha 1000 se start ho aur 9999 tak ho. Iske liye range fix karni hoti hai aur base value add karni hoti hai.

// let otp = Math.ceil(Math.random() * 9000 + 1000)
// console.log(otp);

// Tasks 8: Find power and check if it's even:

// Hint:
// User se do numbers lo — ek base aur ek exponent. Dono ka power result calculate karo. Phir check karo ke result 2 se divide ho raha hai ya nahi (even ya odd decide karne ke liye).

// let num1 = +prompt("Enter base number")
// let num2 = +prompt("Enter exponent number")

// let check = Math.pow(num1,num2)

// check % 2 == 0 ? alert("its even number") : alert("its odd number")

// Ek secret number guessing game banao:
// Secret number: 7
// Jab tak user correct guess nahi karta, loop repeat ho
// Agar guess wrong ho toh Try again print ho
// Sahi ho toh Correct! print ho
// Ismein tum prompt() ka use kar sakte ho browser mein test karne ke liye.

// while(true){
//     let random = Math.ceil(Math.random() * 5)
//     let userInput = +prompt("Enter your secret Number: ")
//     if(userInput == random){
//         alert("Correct")
//         break;
//     }else{
//         alert("Try agian")
//     }
// }
// ==================================================================================

// let userInput = +prompt("ENter password lenght: ")
// let password = ""

// for(let i = 0; i < userInput; i++){
//     let random = Math.round(Math.random() * 3)
//     let charCode;

//     if(random == 0){
//         charCode = Math.floor(Math.random() * 6 ) + 87
//     }else if(random == 1){
//         charCode = Math.floor(Math.random() * 10) + 48
//     }else{
//         charCode = Math.floor(Math.random() * 6) + 65
//     }
//     password += String.fromCharCode(charCode)
// }

// console.log(password);

// let color = "#"
// for(let i = 0; i < 6; i++){

//     let random = Math.round(Math.random());
//     let code;

// if(random == 1){
//     code = Math.floor(Math.random() * 6) + 97;
//     // console.log(code);

// }else{
//     code = (Math.floor(Math.random() * 10) + 48);
// }
//  color += String.fromCharCode(code)
// }

// console.log(color);

// ================================================================================

// Converting Strings to Numbers in JavaScript

// parseInt
// let str = '123'
// let num = parseInt(str)
// console.log(num);

// let str = '123.34'
// let num = parseInt(str)
// console.log(num)

// parseFloat
// let str = '234.6789'
// let float = parseFloat(str)
// console.log(float);

// Number
// let num1 = "1234";
// let num2 = Number(num1)
// console.log(num2);

// let str5 = "123.45";
// let num5 = Number(str5);
// console.log(num5);  // Output: 123.45

// Convert "100" to a number using all 3 methods.

// let str = '100'
// let num = parseInt(str)
// console.log(num);

// let str = '100.5678'
// let num = parseFloat(str)
// console.log(num);

// let str = '100.5678'
// let num = Number(str)
// console.log(num);

// Convert "89.99" to a number using all 3 methods.

// let str = "89.19"
// let num = parseInt(str)
// console.log(num);

// let str = "89.99"
// let num = parseFloat(str)
// console.log(num);

// let str = "89.99"
// let num = Number(str)
// console.log(num);

// Try converting "abc123" using each method.

// let str = "abc123"
// let num = parseInt(str)
// console.log(num);

// let str = "abc123"
// let num = parseFloat(str)
// console.log(num);

// let str = "$123"
// let num = Number(str)
// console.log(num);

// Convert "$45.50" — and observe results

// let amount = "$45.50"
// let replace = amount.replace("$", "")
// let float = parseFloat(replace)
// console.log(float);

// Try converting " 75.25 " (string with spaces).

// let str = "   75.25   ";
// let result = parseInt(str);
// console.log(result);  // Output: 75

// let str = "   75.25   ";
// let result = parseFloat(str);
// console.log(result);  // Output: 75.25

// let str = "   75.25   ";
// let result = Number(str);
// console.log(result);  // Output: 75.25

// let num = 123
// let str = num.toString()
// console.log(str);

// let num = 123
// let str = String(num)
// console.log(str);

// toFixed

// let num = 10.3434
// let result = num.toFixed(4)
// console.log(result);

// let num = 9.520
// console.log(num.toFixed(1));

// let price = 45.6189;
// let fixed = price.toFixed(2);
// console.log(fixed);
// console.log(typeof fixed);

// Round 99.9999 to 2 decimal places using toFixed.

// let num =  99.9999
// console.log(num.toFixed(2));   // 100.00

// Use toFixed(4) on 5.5 and notice padding.

// let num = 5.5
// console.log(num.toFixed(4));   5.5000

// Convert "45.678" (as string) to number and limit to 1 decimal.
// let str = "45.678";
// let num = parseFloat(str)
// let decimal = num.toFixed(2)
// console.log(decimal);

// =======================================================================================

// ================================================================================

//                    DOM jn javascript

// console.log(document.documentElement);

// console.log(document);               // Pura document object
// console.log(document.documentElement); // <html> element
// console.log(document.head);         // <head> element
// console.log(document.body);         // <body> element

// let heading = document.getElementById("mainHeading");
// console.log(heading.innerText); // My Header

// let title = document.getElementById('title')
// title.innerText = "hi Javascript"

// function foo(){
//     let title = document.getElementById('title')
//     title.innerText = "hi Javascript"
// }

// 🛠 DOM Ko Access Karne Ke Liye Methods:
// 🔸 1. document.getElementById("id")
// Ek element ko uske ID se dhoondta hai.

// 🔸 2. document.getElementsByClassName("class")
// Class name se sare matching elements ka HTMLCollection deta hai.

// 🔸 3. document.getElementsByTagName("tag")
// Jaise p, div, ul — ye bhi HTMLCollection deta hai.

// 🔸 4. document.querySelector("selector")
// CSS selector jaisa syntax use karke ek hi element return karta hai.

// 🔸 5. document.querySelectorAll("selector")
// Sare matching elements deta hai (NodeList).

// 🔄 DOM Mein Kya Kya Kar Sakte Ho?
// Action	JavaScript
// Text change	element.innerText = "new text"
// HTML change	element.innerHTML = "<b>bold</b>"
// CSS style	element.style.color = "red"
// Add class	element.classList.add("myClass")
// Remove	element.remove()
// New element	document.createElement("div")
// Append	parent.appendChild(child)
// Events	element.addEventListener("click", function() {})

// let heading = document.getElementById("mainHeading");
// console.log(heading.innerText); // My Header

// let allText = document.getElementsByClassName("myText");
// allText[0].innerText = "Class Changed";

// let tags = document.getElementsByTagName("p");
//   tags[0].innerText = "Tag Changed";

// let first = document.querySelector(".one"); // only first match
//   first.style.color = "blue";

// let boxes = document.querySelectorAll(".box");
// boxes[1].style.background = "yellow"; // second box

// document.getElementById("text").innerHTML = "<b>Bold Text</b>";
// document.getElementById("text").innerHTML = "<h1>Hello</h1>";

// ==================================================================================

// JavaScript Date Object

// let now = new Date()
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getDate());

// Print current date in DD/MM/YYYY format.
// let today = new Date()
// // console.log(today);
// let formmated = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
// console.log(formmated);

// Print only the time in HH:MM:SS format.
// let today = new Date()
// let format = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
// console.log(format);

// Print the day of the week using getDay() and map it to name (e.g., 0 = Sunday).

// let today = new Date()
// let day = today.getDay()

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// Create a small function that shows "Today is: [Day], [Month] [Date], [Year]"

// function showDate(){
//     let today = new Date()
//     let day = today.getDay()
//     let month = today.getMonth() + 1
//     let date = today.getDate()
//     let year = today.getFullYear()
//     console.log(`Today is: ${day}, ${month},${date}, ${year}`);

// }
// showDate()

// let today = new Date()
// let dob = new Date("Dec 21 2002")

// let todayYear = today.getFullYear()
// let dobYear = dob.getFullYear()

// let age = todayYear - dobYear
// console.log(age);

// =====================================================================================
// Current Date & Time Display
// Task: Current date and time ko browser mein display karo.
// let today = new Date()
// console.log(today);

// Only Date Extract Karo
// Task: Sirf date (day/month/year) print karo.
// Output example: 23/05/2025

// let today = new Date()
// console.log(`Today is ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`);

// Only Time Extract Karo
// Task: Sirf current time show karo in format: HH:MM:SS
// let today = new Date()
// console.log(`Time ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);

// Countdown Timer
// Task: Kisi specific future date (jaise New Year) tak kitna time baqi hai wo countdown show karo.
// Output example: 100 days 5 hours 30 minutes 10 seconds left
// function updateCountdown() {

//     let today = new Date()
//     let eid = new Date("June 08 2025")
//     // console.log(eid);
//     let time = eid.getTime() - today.getTime()
//     // console.log(time);
//     if(time <= 0){
//         document.getElementById("countdown").innerText = "Eid ul Adha is here";
//         clearInterval(interval);
//         return;
//     }

// let seconds = Math.floor(time / 1000)
// // console.log(seconds);
// let minutes = Math.floor(seconds / 60)
// // console.log(minutes);
// let hours = Math.floor(minutes / 60)
// // console.log(hours);
// let days = Math.floor(hours / 24)
// // console.log(days);
// let remainingHours = hours % 24
// // console.log(remainingHours);
// let remainingMinutes = minutes % 60
// // console.log(remainingMinutes);
// let remainingSeconds = seconds % 60
// // console.log(remainingSeconds);
// // console.log(`${days} days ${remainingHours} hours ${remainingMinutes} minutes ${remainingSeconds} seconds left`);

// document.getElementById("countdown").innerText =
// `${days} days ${remainingHours} hours ${remainingMinutes} minutes ${remainingSeconds} seconds left`;

// }
// updateCountdown();

// setInterval(updateCountdown, 1000);

// Greetings Based on Time
// Task: Agar time morning hai toh “Good Morning” show karo, afternoon mein “Good Afternoon” etc.
// Time Ranges:
// 5 AM - 12 PM: Good Morning
// 12 PM - 5 PM: Good Afternoon
// 5 PM - 9 PM: Good Evening
// 9 PM - 5 AM: Good Night

// let today = new Date()
// let hours = today.getHours()

// if(hours >= 5 && hours <= 12){
//     console.log("Good Morning");
// }else if(hours >= 12 && hours <= 5){
//     console.log("Good Afternoon");
// }else if(hours >= 5 && hours <= 9){
//     console.log("Good Evening");
// }else{
//     console.log("Good Night");
// }

// Age Calculator
// Task: User se date of birth lo aur uska age calculate karke show karo.

// let userInput = prompt("Enter Your DOB")
// let today = new Date()
// let dob = new Date(userInput)
// let todayYear = today.getFullYear()
// // console.log(todayYear);
// let dobYear = dob.getFullYear()
// // console.log(dobYear);
// let age = todayYear - dobYear
// console.log(age);

// Date Formatter Function
// Task: Ek function banao jo koi bhi date le aur usko format kare: Monday, 23 May 2025

// function format(){
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

//     let today = new Date()
//     let currentDay = days[today.getDay()]
//     let currentMonth = month[today.getMonth()]
//     // console.log(currentDay);

//     console.log(`${currentDay}, ${today.getDate()} ${currentMonth} ${today.getFullYear()}`);

// }
// format()

// Days Passed Since a Date
// Task: Kisi bhi past date se aaj tak kitne din guzray hain, wo calculate karo.

// let today = new Date()
// let eid = new Date("March 1 2025")
// let time = today.getTime() - eid.getTime()
// // console.log(time);
// let second = Math.floor(time / 1000)
// // console.log(second);
// let minutes = Math.floor(second / 60)
// let hours = Math.floor(minutes / 60)
// let day = Math.floor(hours / 24)

// let dayPassed = day
// let remainingHours = hours % 24
// let remainingMinutes = minutes % 60
// let remainingSeconds = second % 60

// console.log(`${dayPassed} days ${remainingHours} hours ${remainingMinutes} minutes ${remainingSeconds} passed`);

// Weekend Checker
// Task: User se koi date lo aur check karo kya wo weekend (Saturday ya Sunday) hai?

// let today = new Date()
// let userInput = prompt("Enter any date: ")
// let day = new Date(userInput).getDay()

// if(day == "0" || day == "6"){
//     console.log("Weekend");
// }else{
//     console.log("Week day");
// }

// How Many Fridays in a Month;
// Task: Kisi bhi month aur year ke liye check karo us month mein kitne Fridays hain.

// let today = new Date();
// let year = new Date().getFullYear();
// let month = new Date().getMonth();

// let totalDays = new Date(year, month + 1,0).getDate()
// // console.log(totalDays);
// let fridayCount = 0;

// for(let i = 1; i <= totalDays; i++){
//     // console.log(i);
//     let friday = new Date(year, month, i).getDay();
//     // console.log(friday);

//     if(friday == 5){
//         fridayCount++;
//     }

// }
// console.log(fridayCount);

// Birthday Reminder
// Task: Ek fixed birthday date lo aur check karo ke wo is saal aaya ya aane wala hai. Aur agar aane wala hai to kitne din baqi hain?

// let today = new Date()
// let birthDayInput = +prompt("Enter your birth date (e.g 21): ");
// let birthMonthInput = +prompt("Enter your birth date (e.g 1-12): ") - 1;
// let currentYear = today.getFullYear()
// let birthday = new Date(currentYear, birthMonthInput, birthDayInput);

// if(birthday < today){
//     console.log("Your birthday Passed");
// }else{
//     let timeDiff = birthday.getTime() - today.getTime()
//     let second = Math.floor(timeDiff / 1000)
//     let minutes = Math.floor(second / 60)
//     let hours = Math.floor(minutes / 60)
//     let day = Math.floor(hours / 24)
//     // console.log(day);

//     let remainingHours = hours % 24
//     let remainingMinutes = minutes % 60
//     let remainingSeconds = second % 60

//     console.log(`${day} ${remainingHours} ${remainingMinutes} ${remainingSeconds} left`);
// }

// ============================================================================================

// Events: link

// function popup(message) {
//  alert(message);
//  }

// document.getElementById('dice').addEventListener('click', function(){
//     let random = Math.floor(Math.random() * 6) + 1;
//     document.getElementById('image').src = `images/dice${random}.png`
// })

// let arr = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png']

// let random = Math.floor(Math.random() * 6) + 1;

// document.getElementById('dice').addEventListener('click',function(){
//     document.getElementById('image').src = arr[random]
// })

// document.getElementById('dice').addEventListener('click',function(){
//     let random = Math.floor(Math.random() * 6) + 1;
//     document.getElementById('images')

// })

// if else condition

// let off = document.getElementById('off')
// let on = document.getElementById('on')

// off.addEventListener('click',function(){
//     document.getElementById('offBulb').style.display = 'none'
//     document.getElementById('onBulb').style.display = 'block'
// })

// on.addEventListener('click',function(){
//     document.getElementById('offBulb').style.display = 'block'
//     document.getElementById('onBulb').style.display = 'none'
// })

// let bulbOn = document.getElementById('bulbOn')
// let bulbOff = document.getElementById('bulbOff')
// let btnOn = document.getElementById('turnOn')
// let btnOff = document.getElementById('turnOff')

// btnOn.addEventListener('click', function(){
//     if(bulbOn.hidden){
//         bulbOn.hidden = false;
//         bulbOff.hidden = true;

//         btnOn.hidden = true;
//         btnOff.hidden = false;
//     }
// })

// btnOff.addEventListener('click', function(){
//     if(bulbOff.hidden){
//         bulbOn.hidden = true;
//         bulbOff.hidden = false;

//         btnOn.hidden = false;
//         btnOff.hidden = true;
//     }
// })

// ==============================================================================
// Slider

// let prev = document.getElementById('prev')
// let next = document.getElementById('next')

// let sliderContainer = document.getElementById('slider-container')

// let images = ['images/slider1.jpg','images/slider2.jpg','images/slider3.jpg','images/slider4.jpg','images/slider5.jpg']

// let currentIndex = 0

// prev.addEventListener('click',function(){
//     if(currentIndex > 0){
//         currentIndex--
//     }else{
//         currentIndex = images.length - 1
//     }
//     updateSlider()
// })

// next.addEventListener('click',function(){
//     if(currentIndex < images.length - 1){
//         currentIndex++
//     }else{
//         currentIndex = 0
//     }
//     updateSlider()
// })

// function updateSlider(){
//     sliderContainer.innerHTML = `
//     <img src="${images[currentIndex]}" alt="" id="slider1">
//     `
// }

// updateSlider()

// ===========================================================================================

//                                     Setting field values

// function setName(){
//     document.getElementById('name').value = "Sumair Khan";
// }

//  function fillCity() {
//  var cityName;
//  var zipEntered = document.getElementById("zip").value;
//  switch (zipEntered) {
//  case "60608" :
//  cityName = "Chicago";
//  break;
//  case "68114" :
//  cityName = "Omaha";
// break;
// case "53212" :
// cityName = "Milwaukee";
// }
//      document.getElementById("city").value = cityName;
//      }

//  Reading and setting paragraph text

//  function expandLoris() {
//  var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which
//     make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
//     distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
//     adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
//     Slow lorises have a toxic bite, a rare trait among mammals.`;
//  document.getElementById("slowLoris").innerHTML = expandedParagraph;
//  }

//  function placeAList() {
//  var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//  document.getElementById("lorisList").innerHTML = listToPlace;
//  }

//  function peekAtContent() {
//  var whatsThere = document.getElementById("content").innerHTML;
//  }

//  function readText() {
//     let para = document.getElementById("myPara");
//     alert(para.textContent);  // yeh text alert box mein show karega
//   }

// swaping image

// function changeImage() {
//     document.getElementById("myImage").src = "/images/on.jpg";
//   }

// ========================================================================================

// Objects

// let student = {
//     name: "sumair khan",
//     age: 22,
//     education: "bachalor"

// }
// student.name = "ali"
// console.log(student.name);

// let student = {
//     name: "sumair khan",
//     age: 22,
//     education: "bachalor",
//     greet: function(){
//         console.log("Hello " + this.name);

//     }

// }

// student.greet()

// let user = {
//     "first name": "sumair",
//     "last name": "khan",
//     age: 22
// }
// console.log(user["first name"]);

// let student = {
//   name: "Grace",
//   age: 22,
//   address: {
//     city: "Lahore",
//     country: "Pakistan"
//   }
// };
// console.log(student.address.city);

// let students = [
//   { name: "Grace", age: 22 },
//   { name: "Ali", age: 23 },
//   { name: "Sara", age: 21 }
// ];

// // console.log(students[0].age);

// // for(let i = 0; i < students.length; i++){
// //     console.log(students[i].name + "-" + students[i].age);

// // }

// students.push({ name: "Zara", age: 24 });
// console.log(students[0].name);

//                                              TASKS

// array of objects

// 🟢 Basic Level
// 1️⃣ Ek array banao jisme teen student objects hon: har student ka name aur age ho.

// let std = [
//     {
//         name: "amir",
//         age: 22
//     },
//     {
//         name: "rizwan",
//         age: 29
//     },
//     {
//         name: "babar azam",
//         age: 21
//     }
// ]

// console.log(std[1].age);
// for(let i = 0; i < std.length; i++){
//     console.log(std[i].name);
// }

// 2️⃣ Array ke pehle student ka name console me print karo.
// Hint: students[0].name

// let std = [
//     {
//         name: "amir",
//         age: 22
//     },
//     {
//         name: "rizwan",
//         age: 29
//     },
//     {
//         name: "babar azam",
//         age: 21
//     }
// ]

// console.log(std[1].age);
// for(let i = 0; i < std.length; i++){
//     console.log(std[i].name);
// }

// 3️⃣ Array ke last student ki age change karke 25 kar do.

// let std = [
//     {
//         name: "amir",
//         age: 22
//     },
//     {
//         name: "rizwan",
//         age: 29
//     },
//     {
//         name: "babar azam",
//         age: 21
//     }
// ]

//  std[2].age = 25
//  console.log(std[2].age);

// 4️⃣ Array me ek naya student add karo jiska name "Sara" aur age 22 ho.
// let std = [
//     {
//         name: "amir",
//         age: 22
//     },
//     {
//         name: "rizwan",
//         age: 29
//     },
//     {
//         name: "babar azam",
//         age: 21
//     }
// ]

// std.push({name: "sara", age: 11})
// console.log(std);

// 6️⃣ Array ke har student ka name print karne ke liye loop use karo.

// let std = [
//     {
//         name: "amir",
//         age: 22
//     },
//     {
//         name: "rizwan",
//         age: 29
//     },
//     {
//         name: "babar azam",
//         age: 21
//     }
// ]

// console.log(std[1].age);
// for(let i = 0; i < std.length; i++){
//     console.log(std[i].name);
// }

// 7️⃣ Pehle student ka age 1 se increase karo.

// let std = [
//     {
//         name: "amir",
//         age: 22
//     },
//     {
//         name: "rizwan",
//         age: 29
//     },
//     {
//         name: "babar azam",
//         age: 21
//     }
// ]

// std[1].age += 1
// console.log(std[1].age);

// 8️⃣ Check karo kya array me koi student ka name "Sara" hai.

// let std = [
//     {
//         name: "amir",
//         age: 22
//     },
//     {
//         name: "sara",
//         age: 29
//     },
//     {
//         name: "babar azam",
//         age: 21
//     }
// ]

// for(let i = 0; i < std.length; i++){
//     // console.log(std[i].name);
//     // if(std[i].name == "sara"){
//     //     console.log("yes");
//     //     break
//     // }else{
//     //     console.log("no");
//     //     break

//     // }
//     // some method
//     // if(std.some(student => student.name === "sara")){
//     //     console.log("yes");
//     //     break;
//     // }else{
//     //     console.log("no");
//     //     break;
//     // }
// }

//  Advanced Questions
// 9️⃣ Array ke sab students ki average age find karo.
// Hint: Loop karke sum nikalo phir divide by length.

// 10️⃣ Ek naya array banao jisme sirf students ke names hon.
// Hint: map method.

// 11️⃣ Array me se us student ka object delete karo jiska name "Ali" hai.
// Hint: filter method se naya array banao.

// 12️⃣ Array me se students filter karo jinki age 21 se zyada hai.
// Hint: filter

// 13️⃣ Sab students ke name uppercase me convert karo.
// Hint: map + .toUpperCase()

// 15️⃣ Ek function banao jo array of students le aur sirf un students ko return kare jinki age even number hai.
// Hint: function + filter

// 16️⃣ Array me se pehla student find karo jiska name "Ali" hai.
// Hint: find method.

// 21️⃣ Ek complex array banao jisme students ke saath unke subjects ka bhi array ho (e.g. {name: "Ali", age:20, subjects: ["Math","English"]}).
// Hint: Nested array.

// 24️⃣ Array me se student find karo jiske subjects me "English" ho.
// Hint: find + includes

// 27️⃣ Ek function banao jo array of students ko le aur unka average age return kare.
// Hint: function + reduce

// 28️⃣ Array me se check karo kya sab students ki age 18 se zyada hai.
// Hint: every

// 29️⃣ Array me se koi student aisa hai kya jiska subjects me "Physics" ho?
// Hint: some + includes

// ==============================================================================

// local storage

// setitem
// localStorage.setItem("name", "sumair khan")
// localStorage.setItem("age", 21)
// localStorage.setItem("color", "pink")

// getitem

// let user = localStorage.getItem("name")
// console.log(user);

// remove item
// localStorage.removeItem("name")

// localStorage.clear()

// get by key

// let key = localStorage.key(1)
// console.log(key);

// set store object

// let store = {name: "sumair khan", age: 22, class: "matric"}
// // console.log(store);
// localStorage.setItem("user",JSON.stringify(store))

// get object

// let getstd = JSON.parse(localStorage.getItem("user"))
// console.log(getstd.name);
// console.log(getstd.age);

// store array

// let color = ["red", "green", "yellow", "pink"];
// localStorage.setItem("color", JSON.stringify(color))

// let getcolor = JSON.parse(localStorage.getItem("color"))
// console.log(getcolor);

// ========================================================================================
// map

// let arr1 = [1,2,3,4,5,6,7]
// // let arr = ["1","2",3]
// let newArr1 = arr1.map((ele,index,sums)=>{
//     console.log(ele, index,sums);
// })

// let arr = ["1","2",3]
// let newArr = arr.map((ele,index,sums)=>{
//     return (ele, index,sums);
// })
// console.log(newArr);

// const arr = ["1","2","3","4","5"]
// let newArr = arr.map((curEle,index,array)=>{
//        return `the value is ${curEle} Index No ${index} belongs to ${array}`
//  })
//  console.log(newArr)

// Ek array [1, 2, 3, 4] ko map() ka use karke double karo.

// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers.map((ele)=>{
//     return ele * 2
// })
// console.log(newArr);

// Ek array of strings ko map() se uppercase mein convert karo.
// let arr = ["apple","mango","peach"]
// let newArr = arr.map((ele)=>{
//    let capital =  ele.toUpperCase()
//    return capital
// })
// console.log(newArr);

// Ek object array lo {name: 'Ali', age: 20} jaisa, aur map() ka use karke sirf name ka array banao.
// let obj = [
//     {name: 'Ali', age: 20},
//     {name: 'Ahmed', age: 25},
//     {name: 'Sara', age: 22}
// ];
// let newArr = obj.map((ele)=>{
//     return ele.name
// })
// console.log(newArr);

// Ek map() likho jo har item ke sath uska index bhi return kare format "value - index".

// let arr = ["apple","mango","peach"]
// let newArr = arr.map((ele,ind)=>{

//    let capital =  ele.toUpperCase()
//    return {capital, ind}
// })
// console.log(newArr);

// ====================================================================================

// Ek array numbers = [2, 5, 8, 11, 4, 9] se sirf 5 se bade numbers filter karo.

// let arr = [2, 5, 8, 11, 4, 9]
// let newArr = arr.filter((ele)=>{
//     return ele > 5
// })
// console.log(newArr);

// Ek array words = ["apple", "banana", "kiwi", "mango", "pear"] se sirf wo words filter karo jinki length 5 se zyada ho.

// let word = ["apple", "banana", "kiwi", "mango", "pear"]
// let newArr = word.filter((ele)=>{
//     return ele.length > 5
// })
// console.log(newArr);

// Ek array of objects:
// let users = [
//   { name: "Ali", active: true },
//   { name: "Sara", active: false },
//   { name: "Omar", active: true }
// ]
// Isme se sirf wo users filter karo jo active hain.

// let newArr = users.filter((ele)=>{
//     if(ele.active){
//         console.log(ele.name,ele.active);
//     }
// })

// Ek array of objects:
// let products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ]
// // Sirf wo products filter karo jinka price 500 se kam ya equal ho.
// let newArr = products.filter((ele)=>{
//     if(ele.price < 500){
//         console.log(ele.name);
//     }
// })

// =================================================================================
// find

// Ek array numbers = [5, 12, 8, 130, 44] hai. find() ka use karke pehla number dhoondo jo 10 se bada ho.

// let numbers = [5, 12, 8, 130, 44]
// let newArr = numbers.find((ele)=>{
//     return ele > 10
// })
// console.log(newArr);

// Ek array fruits = ["apple", "banana", "mango", "peach"] hai. find() ka use karke pehla fruit dhoondo jo "m" se start hota ho.

// let  fruits = ["apple", "banana", "mango", "peach"]
// let newArr = fruits.find((ele)=>{
//     return ele.startsWith("m");
// })
// console.log(newArr);

// Ek array of objects:
// let students = [
//   { name: "Ali", score: 45 },
//   { name: "Sara", score: 75 },
//   { name: "Omar", score: 60 }
// ];
// find() ka use karke pehla student dhoondo jiska score 50 se zyada ho.

// let students = [
//   { name: "Ali", score: 45 },
//   { name: "Sara", score: 75 },
//   { name: "Omar", score: 60 }
// ];

// let newArr = students.find((ele)=>{
//     return ele.score > 50
// })
// console.log(newArr);

// Ek array of users:
// let users = [
//   { id: 1, username: "sumair" },
//   { id: 2, username: "ahmed" },
//   { id: 3, username: "hira" }
// ];
// // find() ka use karke user dhoondo jiska id 3 ho.

// let newArr = users.find((ele)=>{
//     return ele.id == 3
// })
// console.log(newArr);

// ====================================================================================
// reduce

// Ek array nums = [1, 2, 3, 4] ka sum calculate karo reduce() ka use karke.

// let nums = [1, 2, 3, 4]
// let sum = nums.reduce((ele,num)=>{
//   return ele + num
// })

// console.log(sum);

// Ek array words = ["Hello", "World"] ko ek hi string me join karo "Hello World" banane ke liye.

// let words = ["Hello", "World"]
// let newArr = words.reduce((ele,num)=>{
//    return `${ele} ${num}`
// })
// console.log(newArr);

// 5. Ek array of objects:
// reduce() ka use karke total price nikalna hai.
// let items = [
//   { name: "Apple", price: 100 },
//   { name: "Mango", price: 80 },
//   { name: "Banana", price: 60 }
// ];

// let totalPrice = items.reduce((acc, ele) => {
//     return acc + ele.price;
// }, 0); // 0 is starting value for acc

// console.log(totalPrice); // Output: 240

// // Ek array:
// let votes = ["yes", "no", "yes", "yes", "no"];
// // reduce() ka use karke count karo kitne "yes" aur kitne "no" hain (output object form me ho).
// let newArr = votes.reduce((ele,acc)=>{
//     return ele == "yes"
// },0)

// console.log(newArr);

// let votes = ["yes", "no", "yes", "yes", "no"];

// let voteCount = votes.reduce((acc, ele) => {
//     if (ele === "yes") {
//         acc.yes++;
//     } else if (ele === "no") {
//         acc.no++;
//     }
//     return acc;
// }, { yes: 0, no: 0 }); // initial value object

// console.log(voteCount); // { yes: 3, no: 2 }

// ========================================================================================

// this keyword

// console.log(this);

// let obj = {
//     name: "Ali",
//     greet(){
//         console.log(this.name);
//     }
// }
// obj.greet()

// function showThis() {
//   console.log(this);
// }
// showThis();

// ============================================================================
// foreach

// 3️⃣ Practice Tasks

// Task 1
// Ek array numbers = [1, 2, 3, 4, 5] hai. forEach() ka use karke har number ka square print karo.

// let numbers = [1, 2, 3, 4, 5]
// numbers.forEach((ele)=>{
//     console.log(ele * ele);

// })

// Task 2
// Ek array students = ["Ali", "Sara", "Ahmed"] hai. forEach() ka use karke print karo:
// Student 1: Ali, Student 2: Sara, Student 3: Ahmed

// let students = ["Ali", "Sara", "Ahmed"]
// students.forEach((ele)=>{
//     console.log(ele);

// })

// Task 3
// Ek array prices = [100, 200, 300] hai. forEach() ka use karke har price me 10% tax add karo aur naya array print karo.

// let prices = [100, 200, 300]
// let newPrices = []
// prices.forEach((ele)=>{
// let tex = ele + (ele  * 0.10)
// newPrices.push(tex)
// })
// console.log(newPrices);

// Task 4
// Ek array words = ["apple", "banana", "cherry"] hai. forEach() ka use karke har word ko uppercase me print karo.
// let words = ["apple", "banana", "cherry"]
// words.forEach((ele)=>{
//     console.log(ele.toUpperCase());

// })

// ====================================================================================

// Destructuring

// let fruits = ["apple", "mango", "banana"];
// // let fruit1 = fruits[0]
// // let fruit2 = fruits[1]
// let [f1,f2,f3] = fruits
// // console.log(fruit1,fruit2);
// console.log(f1,f2,f3);

// let colors = ["red", "green", "blue"];
// let [first, , third] = colors
// console.log(first);
// console.log(third);

// let colors = ["red", "green", "blue"];
// let [first, , third] = colors;

// console.log(first); // red
// console.log(third); // blue

// let numbers = [10];
// let [num1, num2 =20]= numbers
// console.log(num1);
// console.log(num2);

// let a = 5, b = 10;
// [a,b]= [b,a]
// console.log(a,b);

// let person = { name: "Ali", age: 25, city: "Karachi" };

// // Normal way
// // let name = person.name;
// // let age = person.age;

// let {name,age} = person
// console.log(name);
// console.log(age);

// let car = { brand: "Toyota", model: "Corolla" };
// let {brand: carBrand, model: carModel} = car
// console.log(carBrand);
// console.log(carModel);

// let user = { name: "Sumair" };

// let { name, age = 18 } = user;

// console.log(name); // Sumair
// console.log(age);  // 18 (default value)

// let student = {
//   name: "Sara",
//   marks: {
//     math: 90,
//     english: 85
//   }
// };

// let {marks: {math,english}} = student
// console.log(math);
// console.log(english);

// function pic({name,age}){
//       console.log(`Name: ${name}, Age: ${age}`);
// }

// let userData = { name: "Hassan", age: 30 };
// console.log(userData);

// =========================================================================================

// spread and rest operator

// copy arr
// let arr = [1,2,3,4]
// let spread = [...arr]
// console.log(spread);

// marge arr
// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,4]
// let newArr = [...arr1, ...arr2]
// console.log(newArr);

// marge obj
// let obj1 = { name: "Ali" };
// let obj2 = { age: 20 };
// let marge = { ...obj1, ...obj2}
// console.log(marge);

// shallow copy
// let original = [10, 20, 30];
// let copy = [...original]

// copy.unshift(40)
// console.log(original);
// console.log(copy);

// ==============================================================================
// REST OPERATOR

// ye ab dekho mne arr pass krne ki jaga rest operator pass kr diye
// function sum(...numbers){
//     return numbers.reduce((acc, num)=> acc + num, 0)
// }
// console.log(sum(1,2,3,4,5));

// arr Destructuring
// let [first, ...rest] = [10, 20, 30, 40];
// console.log(first);
// console.log(rest);

// obj Destructuring
// let person = { names: "Ali", age: 25, city: "Karachi" };
// let {names, ...otherInfo } = person;
// console.log(names);
// console.log(otherInfo);

// Task 1:
// Ek array [1, 2, 3] aur [4, 5] ko Spread use karke merge karo.
// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,4]
// let newArr = [...arr1, ...arr2]
// console.log(newArr);

// Task 2:
// Ek object {name: "Ali"} aur {age: 20} ko Spread use karke ek me combine karo.
// marge obj
// let obj1 = { name: "Ali" };
// let obj2 = { age: 20 };
// let marge = { ...obj1, ...obj2}
// console.log(marge);

// Task 3:
// Ek function banao jo Rest operator se multiple arguments lega aur unka sum return karega.
// function sum(...numbers){
//     return numbers.reduce((acc,num)=> acc + num, 0)
// }
// console.log(sum(1,2,3,4,5));

// Task 4:
// Array destructuring karke first element ko alag variable me lo, baaki ko ek alag array me store karo (Rest use karke).
// let colors = ["pink", "green", "blue", "white"]
// let [first, ...rest] = colors
// console.log(first);
// console.log(rest);

// Task 5:
// Ek object ke first property ko alag variable me lo aur baaki properties ko ek object me store karo (Rest use karke).

// let person = { names: "Ali", age: 25, city: "Karachi" };
// let {names, ...sums} = person
// console.log(names);
// console.log(sums);

// =====================================================================================
// Synchronous vs Asynchronous JavaScript

// Task 1:
// Ek program banao jo:
// Pehle "Downloading..." print kare.
// 2 seconds baad "Download Complete!" print kare.
// Fir "Processing File..." print kare.

// setTimeout(function show(){
//     console.log("Downloading...");

// }, 1000)

// setTimeout(function show(){

// console.log("Processing File...");

// }, 2000)

// setTimeout(function show(){
//     console.log("Download Complete");

// }, 5000)

// Task 2:
// Ek function delayMessage banao jo parameter le message ka aur delay ka (seconds), aur delay ke baad message print kare.

// function delayMessage(message,delayInSeconds){
//     setTimeout(()=>{
//                 console.log(`hello ${message}`);

//     }, delayInSeconds * 1000)
// }
// delayMessage("Sumair", 2)

// Task 3:
// Synchronous example create karo jisme 3 console.log statements ho, aur ek asynchronous task setTimeout ke saath beech mein ho — output ka order predict karo.

// console.log("Start");
// setTimeout(()=>{
//     console.log("Hello world");
// }, 2000)
// console.log("end");

// setinterval tasks

// const timer = setInterval(()=>{
//         console.log("Ye har 2 sec baad aayega.");
// }, 2000)

// setTimeout(()=>{
// clearInterval(timer)
// console.log("stop ho gya");

// }, 6000)

// Task 1 — Countdown Timer (Reverse)

// Ek number input lo (for example 5) aur setTimeout ka use karke har second me countdown print karo jab tak 0 na ho jaye.
// Example:

// let userInput = +prompt("Enter number")
// let timeLeft = userInput
// const timer = setInterval(()=>{
//      if(timeLeft > 0){
//         console.log(timeLeft);
//         timeLeft--
//      }else{
//         clearInterval(timer)
//         console.log("go");
//      }
// },1000)

// Task 2 — Message Sequence
// 3 alag-alag messages ko different time delays ke saath print karo:
// Hello → 1 second baad
// How are you? → 3 second baad
// Bye! → 5 second baad

// setTimeout(()=>{
//     console.log("Hello");
// }, 1000)

// setTimeout(()=>{
//     console.log("How are you");
// }, 3000)

// setTimeout(()=>{
//     console.log("Bye");
// }, 5000)

// Task 1 — Auto Stop Clock
// Har 1 second me current time print karo, lekin 10 second ke baad stop ho jaye.

// let curTime = new Date
// console.log(curTime.getHours(), curTime.getMinutes(), curTime.getSeconds());

// console.log(`${hours}:${minutes}:${seconds}`);

// const timer = setInterval(() => {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer);
// }, 10000);

// Har 2 second me ek multiplication table ka next line print karo (for example table of 5), jab tak 10 lines print na ho jaye.

// let table = 5
// let lines = 1

// const timer = setInterval(()=>{
//     console.log(`${table} * ${lines} = ${table * lines}`);
//     lines++;

//     if(lines > 10){
//         clearInterval(timer)
//     }

// },2000)

// ======================================================================================
// Task 1: Simple Fetch & Log
// API call karo https://jsonplaceholder.typicode.com/todos/1, async/await use karke response log karo.

// async function fetchApi() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let res = await data.json()
//     console.log(res);
// }
// fetchApi()

// Task 2: Error Handling
// Same API se fetch karo — aur agar network ya response me koi error aaye to try...catch se handle karo (log "Error occurred").

// async function fetchApi() {
//     try {
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let res = await data.json()
//     console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchApi()

// Task 3: Sequential Promises
// Do async tasks define karo (delay(2s) aur delay(1s) returning Promise). Inko sequentially run karo ar logs karo:
// "First done"
// then "Second done"
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// delay(2000) // 2s wait
//     .then(() => {
//         console.log("First done");
//         return delay(1000); // 1s wait
//     })
//     .then(() => {
//         console.log("Second done");
//     });

// Task 4: Parallel Using Promise.all
// 3 URLs hain, async fetch se data lete ho, inko simultaneously fire karo — Promise.all ke sath.

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3"
// ];

// async function fetchSequential() {
//     let url1 = await fetch(urls[0]).then(r => r.json())
//     console.log(url1);

//     let url2 = await fetch(urls[1]).then(r => r.json())
//     console.log(url2);

//     let url3 = await fetch(urls[2]).then(r => r.json())
//     console.log(url3);
// }
// fetchSequential()

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3"
// ];

// async function fetchParallel() {
//     const promises = urls.map(url => fetch(url).then(r => r.json()));

//     const results = await Promise.all(promises);

//     console.log(results[0]); // first API result
//     console.log(results[1]); // second API result
//     console.log(results[2]); // third API result
// }
// fetchParallel();

// Task 5: Dynamic Async Loop
// Array of URLs lo aur for…of loop me sequentially super clean await coding se data fetch karo aur print karo.

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3"
// ];

// async function fetchSequentially() {
//     for (const url of urls) {
//         const response = await fetch(url);  // wait until this fetch completes
//         const data = await response.json(); // convert response to JSON
//         console.log(data.title); // print post title
//     }
// }

// fetchSequentially();

// ================================================================================
// promises

// let promises =  new Promise((resolve,reject)=>{
//      let success = true
//      if(success){
//         resolve("ho gya");
//      }else{
//         reject("Kuch bura ho gaya!");

//      }
// })
// promises.then(values => console.log(values)).catch(error => console.log(error))

// let p = new Promise((resolve,reject)=>{
//     let success = false
//     if(success){
//         resolve("promise resolve ho gya");
//     }else{
//         reject("promise reject")
//     }
// })
// .then((res)=> console.log(res)).catch((err)=> console.log(err))

// let p = new Promise((resolve,reject)=>{
//     let success = false
//     if(success){
//         resolve("promise resolve ho gya");
//     }else{
//         reject("promise reject")
//     }
// })
// .then((res)=> console.log(res)).catch((err)=> console.log(err)).finally(()=> console.log("promise end"))

//  Advanced Methods
// promise all

// let p1 = Promise.resolve("1st done")
// let p2 = Promise.resolve("2st done")
// let p3 = Promise.resolve("3st done")

// Promise.all([p1,p2,p3])
// .then((res)=> console.log(res)).catch((err)=> console.log(err))

// let p1 = new Promise((res)=> setTimeout(()=> res("1st done"),3000))
// let p2 = new Promise((res)=> setTimeout(()=> res("2st done"),1000))
// let p3 = new Promise((res)=> setTimeout(()=> res("3st done"),2000))

// Promise.race([p1,p2,p3])
// .then((result)=> console.log(result)
// )

// Task 1: delay(ms) function banao jo Promises use karke ms milliseconds baad resolve ho.
//  delay(2000).then(() => console.log("2 seconds ho gaya"));

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello world");
//     }, 2000);
// })
// .then((res)=> console.log(res)).catch((err)=> console.log(err))

// Task 2: Promise banake 50% success aur 50% failure simulate karo (resolve or reject randomly).

// let p = new Promise((resolve,reject)=>{
//     let success = Math.random() > 0.5
//     if(success){
//         resolve("promise resolve ho gya");
//     }else{
//         reject("promise reject")
//     }
// })
// .then((res)=> console.log(res)).catch((err)=> console.log(err)).finally(()=> console.log("promise end"))

// Task 3: 3 Promises parallel chalakar Promise.all() se result print karo, agar koi fail ho to .catch() use karo.

// let p1 = Promise.resolve("1st done")
// let p2 = Promise.resolve("2st done")
// let p3 = Promise.resolve("3st done")
// Promise.all([p1,p2,p3])
// .then((res)=> console.log(res)).catch((err)=> console.log(err))

// Task 4: Sequential chaining— promise1().then(...) fir promise2() call karo.

// function promise1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 1 done")
//         }, 1000);
//     })
// }

// function promise2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise 2 done")
//         }, 1500);
//     })
// }

// promise1().then((res)=> {
//     console.log(res);
//     return promise2()
// }
// ).then((res2)=> {
//     console.log(res2);
// }
// ).catch((err)=> console.log(err)
// )

// Task 5: Promise.race() example banao jisme jo Promise sabse pehle resolve ya reject ho, usko handle karo.

// let p1 = Promise.resolve("1st done")
// let p2 = Promise.resolve("2st done")
// let p3 = Promise.reject("3st done")
// Promise.race([p1,p2,p3])
// .then((res)=>console.log(res)).catch((err)=>console.log(err))

// Task 6: 3 promises banao (2 resolve, 1 reject) aur Promise.all use karo → dekho kya hota hai.

// let p1 = new Promise((res)=> setTimeout(()=> res("1st done"),3000))
// let p2 = new Promise((res)=> setTimeout(()=> res("2st done"),1000))
// let p3 = new Promise((res)=> setTimeout(()=> res("3st done"),2000))

// Promise.all([p1,p2,p3])
// .then((result)=> console.log(result)
// )

// Task 7: 3 promises banao different timeouts ke sath aur Promise.race use karo → pehle wala ka result console me dikhao.

// let p1 = new Promise((res)=> setTimeout(()=> res("1st done"),3000))
// let p2 = new Promise((res)=> setTimeout(()=> res("2st done"),1000))
// let p3 = new Promise((res)=> setTimeout(()=> res("3st done"),2000))

// Promise.race([p1,p2,p3])
// .then((result)=> console.log(result)
// )
// ==========================================================================================

// try catch

// let x = 10 + y
// console.log(x);

// try {
//     let x = 10 + y
//     console.log("code chala");
// } catch (error) {
//     console.log("error mila", error.message);
// }

// let jsonData = `{"name":"Sumair"}`
// try {
//     const user = JSON.parse(jsonData)
//     console.log("User name", user.age);
// } catch (error) {
//     console.log(error.message);
// }

// try {
//   console.log("API call kar raha ho...");
//   throw new Error("Network fail ho gaya");
// } catch (error) {
//   console.log("Catch me error:", error.message);
// } finally {
//   console.log("Finally: API call end ho gayi (success ya fail dono me chalega)");
// }

// Task 1
// Ek code likho jisme divide by zero check karo. Agar koi number 0 se divide ho raha ho to error throw karo aur catch me handle karo.

// try {
//     let divide = 10/0
//     throw new Error("divide failed")
// } catch (error) {
//     console.log("error mila", error.message);

// }

// try {
//   let numerator = 10;
//   let denominator = 0;

//   if (denominator === 0) {
//     throw new Error("Divide by zero is not allowed!");
//   }

//   let result = numerator / denominator;
//   console.log("Result:", result);

// } catch (error) {
//   console.log("Error mila:", error.message);
// }

// Task 2
// Ek function parseUserData(json) banao jo JSON string le aur usko parse kare. Agar galat JSON ho to error catch karke "Invalid JSON" print karo.

// function parseUserData(json){
//     try {
//    let jsonData = JSON.parse(json)
//    console.log("Data pass", jsonData);
//     } catch (error) {
//         console.log("error mila", error.message);
//     }
// }

// // parseUserData(`{"name":"Sumair"}`)
// parseUserData(`{name:"Sumair"}`)

// Task 3
// API call simulate karo (Promise + setTimeout use karke). Agar success ho to "Data received" print karo, agar fail ho to error catch karke "API failed" print karo, aur finally me "Request finished" print karo.

// async function fakeApiCall() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = Math.random() > 0.5
//             if (success) {
//                 resolve("data received")
//             }else{
//                 reject("api failed")
//             }
//         }, 2000);
//     })
// }

// async function apiCall() {
//     try {
//         let data = await fakeApiCall();
//         console.log(data);

//     } catch (error) {
//         console.log("error message", error.message);
//     }
//     // finally{
//     //     console.log("request finished");

//     // }
// }
// apiCall()

// ================================ database project =========================================
// ================================ supabase sign up ==================================

// console.log(client);

let signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.getElementById("gender").value;
    let terms = document.getElementById("terms").value;
    let newsletter = document.getElementById("newsletter").value;
    // console.log(fullname,email,password,phone,country,birthdate,gender,terms,newsletter);

    // sign up with supabase
    const { data, error } = await client.auth.signUp({
      email: email,
      password: password,
      options: {
      emailRedirectTo: 'login.html'
    }
    });
    // let user = data.user.id;
    // console.log("user id", user);
    
    if (error) {
      console.log(error.message);
    } else {
      console.log("data", data);
      alert("we have sent you a confirmation email");
    }

    // create object of data
    let userData = {
      fullname,
      email,
      phone,
      country,
      birthdate,
      gender,
      terms,
      newsletter,
    };
    // insert data in table
    const { error: userError } = await client
      .from("practiceSignUp")
      .insert([userData]);
    if (userError) {
      console.log(userError.message);
    }

    window.location.href = "login.html";

    // reset form
    signupForm.reset();
  });
}

// ================================ supabase login ====================================

let loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    // console.log(email,password);
    const { data, error } = await client.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if(error){
        console.log(error.message);
        alert("Invalid credentials")
    }else{
        console.log("data", data);
        window.location.href = "dashboard.html"
        loginForm.reset()
    }

  });
}

// ================================ supabase Get Current User ===============================

// Check karna ho ke kaun login hai:
// const { data: { user } } = await client.auth.getUser();
// console.log(user);
// console.log(user.identities[0].identity_data.sub);

// ================================ supabase Get Current Session  ============================

// const { data, error } = await client.auth.getSession()
// console.log(data);
// // console.log(data.session.access_token);
// console.log(data.session.user.id);

// 👉 getSession() ka main kaam ye hai ke aapko pata chale abhi kaun user login hai aur uske session (tokens) ki details kya hain.
//  Ye ziada tar use hota hai:
// Page reload ke baad login status check karne ke liye
// Protected pages/ routes secure karne ke liye

// ================================ supabase Logout   ============================

let logoutBtn = document.getElementById('logoutBtn')
if(logoutBtn){
    logoutBtn.addEventListener('click', async (e)=>{
        e.preventDefault()
        const { error } = await client.auth.signOut()
        if(error){
            console.log(error.message);
        }
        window.location.href = "login.html"
    })
}

// ================================ supabase forgot password   ============================

let forgotPassword = document.getElementById('forgotPassword')
if(forgotPassword){
    forgotPassword.addEventListener('submit', async (e)=>{
        e.preventDefault()
        let email = document.getElementById('email').value
        //   console.log(email);
        const { data, error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://127.0.0.1:5500/reset.html',
        })
          if (error) {
            console.log(error.message);
          }else{
            console.log(data);
            alert("we have sent you a reset password email")
            forgotPassword.reset()
          }
    })
}

// ================================ supabase reset password {  ============================

let resetForm = document.getElementById('resetForm')
if(resetForm){
  resetForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    let newPassword = document.getElementById('newPassword').value
    let confirmPassword = document.getElementById('confirmPassword').value
    // console.log(newPassword);
    // console.log(confirmPassword);
    if(newPassword === confirmPassword){
      const { data, error } = await client.auth.updateUser({
      password: newPassword
  })
  if(error){
    console.log(error.message);
    alert("failed to reset password")
  }else{
    console.log(data);
    alert("password reset successfully")
    resetForm.reset()
    window.location.href = "login.html"
  }
    }
    
  })
}

// ================================ supabase insert  ============================

let addTodo = document.getElementById('addTodo')
if(addTodo){
  addTodo.addEventListener('submit', async (e)=>{
    e.preventDefault()
    let todoValue = document.getElementById('todoValue').value
    // console.log(todoValue);
    const { error } = await client
  .from('practiceTodo')
  .insert({  todoData: todoValue })
  if(error){
    console.log(error.message);
    alert("failed to add todo")
  }else{
    alert("todo added successfully")
    addTodo.reset()
    fetchTodo()
  }
  })
}

// ================================ supabase fetch  ============================

let todoList = document.getElementById('todoList')
async function fetchTodo() {
  const { data, error } = await client.from('practiceTodo').select('*');
    if (error) {
      console.log(error.message);
    } else {
      // console.log(data);
      todoList.innerHTML = '';

      data.forEach((item) => {
        todoList.innerHTML += `
        <li class="todo-item">
                            <input type="checkbox" class="todo-checkbox">
                            <span class="todo-text">${item.todoData}</span>
                            <div class="todo-actions">
                                <button class="edit-btn" onclick="edit(${item.id})"><i class="fas fa-edit"></i></button>
                                <button class="delete-btn" onclick="deleteTodo(${item.id})"><i class="fas fa-trash"></i></button>
                            </div>
                        </li>
        `
      });
    }
}
fetchTodo()

// ================================ supabase delete  ============================

async function deleteTodo(id) {
  const { data, error } = await client
  .from('practiceTodo')
  .delete()
  .eq('id', id)
  if(error){
    console.log(response.error.message);
    alert("failed to delete todo")
    return
  }else{
    alert("todo deleted successfully")
    console.log(data);
    fetchTodo()
  }

}

// ================================ supabase update  ============================

async function edit(id) {
  let newTodo = prompt("Enter new todo")
  if(!newTodo){
    alert("todo is required")
    return
  }else{
    const { error } = await client
  .from('practiceTodo')
  .update({ todoData: newTodo })
  .eq('id', id)
  if(error){
    alert("failed to update todo")
    return
  }else{
    // alert("todo updated successfully")
    console.log("todo updated successfully");
    fetchTodo()
  }
  }
  
}


// ================================ supabase upload image in bucket  ============================


let ImageInsert = document.getElementById('ImageInsert')
if(ImageInsert){
  ImageInsert.addEventListener('click', async (e)=>{
  e.preventDefault()
    let fileInput = document.getElementById('fileInput').files[0]
// console.log(fileInput);

const { data, error } = await client
  .storage
  .from('practiceImage')
  .upload(`todos/${Date.now()}-${fileInput.name}`, fileInput, {
    cacheControl: '3600',
    upsert: false
  })
  // console.log(data.path);
  // let userId = data.id
  // console.log(userId);
  

  if(error){
    console.log(error.message);
  }else{
    // console.log("upload success", data);

    // ============================== get public url ===================================

   const { data: publicUrlData } = client
  .storage
  .from('practiceImage')
  .getPublicUrl(data.path)
  //  console.log("Public URL:", publicUrlData.publicUrl)

  // =============================== insert image url in table ============================

  let imageUrl = publicUrlData.publicUrl
  let oldPath = data.path
  const { error } = await client
  .from('practiceTodo')
  .insert({ imageUrl: imageUrl,
  imagePath: oldPath })

  if(error){
    console.log(error.message);
  }else{
    console.log("image url inserted successfully");
    
  }
  }

})
}


// ================================ supabase fetch image  ============================

let fetchImage = document.getElementById('fetchImage')

async function fetchTodoImage() {
  const { data, error } = await client
  .from('practiceTodo')
  .select("*")
  if(error){
    alert("Error on fetch images")
  }else{
    // console.log(data);
    fetchImage.innerHTML = "";
    data.forEach((items)=>{
      fetchImage.innerHTML += `
      <img src="${items.imageUrl}" alt="">
       <div class="preview-actions">
                <button class="edit-btn" onclick="editImage('${items.imagePath}')"><i class="fas fa-edit"></i></button>
                <button class="delete-btn" onclick="deleteImage('${items.imagePath}')"><i class="fas fa-times"></i></button>
            </div>
      `
    })
    
  }
}

fetchTodoImage()


// ===================== supabase Update Image (replace old with new)  ============================


async function editImage(oldPath) {
  // 1. File picker
  let newFileInput = document.createElement("input");
  newFileInput.type = "file";
  newFileInput.accept = "image/*";
  newFileInput.click();

  newFileInput.onchange = async () => {
    let file = newFileInput.files[0];
    if (!file) return;

    // 2. New path generate karna
    let newPath = `todos/${Date.now()}-${file.name}`;

    // 3. Supabase bucket me upload (naye path pe)
    const { data, error } = await client
      .storage
      .from('practiceImage')
      .upload(newPath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.log("Upload failed:", error.message);
      return;
    }

    console.log("Image uploaded successfully:", data);

    // 4. Naya public URL lena
    const { data: publicUrlData } = client
      .storage
      .from('practiceImage')
      .getPublicUrl(newPath);

    let newUrl = publicUrlData.publicUrl;

    // 5. Table me imageUrl + imagePath update karna
    const { error: updateError } = await client
      .from('practiceTodo')
      .update({
        imageUrl: newUrl,
        imagePath: newPath
      })
      .eq('imagePath', oldPath);

    if (updateError) {
      console.log("DB update error:", updateError.message);
    } else {
      console.log("Database updated with new image URL & path");

      // 6. Old image ko bucket se delete karna
      await client.storage.from('practiceImage').remove([oldPath]);

      fetchTodoImage(); 
    }
  };
}





// ===================== supabase Delete Image  ============================

async function deleteImage(path) {
  const { error } = await client.storage.from('practiceImage').remove([path]);
  if (error) {
    console.log("Delete error:", error.message);
  } else {
    console.log("Image deleted from storage");

    const { error: dbError } = await client
      .from('practiceTodo')
      .delete()
      .eq('imagePath', path);
    if (dbError) {
      console.log("DB delete error:", dbError.message);
    } else {
      console.log("Image record deleted from database");
      fetchTodoImage(); 
    }
  }  
}























///////////////////////////////////////////

// Synchronous ASynchronous
// ek ec commerce store banana hay jis mein products ko array of objects mein store karna hai.
// jis bhi product per click kare wo product local storage mein store ho jaye.or iski complete details show ho jaye.next page per
// add to cart banana hy jis mein products ko local storage se uthana hai.or cart page per show karna hai.

// pori e commerce banani hy like search filter add to cart remove from cart checkout payment
// supabase auth and table database
// registration form and admin with supabse
// post app
// ----------------------------------------------
// --------------------------------------------------
// okkkkkkkkkk