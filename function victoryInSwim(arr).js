
Who will receive the prize?
// There were 3 athletes in the swim. The competition results are stored as an array:
// [[name1, time1], [name2, time2], [name3, time3]].
// Determine the time of the winner.
// Write a function called victoryInSwim that takes an array arr that holds
// competition results as an argument and returns the fastest time.
// In all tests, the number of athletes is always 3.
////////////////////////////////////////////////////////////////////////
function victoryInSwim(arr) {
  let nArr = [];
  for (let el of arr) {
      nArr.push(el[1]);
      }
return Math.min( ...nArr );
}
