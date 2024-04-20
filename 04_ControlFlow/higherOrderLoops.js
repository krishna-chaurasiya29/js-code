//in this we will lern the use of the higher order loops other than for while and do while

//the other loops are
//for of loop & for in loop

const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings ="Krishna Chaurasiya";
for (const greet  of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', 'INDIA');
map.set('USA', 'UNITED STATE OF AMERICA')
map.set('FR', 'FRANCE')

// console.log(map);
for(const key of map)
// for(const [key,value]of map)//this is method to print key and value differently
{
    console.log(key);//it will come in array form
    // console.log(key, ':-',value);
}

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman',
}
// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);
// }
//Hence object  cannot be used in for of loop