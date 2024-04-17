//dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//date is object


// let myCreatedDate = new Date(2023 ,0,23);//in js month start from 0 to 11
// let myCreatedDate =new Date("01-14-2023");
let myCreatedDate =new Date("2023-01-14");

let newCreatedDate = new Date(2023 , 0 , 23 , 5,3)// year month and date is the format of date writting
// console.log(myCreatedDate.toDateString());
// console.log(newCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleString());

newDate.toLocaleString('default',
{
    weekday:"long",//this will help to modify the output in more simplified manner
})