var ans="5"+1;  //"5"+"1"->51
var ans="1"+5; //"1"+5->15
console.log(ans);
console.log(null*5);//null is converted to 0 hence output is 0
console.log(undefined*5);//NaN
console.log("5"-1);// 5-1->4
console.log(null*"5");

console.log("ten"*5);//NaN reason:ten string cannot be mapped to a number like 5 can be mapped to a number 5 hence the output is NaN
console.log("10"*3);//30

