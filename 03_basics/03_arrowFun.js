//This keyword and Arrow Function
//this keyword is used to reference current object or current context 
const user= {
    username:"Deepak",
    price:500,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to my website `)
        console.log(this)
    }
}

user.welcomeMessage()
user.username="Deepak Tanwar"
user.welcomeMessage()

console.log(this)


function chai(){
   console.log(this)
   let username="Deepak"
   console.log(this.username)
}
chai()

//*************   Arrow Funcions *******************

const chai2=() =>{
    let username="Deepak"
    console.log(this)
    console.log(this.username)
}
chai2()    //we can't use this keyword inside function ( simple,arrow) 

/* const addition = (num1,num2)=>{
      return num1+num2
}
console.log(addition(4,3))  */

/* Anothher way of writing a arrow function is implicet return i.e
   remove return and also remove curly braces and its used for 
   returning one line which JS engine can understand easily
   by doing this
   */
//const addition = (num1,num2)=> num1+num2
const addition = (num1,num2)=> (num1+num2)

console.log(addition(4,5))

const addition2 = (num1,num2)=> ({username:"Deepak Tanwar"})
console.log(addition2(4,5))
