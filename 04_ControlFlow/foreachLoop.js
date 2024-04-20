//In this we wil learn about the for each loop and its use

const coding =["js","ruby","java","python","cpp"]

coding.forEach(function (val){//by the use of normal function
    console.log(val);
})//it will each operation one by one

coding.forEach( (item) => {//by the use of array function
    console.log(item);
});

coding.forEach((items,index,arr) =>
{
        console.log(items,index,arr);
})
//this syntax give index and arr


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js",
    },
    {
        languageName:"python",
        languageFileName:"py",
    },
    {
        languageName:"c++",
        languageFileName:"cpp",
    },
    {
        languageName:"ruby",
        languageFileName:"rby",
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})