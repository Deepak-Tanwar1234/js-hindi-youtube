//arrays

const myarr1=[1,2,3,4,5,true,"Deepak"]

console.log(myarr1[0])  //not use myarr["dee"]

//Also study shallow copy and deep copy of an array object

const myHeros=["Iron Man","Thor","Hulk"]

const myarr2 = new Array(10,2,3,4)
console.log( typeof myarr2[0])

//array methods

myarr1.push(6)
myarr1.push(7)
myarr1.pop()
myarr1.unshift(9)
myarr1.shift()
console.log( myarr1)
console.log(myarr1.includes(9))
console.log(myarr1.indexOf(9))

const newarr=myarr1.join()
console.log(myarr1)
console.log(newarr) //check type of both myarr1 and newarr

//slice,split

console.log(myarr1)
console.log( typeof myarr1.slice(1,3))

console.log(myarr1)
console.log( myarr1.splice(1,3))
console.log(myarr1)