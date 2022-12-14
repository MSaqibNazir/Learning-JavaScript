// IN Java we have 5 types of operators
// 1 Arithmetic
// 2 Assignment
// 3 Comparison
// 4 Logical
// 5 Bitwise

//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Arithmetic Operator")  ;
console.log("===================")  ;

let x = 9;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// Increament (++)
console.log(++x);

console.log(x++);
console.log(x);

// Decreament (--)
console.log(--y);

//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Assignment Operator")  
console.log("===================")  ;

let a = 10;

// (a++);
a = a + 1 // these 2 are same 
console.log(a);



let b = 100

// b = b + 50;
b += 50;
console.log(b); // 150

b = 4000

// b = b - 500;
b -= 500; // These 2 are same
console.log(b); // 3500


// b = b * 2;
b *= 2;
console.log(b); //7000


// b = b / 50; b /= 50 These 2 are same
b /= 50;
console.log(b); // 140


// b = b % 50; b %= 50;
b %= 50;
console.log(b); 2


//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Comparison Operator")  //  It Gives TRUE OR FALSE
console.log("===================")  ;

let c = 2

// Relational
console.log(c > 1);
console.log(c >= 1);
console.log(c < 1);
console.log(c <= 1);

// Equality
console.log(c === 2);
console.log(c !== 1);

//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Equality Operator") 
console.log("===================")  ;

////// Strict Equality ( It checks same on b0th sides Value + Type)
console.log(1 === 1); //true
console.log("1" === 1); // false bcz on left side it is string, and other is number

////// Lose Equality ( It checks only Value from left side )
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);
console.log(false == 1);



//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Ternary Operator");
console.log("===================");

// If customers have more than 100 points, then
// they are "GOLD" customers, Otherwise
// they are "SILVER"  Customers.

let points = 110;

let customerType = points > 100 ? 'GOLD' : 'SILVER'
console.log(customerType);

points = 90;
type = points > 100 ? 'GOLD' : 'SILVER'
console.log(customerType)




//////////////////////===============//////////////////////////

console.log("..............................")  ;
console.log("Logical Operator with Booleans"); 
console.log("==============================");

// Logical Operator AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true); // = true
console.log(false && true); // = false
console.log(false && false); // = false

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore ? 'TRUE' : 'FALSE'
console.log(eligibleForLoan);

let eligibleForLoan2 = highIncome && goodCreditScore;
console.log(eligibleForLoan2); // true

// Logical Operator OR (||)
// Returns TRUE if one of the operands is True

console.log(true || false); // true
console.log(false || false); //false
console.log(true || true); //true


// if one of following is true then customer is eligible for loan

let hiIncome = true;
let goodCredit = false;

let eligibleForLoan3 = hiIncome || goodCredit;
console.log('eligible for Loan ' + eligibleForLoan3); //true

// Logical Operator NOT (!)
// it gives opposite = true into false, or False into True

let applicationRefused = !eligibleForLoan2 //
console.log('Application has been Refused for load ' + applicationRefused);






console.log("....................................");
console.log("Logical Operator with Non - Booleans"); 
console.log("====================================");

// The result of logical operator always be true or false is not necessary, it depends on the value of operads we have
// If there is no boolean true or false in operands, than javascript will try to interpret it as what we called truthy or falsy

// That values which are falsy, not a boolean false but Falsy

//Falsy (false)
// 1 Undefined
// 2 null
// 3 0
// 4 boolean false
// 5 ""
// 6 NaN

// Anything That is not Falsy -> Truthy

// false || true
// true (console result)

// false || "Mosh"
// "Mosh" (console result)

// false || 1
// 1 (console result)

// Qk in examples mein koi falsy nhi hai is liye truthy hain,, or jo truthy hai wo true consider kryga Javascript, is liye truthy ki value result mn aygi


//  false || 1 || 2
//  1 (console result) ( It is called Short - circuiting )

let userColor = "Red"
let defaultColor = "Blue"
let currentColor = userColor || defaultColor

console.log(currentColor); // >> Red


//  2nd Case

let userColor2 = undefined
let defaultColor2 = "Blue"
let currentColor2 = userColor2 || defaultColor2

console.log(currentColor2); // >> Blue (qk undefined falsy hai is liye wo skip hogya)


console.log("...................");
console.log("Operator Precedence"); 
console.log("===================");

// DMAS RULE :-D

let d = 2 + 3 * 10

console.log(d); //32

let e = (2 + 3) * 10

console.log(e); //50

console.log("...........................");
console.log("Exercisre - Swapping Values"); 
console.log("===========================");


let ab = 'Red';
let bc = 'Blue';

// console.log(ab);
// console.log(bc); // It is a task to swap the values

let ca = ab
ab = bc
bc = ca
console.log(ab);
console.log(bc);

console.log(".....................");
console.log("=======THE END======="); 
console.log("=====================");


