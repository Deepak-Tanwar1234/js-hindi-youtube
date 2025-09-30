const name="Deepak Tanwar"
const repoCount= 23


console.log(typeof name)
// console.log(name+ repoCount + "value")

// always use string interpolation

console.log(`Hello my name is ${name} and my repocount is
     ${repoCount}`)

const gameName=new String("Deepak")  

console.log(gameName[0])
console.log(typeof gameName)
console.log(gameName)
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt('1'))
console.log(gameName.indexOf("p"))
console.log(gameName.substring(0,4))
console.log(gameName.slice(-3,5))
//console.log(gameName.split(1,4))

const newString1="  Deepak  "
console.log(newString1.trim())

const newString2 ="https://deepak.com/deepak%20tanwar"
console.log(newString2.replace("%20","--"))
console.log(newString2.includes('deepak'))
console.log(gameName.split('p'))








