const marvel_heros=["Hulk","Thor","Iron man"]
const dc_heros=["Superman","Batman","Aquaman"]

//console.log(marvel_heros.push(dc_heros))
//console.log(marvel_heros)
//console.log(marvel_heros[3][0])

const allHeros= console.log(marvel_heros.concat(dc_heros))
console.log(allHeros)
console.log(marvel_heros)

/* Mostly use spread operator because due to this
   we can concinate any nubmer of arrays */ 

const all_new_heros=[...marvel_heros,...dc_heros]   
console.log(all_new_heros)
console.log(marvel_heros)

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_real_array= another_array.flat(Infinity)
console.log(another_real_array)

/* when we get data from an web page in other format 
   like Object,string,node list then we convert it into an array */ 

console.log(Array.isArray("Deepak"))  
console.log(Array.from("Deepak"))
console.log(Array.from({name:"Deepak Tanwar"}))  //Interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) 