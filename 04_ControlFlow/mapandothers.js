const myNumbers =[1,2,3,4,5,6,7,8,9,10];
const newNums = myNumbers.map( (num) => num+10)
console.log(newNums);
const newnum=[]

//this is the syntax for doint same operation with foreach
myNumbers.forEach( (num)=> {
    if(true)
    {
       newnum.push(num+10)
    }
})
console.log(newnum);