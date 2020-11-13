
Symmetrical point on the number axis
Points M and N are equally distant from point O, but located on opposite sides of it, in opposite directions.
Write a function called oppositePoint that takes the number x (the coordinate of point M as an 
argument and returns the coordinate of point N as the string "N (x)".
////////////////////////////////////////////////////////////////
function oppositePoint(x){
let minus = -1;
let M = (x) ;
let N = (-M);
let n = `N(${N})`; 
  return n;
}
