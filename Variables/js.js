/*
=> Three Types of Variables
1) Var
2) Let
3) Const



*/


// 1) Var variable
// => var variable ki value ko override kr sakte hai. 
// => var variable ko dobara declare kr sakte hai.
var x = "hello"
x=10
x="macbook"
x=55.5
var x=true
document.write(x);



/*
=> How to write a Variable Name.
* Write way
1) firstname
2) first_name
3) first-name
4) firstName
5) firstname99


* Wrong Way.
1) first name
2) 99firstname
*/


var first , second , third , fourth , five;
first = 10;
second = 20;
third = 30;
fourth = 40;
five = 50;


document.write("<br>" , first);
document.write("<br>" , second);
document.write("<br>" , third);
document.write("<br>" , fourth);
document.write("<br>" , five);



// 2) Let Variable
// => let variable ko dobara declare nahi kr sakte.
// => let variable ki value ko override kr sakte hai new value assign kr sakte hai.

let a = 10;
a = 20;
a = 30;
//let a = 50; let variable ko dobara declare nahi kr sakte.

document.write("<br>" , a);
 


// 3) Constant variable
// ek bar aapne usko value de di aap usko dobara koii value nahi de sakte.
// => const variable ko dobara declare nahi kr sakte.

const s = 10;
// const s = 20;  => const variable ko dobara declare nahi kr sakte.
// s = 50;  =>  ek bar aapne usko value de di aap usko dobara koii value nahi de sakte.

document.write("<br>", s);











