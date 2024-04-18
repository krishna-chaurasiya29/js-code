//const tinderUser = new Object()//we can declare by this method too  this singleton 
const tinderUser={}//whereas this non-singleton

tinderUser.id="123abc";
tinderUser.name="sanny";
tinderUser.isloggedin=false;
// { id: '123abc', name: 'sanny', isloggedin: false } output


console.log(tinderUser)

const regularUser ={
    email:"krishna@gmail.com",
    fullname: {
        userfullname:{
            firstname: "krishna",
            lastname: "chaurasiya"
        }
    }
}
// console.log(regularUser.fullname);

//addition of two objects
const obj1 ={1: "a",2: "b"};
const obj2 ={3: "c",3: "d"};
//const obj3 = { obj1,obj2}
// const obj3 = Object.assign({},obj1 , obj2)
// here also we will be using spreading method
const obj3 ={...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//by this we can get value and keys it will hwlp when we have to apply loops

console.log(tinderUser.hasOwnProperty('isloggedin'));//this is use to check weather it is present or not
