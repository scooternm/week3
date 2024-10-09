//let makes it loacal and is changeable
//

const identifier = "value" 
const foodCost = 79.25;
const tax = 6.54;
let tip = 12; //let makes this mutable
tip = (12).toFixed(2) //include two decimal places

const totalDue = foodCost + tax + tip
const first = "Kay";

console.log(`My name is ${first},
Food cost is $${foodCost}  and tax is $${tax},
Tip is $${tip},
Total due is $${totalDue},
`);