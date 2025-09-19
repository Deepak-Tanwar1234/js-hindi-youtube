// Data types : permitive & non-permitive data  type

/*
     permitive data types: String ,Number,Boolearn, null,
                          undefined,Symbol,BigInt
                          
                          */

    const score=100
    const scoreValue=100.12

    const isLoggedIn=false
    const otsideTemp=null
    let userEmail

    const id=Symbol("123")
    const anotherId=("123")

    console.log(id === anotherId)
    
    const bigNumber=2123213112321n
/*  
    non-permitive data types(Reference type):  Array,Functions,objects                         
*/
     const heroes=["Iron Man","Spider-Man","Hulk"]

     let myObj={
            name:"Deepak Tanwar",
            age:25
     }

     let myFun= function(){
            console.log("Hello world")
     }

     console.log(typeof heroes)
     console.log(typeof myObj)
     console.log(typeof myFun)

 // ***********************************************

 /* Memory types:
            1.Stack Memory( used to store Permitive data type pnly)
            2.Heap Memory( used to store non-Permitive data type only)
 */

   let myYoutubeName="DeepakTanwar"
   let anotherName=myYoutubeName
   console.log(anotherName)
   anotherName="DeepuTanwar"
   console.log(myYoutubeName)

   let user1={
         email:"deep@gmail.com",
         upi:"Deep@yj"
   }

   let user2=user1
   console.log(user1.email)
   console.log(user2.email)

   console.log(user2.email="deepak@gmail.com")
   console.log(user1.email)

   