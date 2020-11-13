
Opposite value in an array
// Given an array arr and some number num. Determine if an array contains the opposite element
// the number num, and if so, return its index. If there is no such element, return undefined.
// Write a function called oppositeInArray that takes arr and num as
// arguments and returns the index of the opposite of num.
function oppositeInArray(arr, num){
  let minus = -1;
  let neg = num * minus;
for ( let i = 0; i <= arr.length; i++){
  if (arr[i] === neg)
    return i;  
}
  return undefined;
}
