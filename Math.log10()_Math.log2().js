Coding Practice
The number of values ​​in the array that are powers of 2 or powers of 10.
Write a function countPowersInArray that takes an array arr as an argument and returns 
the number of power of 2 or power 10 elements in the array.

function countPowersInArray(arr){
let count = 0;
for ( let i = 0; i < arr.length; i++){
if ( Math.log2(arr[i]) % 1 === 0 || Math.log10(arr[i]) % 1 === 0)
count = count + 1;
}
return count;
}
