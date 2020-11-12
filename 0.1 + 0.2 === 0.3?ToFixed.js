Is it true that 0.1 + 0.2 === 0.3? It is not that simple!
question
Write a function isSumEqualsNumber that takes three fractional numbers a, b, c as
arguments and checks if the sum of the two fractional numbers equals the third fractional
number, i.e. is the sum of a and b equal to c. The function must return true (if the sum of
the numbers after rounding is equal to the third number) or false otherwise.
///////////////////////////////////////////////////////////
function isSumEqualsNumber(a, b, c){
let sum = a + b;
if (+sum.toFixed(2) === c) return true;
else return false;
}
