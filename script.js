// string 
var intro= "Hi there! This is Usman";
console.log(typeof intro , intro);

// number
var a = 10;
console.log(typeof a, a);

// boolean
var conf = true;
console.log(typeof conf,conf);

// null
var object = null;
console.log(typeof object,object);

// undefined 
var prog = undefined;
console.log(typeof prog ,prog)

// symbol
var texture =Symbol();
console.log(typeof texture,texture)

// corceian
var Name = "usman";
var  a = 10;
var sum = Name+a;
console.log(typeof sum,sum);

// calculations
// add
var a = 20 ;
var b = 10;
var sum = a+b;
console.log( sum );

// sub
var a = 20;
var b = 10;
var sub = a-b;
console.log(sub);

// mul
var a = 20;
var b = 10;
var mul = a*b;
console.log(mul);

// division
var a = 20;
var b = 10;
var div = a/b;
console.log(div);

// conditional statements

// if condition
var a = true;
if (a){
    console.log("this is true");
}

// if, else condition
var a =10 ;
var b = 5 ;
if (a < b){
    console.log("this is true");
}
else{
    console.log("this is fale ");
}
// if ,else if ,else
var a = 10 ;
var b = 8 ;
var c = 2;
if (b < c){
    console.log("this is true");
}
else if (b+c){
    console.log("sum of this is true");
}
else {
    console.log("this is false")
}

// Arthametic operations
// add "+"
var a = 20 ;
var b = 10;
console.log( a+b );

// sub "-"
var a = 20;
var b = 10;
console.log(a-b);

// mul "*"
var a = 20;
var b = 10;
console.log(a*b);

// division "/"
var a = 20;
var b = 10;
console.log(a/b);

// %
var a = 20;
var b = 30;
console.log(a%b);

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
var a=10;
var b=8;
console.log(a>b && b<a)
// b. ||(OR) in this any one should be true  
var a=10;
var b=8;
console.log(a<b || b<a)
// c. !(NOT) in this if the condition is true it will show it as false
var a=10;
var b=8;
console.log(!(a<b))

// 2.Relational operator
// <,>,<=,>=
var a=10;
var b=8;
console.log(a>b)
var a=10;
var b=8;
console.log(a<b)
var a=10;
var b=10;
console.log(a<=b)
var a=10;
var b=8;
console.log(a>=b)

// 3.Equality operator 
// 1.lose equality ("==") "this compare's the value on perform the operation"
var a=15;
var b=16;
console.log(a==b)
// 2.strict equality("===") "this compare the both the value and datatype and perform the operation"
var a="15";
var b=20;
console.log(a===b)

// 4. Ternary operator (or) conditional operator
var attendence=80 ;
attendence > 75 ? console.log("Eligible get hallticket"):console.log("Not eligible get hallticket")