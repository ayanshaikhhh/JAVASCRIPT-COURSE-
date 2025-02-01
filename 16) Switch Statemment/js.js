// Switch Statement  in JS.

/*
switch (expression) {
    case condition 1: statement(s)
    break;

    case condition 2: statement(s)
    break;

    case condition 3: statement(s)
    break;

    case condition 4: statement(s)
    break;

    case condition 5: statement(s)
    break;

    default: statement(s)
}
*/


let age = prompt("Enter Your Age");

switch (true) {
    case (age>=18 && age<=25):
        document.write("You Are Young boy");       
        break;

        case (age>=26 && age<40):
        document.write("You Are Man");       
        break;

        case (age>=41 && age<=60):
        document.write("You Are Older Man");       
        break;

    default:
        document.write("Enter Valid Age");
        break;
}

console.log(age);




let day = 2;

switch (day) {
    case 0:
        document.write("Monday")
    break;

    case 1:
        document.write("Tuesday");

    break;

    case 2:
        document.write("Wednesday")
    break;

    case 3:
        document.write("Thursday")
    break;

    case 4:
        document.write("Friday")
    break;

    case 5:
        document.write("Saturday")
    break;

    case 6:
        document.write("Sonday")     
    break;

    default:
         document.write("Enter Valid Week Day");
}



























