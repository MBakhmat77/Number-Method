
Is the result of dividing two numbers is finite?
Write a function checkingForFinite that takes two numbers a and b as arguments,
dividing a by b, and checking the
result of the division (quotient) by finitude. 
The function should return true if the result is a finite number, and false otherwise.
//////////////////////////////////////////////////////////////////////////////
function checkingForFinite(a, b){
let div = a / b;
if ( Number.isFinite(div))return true;
else return false;
}
