//Functions

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
 
    
 

 


