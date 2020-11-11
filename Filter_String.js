 var FilterString = function(value) { 
 value = value.split(" ");   
 let res = '';
for ( let i = 0; i <= value.length; i++){
  if ( !isNaN(value[i]))
      res+=value[i];
 }
   return +res;
 }
 /////////////////////////////////////
 
  var FilterString = function(value) {
return parseInt(value.replace(/[a-z]/gi,''))
}
