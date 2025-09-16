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

//************operations ************

//console.log(2+3)
//console.log(2-3)
//console.log(2*3)
//console.log(2/3)
//console.log(2%3)
//console.log(2**2)  2 to power 2

let str1="Deepak"
let str2=" Tanwar"
let str=str1+str2
console.log(str)

console.log("1"+2)    // read tc ecma script
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log((3+4)*5%3)

console.log(+true) // also try true+

let num1,num2,num3   // not use this type of declaration
    num1=num2=num3=2

let gamecounter=100  // also read pre and post operator by mtn java script
++gamecounter 
console.log(gamecounter)    







