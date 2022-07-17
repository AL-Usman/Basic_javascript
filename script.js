// string 
var intro = "Hi there! This is Usman";
console.log(typeof intro, intro);

// number
var a = 10;
console.log(typeof a, a);

// boolean
var conf = true;
console.log(typeof conf, conf);

// null
var object = null;
console.log(typeof object, object);

// undefined 
var prog = undefined;
console.log(typeof prog, prog)

// symbol
var texture = Symbol();
console.log(typeof texture, texture)

// corceian
var Name = "usman";
var a = 10;
var sum = Name + a;
console.log(typeof sum, sum);

// calculations
// add
var a = 20;
var b = 10;
var sum = a + b;
console.log(sum);

// sub
var a = 20;
var b = 10;
var sub = a - b;
console.log(sub);

// mul
var a = 20;
var b = 10;
var mul = a * b;
console.log(mul);

// division
var a = 20;
var b = 10;
var div = a / b;
console.log(div);

// conditional statements

// if condition
var a = true;
if (a) {
    console.log("this is true");
}

// if, else condition
var a = 10;
var b = 5;
if (a < b) {
    console.log("this is true");
}
else {
    console.log("this is fale ");
}
// if ,else if ,else
var a = 10;
var b = 8;
var c = 2;
if (b < c) {
    console.log("this is true");
}
else if (b + c) {
    console.log("sum of this is true");
}
else {
    console.log("this is false")
}

// Arthametic operations
// add "+"
var a = 20;
var b = 10;
console.log(a + b);

// sub "-"
var a = 20;
var b = 10;
console.log(a - b);

// mul "*"
var a = 20;
var b = 10;
console.log(a * b);

// division "/"
var a = 20;
var b = 10;
console.log(a / b);

// %
var a = 20;
var b = 30;
console.log(a % b);

// increment "++"
// pre increment
var a = 20;
console.log(++a);
// post increment
var a = 20;
console.log(a++);
console.log(a);

// decrement "--"
// pre decrement 
var a = 20;
console.log(--a);
// post decrement
var a = 20;
console.log(a--);
console.log(a);

// comperison operator
// 1. logical operator
// a. (&&)AND in this both the conditions should be true 
var a = 10;
var b = 8;
console.log(a > b && b < a)
// b. ||(OR) in this any one should be true  
var a = 10;
var b = 8;
console.log(a < b || b < a)
// c. !(NOT) in this if the condition is true it will show it as false
var a = 10;
var b = 8;
console.log(!(a < b))

// 2.Relational operator
// <,>,<=,>=
var a = 10;
var b = 8;
console.log(a > b)
var a = 10;
var b = 8;
console.log(a < b)
var a = 10;
var b = 10;
console.log(a <= b)
var a = 10;
var b = 8;
console.log(a >= b)

// 3.Equality operator 
// 1.lose equality ("==") "this compare's the value on perform the operation"
var a = 15;
var b = 16;
console.log(a == b)
// 2.strict equality("===") "this compare the both the value and datatype and perform the operation"
var a = "15";
var b = 20;
console.log(a === b)

// 4. Ternary operator (or) conditional operator
var attendence = 80;
attendence > 75 ? console.log("Eligible get hallticket") : console.log("Not eligible get hallticket")

//loops
//for loop
var i = 1;
for (i = 1; i <= 10; i++) {
    console.log(i);
};

//ES6
//1. let and constant this both are key words and they are block scope ,in this hosting is not possible
// let 
let y = 1 ;
if (true) {
    let y= 3;
}
console.log(y)

//const
const x=2;
if (true){
    const x=4;
}
console.log(x);

//2.arrow fumcation
a = function add(){
    return "hellow";
}
console.log(a);

var add = () => 'hellow';
console.log(add());

//3. default values
const add = (a=2,b=4) => a+b;
let res = add( 5,11);
console.log(res);

//4. template literals 
var name ="Mohammed"
var sname = "Usman"
var tname = "Pasha"
console.log(`Hellow ${name} ${sname} ${tname}`);

// Array helping method
const arr=['apple','mango']
const [first,second]=arr;
console.log(first);
console.log(second);

//destructuring of array
const [a,b]=arr;
console.log(a);
console.log(b);

// destructuring of objects
let marks = {
    Ruman:80,
    Parvez:84,
    usman:81
};
let {Ruman,Parvez,usman}=marks;
console.log(marks);
console.log(Ruman);
console.log(Parvez);
console.log(usman);



