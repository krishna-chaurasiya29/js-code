const coding=["js","ruby", "java", "python","cpp"];

const values = coding.forEach((item) => {//let store it in some variable and then check weather it returns some thing or not
    console.log(item);
    return item//if we return something than also it does not return any values
})

// console.log(values);
//undefined will come because foreach doesnot return any values


const myNums=[1,2,3,4,5,6,7,8,9,10];
//use of filter in filter we have to give condition the condition satisfied statement wil be returned and other will be ignored

// let newNums =myNums.filter( (num) => num >4)
let newNums =myNums.filter( (num)=> {
    return num>4//here we have to written the values because of the scope else it will not return any thing
})
// console.log(newNums);

//it will return the values greater than 4 hence filter is used when we have to return some of the values

//we can do the above operation by using foreach operation but the syntax will be harder 

const newNum=[];
myNums.forEach( (num)=>{
    if(num>4)
    {
        newNum.push(num)
    }
})
// console.log(newNum);



const books = [//there are multiple objects in the array
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//filter is ussed to filter out the matching ones
  let userBooks = books.filter( (bk) => bk.genre === 'History');//scope not opened so return not req..

  userBooks = books.filter( (bk) => { //scope opened so return req
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);