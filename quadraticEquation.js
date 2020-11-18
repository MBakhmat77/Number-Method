
function quadraticEquation(a, b, c){
let x1,x2;
let disc = Math.pow(b, 2) - 4 * a * c;
if ( disc < 0) return "There are no roots"
x1 = ( -b + Math.sqrt(disc)) / (2 * a);
x2 = ( -b - Math.sqrt(disc)) / (2 * a);
return [x1,x2];
}
