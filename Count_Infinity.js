
Coding Practice
Count the number of infinite values ​​in an array/
Write a function countInfinity that takes the arr array as an argument
and returns the number of non-finite elements in the array.

.function countInfinity(arr){
 let SumFin = 0;
 let notFin = 0;
 for (let i = 0; i <= arr.length;i++){
  if ( Number.isFinite(arr[i]) )
  SumFin = SumFin + 1;
  notFin = arr.length - SumFin;
 }
 return notFin;
}
