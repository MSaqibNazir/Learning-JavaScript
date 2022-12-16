// LOOPS

// ========================================================


// FOR Loop

for (let i = 0; i < 5; i++){
    // console.log('Hello World ', i);
};


for (let i = 5; i > 0; i--){
    // console.log('Hello World ', i);
};

// to print odd values on console
for (let i = 0; i <= 5; i++){
    // if (i % 2 !== 0) console.log(i);
};

// to print odd values on console
for (let i = 10; i > 0; i--){
    // if (i % 2 !== 0) console.log(i);
};

// ======================
for ( let i = 1; i  <= 15; i++){
    // console.log ( "No.",i, "abc xyz")
}


// WHILE Loop

let i = 0;

// while (Condition)
while (i <=5){
    // console.log('Hello While Loop', i);
    i++
};


let j = 0;
while (j <= 5){
    // if (j % 2 !== 0) console.log('Hello While Odd Values', j)
    j++;
};

let m = 1;
while ( m <= 15){

    // console.log ("No.", m , "Student");
    m++;
};

let n = 10;
while ( n <= 100){
    // if( n % 2 !== 1)console.log( 'Hello Even Numbers', n )
    // if (n % 2 !== 0 ) console.log ( 'Hello Odd Numbers', n)
    n++;
};

// Do-While Loop
// ==============


let k = 0;
do{
    // if (k % 2 !== 0) console.log('Hello do while loop' , k);
    k++;
} while(k <= 5);

let l = 9;
do {
    // if (l % 2 !== 0) console.log('Hello Do While Loop False', l);
    l++;
} while ( l <= 5);

// Practice
let z = 11;

do {
    // if (z % 5 === 0) console.log( z, "is divisible by 5 between 11 & 99" )
    z++;
} while ( z <= 99);



// For - in Loop
// For in use hota hai objects ki elemets k liye
const personNew ={
    name : 'Saqib',
    age : 24
};

// for (let key in personNew)
//  console.log(key,  personNew[key]);

//  const colors = ['red', 'green', 'blue'];
//  for (let index in colors)
//  console.log( index, colors[index]);




// For - of
// For of use hota hai arrays k elements k liye

const colors = ['Red', 'Blue', 'Green', 'Yellow'];
for (let color of colors)
console.log (color)