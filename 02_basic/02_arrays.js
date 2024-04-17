const marvelHeroes = ["thor" , "Ironman", "Spiderman"];
const dc_heroes =["superman", "flash ", "batman"];
// marvelHeroes.push(dc_heroes)
// console.log(marvelHeroes);
//by doing this we came to know that both the arrays get marged but in strange manner
//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash ', 'batman' ] ]

// // console.log(marvelHeroes[3][1]);
// const allHeroes = marvelHeroes.concat(dc_heroes)
// console.log(allHeroes);
//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash ', 'batman' ]
//hence we came to know that concat merges the complete two arrays 
//whereas push only add two portions

//another method is the spreading method
// const all_heroes = [...marvelHeroes,...dc_heroes]
// console.log(all_heroes);

// mostly spreading method is used as its easy and large no of arrays can be mergen in onetime


// const anotherArray =[1,2,3 , [4,5,6],7,[6,7[4,5]]];
// const realAnotherArray = anotherArray.flat(Infinity);
//we have to give exact depth that till where we have to solve the array infinity is used to solve complete array
// console.log(realAnotherArray)

console.log(Array.isArray("krishna"));
console.log(Array.from("krishna"));//it makes complete string in the array form

let score1=400;
let score2=500;
let score3=200;
console.log(Array.of(score1,score2,score3));
//it convers the complete different vaariable into array