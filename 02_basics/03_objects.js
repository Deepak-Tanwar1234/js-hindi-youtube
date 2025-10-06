/* objects can be created using by two ways
   1.Using object literal i.e by using {}
   2.Using Object.create method or by constructor and only 
      its create a singleton object(means no copy object)    */

// Singelton

//Object literals
//here compiler himself convert key data type into string

//Permative data type
const mysym= Symbol("key1")
const jsUser = {
    name:"Deepak",
    "full name":"Deepak Tanwar",
    [mysym]:"mykey",
    age:21,
    location:"Faridabad",
    email:"deepak@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}
 /* here jsUser[""] is most accurate because if object key is
    a string(actually) then there is problem in access in case of dot due to 
    "" but we always prefer jsUser. for accessig the object */

console.log(jsUser.email)   
console.log(jsUser["email"]) 
console.log(jsUser.mysym)
console.log(jsUser[mysym])  //use this only

jsUser.email="deepak@chatgpt.com"
console.log(jsUser.email)
//Object.freeze(jsUser)
jsUser.email="deepak@microsoft.com"
console.log(jsUser.email)


jsUser.greeting= function() {
    console.log("Hello js user");
}
console.log(jsUser.greeting())

jsUser.greeting2= function(){
    console.log(`Hello js user,${this.name}`)
}
console.log(jsUser.greeting2())
