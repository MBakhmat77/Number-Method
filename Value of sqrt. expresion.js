function expression(a, b, c){
let A = Math.sqrt(a);
let BC = Math.sqrt(Math.abs(b-c));
let ABC = Math.pow(a,3) + Math.pow(b,2) + Math.pow(c,4);
let total = A + ( BC / ABC);
total = +total.toFixed(2);
return total;
}
