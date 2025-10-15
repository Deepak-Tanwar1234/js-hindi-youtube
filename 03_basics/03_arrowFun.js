//This keyword and Arrow Function
//this keyword is used to reference current object or current context 
const user= {
    username:"Deepak",
    price:500,
    welcomeMessage:function(){
        console.log(`${username},welcome to my website`)
    }
}

user.welcomeMessage()