Points M and N are symmetrical.
Write a function called oppositePoint that takes the numbers x and y 
(coordinates of point M) as arguments and returns the coordinates of point N as the string "N (x, y)".
function oppositePoint(x, y){
let minus = -1; 
  let X = (-x) ;
  let Y = (-y) ;
  let opposPoint;
  opposPoint= `N(${X}, ${Y})`;
  return opposPoint;
}
