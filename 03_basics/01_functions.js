//Functions
//arguments-these are the values passed at the calling of an function
//parameter-these are the variables we passed at the declaration of function
function sayMyNamme()
     { 
        console.log("D")
        console.log("E")
        console.log("E")
        console.log("P")
        console.log("A")
        console.log("K")
     }
console.log(sayMyNamme)  //its the refernce to the function
console.log(sayMyNamme())

function addTwoNumbers(number1,number2){
         return number1+number2
}
 addTwoNumbers(3,4)   //here comes nothing in output
 console.log(addTwoNumbers(3,4))
 console.log(addTwoNumbers(3,"4"))
 console.log(addTwoNumbers(3,"a"))
 console.log(addTwoNumbers(3,null))
 
 /* There arises data type conversion problem in the vedio 
    for which we should use if else statements in the function */ 

 
function addTwoNumbers2(number1,number2){
        return number1+number2
        console.log("Deepak Tanwar")
}  

console.log("Addition is:",addTwoNumbers(3,5))

/* function loginUserMessage(username){
        return `Hello Mr. ${username}`    
}   */

function loginUserMessage(username){
        if(username === undefined){
            return "Please enter your name"
        }
        else{
        return `Hello Mr. ${username}`
        }
}
console.log(loginUserMessage("Deepak Tanwar"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())
 
 //********************************* *****************/   
 function calculateCartPrice(num){
       return num
 }
 //REST operator(...) 
 console.log(calculateCartPrice(2))

 function calculateCartPrice2(...num){
       return num
 }
 console.log(calculateCartPrice2(20,40,30))
 
 function calculateCartPrice3(num1,num2,...num){
       return num
 }
 console.log(calculateCartPrice3(20,40,30))

 const user={
      username:"Deepak Tanwar",
      price:2000
 }

 function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is 
        ${anyobject.price}`)
 }
 console.log(handleObject(user))

 /*
      handleObject2({
          username:"Deepak",
          price:20
      )                         */

const myArray=[100,200,300,400];

function returnSecondVale(getArray){
       return getArray[1]
}

console.log(returnSecondVale(myArray))
console.log(returnSecondVale([100,200,300,400]))



 

 


