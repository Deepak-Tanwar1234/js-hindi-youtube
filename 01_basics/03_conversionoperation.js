let score="33abc"  //also try score=33,score=null,score=undefined,
// score=true

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=(Number(score))
console.log(typeof valueInNumber)
console.log(valueInNumber)

// take "33" =>get 33 in value 
// take "33abc" =>get NaN in value  
// take null =>get 0 in value 
// take true or false =>get 1 or 0 in value 
// take undefined =>get NaN in value 

let loggedIn=1  // also try loggedIN="Deepak"," "

console.log(typeof loggedIn)

let booleanLoggedIn=Boolean(loggedIn)
console.log(typeof booleanLoggedIn)
console.log(booleanLoggedIn)

// take 1 or 0 =>get true or false respectively in value 
// take "Deepak" =>get true in value  
// take "" =>get false in value 

let scores=23

console.log(typeof scores)

let valueInString=String(scores)
console.log(typeof valueInString)
console.log(valueInString)





