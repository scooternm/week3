//counter.js
let componentCounter = 0;
function moveUp(){
    componentCounter++;
}
function moveDown(){
    componentCounter--;
}
function getCounter(){
    return componentCounter;
}
moveUp();
moveUp();
moveUp();
moveUp();
moveUp();
moveUp();
moveDown();
moveDown();
moveDown();
console.log(getCounter());
// value = 0

// value++; // 
// value++;

// console.log(value)

// beers = 99
// beers--;
// beers--;
// beers--;
// beers--;
// console.log(beers)

// counterValue = 0
// incrementAmount = 5

// counterValue += incrementAmount
// counterValue += incrementAmount
// counterValue += incrementAmount
// counterValue += 5
// counterValue += 5

// console.log(counterValue)

// current = 0
// console.log(current++)

// pre = 0
// console.log(++pre)

