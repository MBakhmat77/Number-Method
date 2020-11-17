
Square root of a number
question
Write a function called squareRoot that takes x as an argument and returns

square root of x, if x> = 0,
the message "Root of a negative number is NaN" if x <0.
//////////////////////////////////////////////////
function squareRoot(x){
  let sqr;
if ( x >= 0){  sqr =Math.sqrt(x); 
  sqr =sqr.toFixed(2);
  return +sqr;
}
  else return "Root of a negative number is NaN";
}
