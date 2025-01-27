/*
Logical Operator                   Name
       &&                          Logical AND    // 1) dono condition ka true hona jruri hai tab true answer aayega.  2) ek galata or ek sahi hoga to faulse answer aayega.  3) dono galat hoge to False answer aayega. 

       ||                          Logical OR  // 1) dono condition ka true hona jruri hai tab true answer aayega.   2) ek galata or ek sahi hoga to true answer aayega.  3) dono galat hoge to False answer aayega.  

       !                           Logical NOT  // 1) condition true hogi to False answer dega.  2) condition False hogi to true answer dega.
*/

let a = 22;
let b = 20;

if (b>a && b>a) {
    document.write("prgm right <br> ");
} else {
    document.write("prgm wrong <br>");
}




let c = 20;
let d = 30;
if (c>d || c<d) {
    document.write("prgm right <br>");
} else {
    document.write("prgm wrong <br>");
}



let e = 5;
let f = 10;
console.log(!( e > f ));

 























