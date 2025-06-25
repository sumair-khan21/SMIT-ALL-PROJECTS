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
// local storage
// ek ec commerce store banana hay jis mein products ko array of objects mein store karna hai.
// jis bhi product per click kare wo product local storage mein store ho jaye.or iski complete details show ho jaye.next page per 
// add to cart banana hy jis mein products ko local storage se uthana hai.or cart page per show karna hai.


































































