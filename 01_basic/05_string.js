const name= "krishna"
const repoCount =50

//console.log(name + repoCount +"value")

// the above written format is of old type

console.log(`hello my name is ${name} and my repo is ${repoCount}`)

//new method to define the string
const gameName = new String('krishna')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const url ="https://krishna.com/krishna%20chaurasiya";
console.log(url.replace('%20','-'))