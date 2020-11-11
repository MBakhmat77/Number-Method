Write a function where value is an argument. It returns "Value is NaN" if it is Nan and if not it value is multiplied by 5;
function multBy5(value){
if (Number.isNaN(value))return "Value is NaN";
else value = value * 5;
return value;
}
