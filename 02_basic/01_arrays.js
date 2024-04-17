//Arrays

const myArr =[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

//Array Methods

// myArr.push(6);
// console.log(myArr);//add new element at the last of the array
// myArr.pop()//removes the last element of the array
// console.log(myArr);
// myArr.unshift(9);
// console.log(myArr)//adds 9 at the starting position
// myArr.shift();
// console.log(myArr)//removes 9 at the starting position
// console.log(myArr.includes(4));//includes returns the ans in boolean form
// console.log(myArr.indexOf(3));// if not found -1 would be writtenedd

// const newArr= myArr.join();
// console.log(myArr)
// console.log(newArr);
// console.log(typeof newArr);
//join convers normal array to the string form

//slice and splice
console.log("A" , myArr);

const myn1= myArr.slice(1,3);//whereas slice keeps the same

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)//splice cuts the portion of the array at the given indices
console.log("C" , myArr);
console.log(myn2);
