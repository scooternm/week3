//Logical operators
//&& AND (all must be true)
// || OR (either is true)
// == comparison (same)
// === strict comparison (compares both value and datatype)
// != NOT EQUAL
// !== strict
// >= greater or equal to
// <= less or equal to

let height = 50
let minimum = 55
let canRide = height >= minimum

console.log("START") //unconditional

if(canRide){ //conditional
    //expression was true
    console.log("Weeeee") //depends on condition
}else{
    //expression was false
    console.log("watching") //depends on conditon
}

console.log("END") //unconditional