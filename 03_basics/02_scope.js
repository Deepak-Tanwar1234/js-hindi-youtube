/*Scope-Scope have two types Global scope and local scope
     1.Global Scope-its is a space outside the fnction in a progeamme
     and the varaiable declared outside called global scope variable
     2.Local scope - its space inside the function   */

 // never use var variable
 //var c=3000

 if(true){
     let a=10    //these are local scope variable
     const b=20
     var c=30
      
 }

// console.log(a)
// console.log(b)
 console.log(c)

 let ab=230
 if(true){
     let ab=10    
    console.log("Inner value of ab ",ab)
      
 }

 console.log("Outer value of ab ",ab)

 //*******************************************************

 /* Nested Scope-function inside a function and in that
    case we get nasted scope */

    function one(){
        const username="hitesh"
          function two(){
              const website="youtube"
              console.log(username)
          }
      //  console.log(website)
        two()
    }

    one()

    if(true){
         const username="hitesh tanwar"
          if(username === "hitesh tanwar"){
              const website="youtube"
              console.log(username)
          }
     //   console.log(website)
       
    }
   // console.log(username)

  /* function add1(num){
      return num+1
   }
   console.log(add1(5))  */

   console.log(add1(5)) 
   function add1(num){
      return num+1
   }
   
  /* const add2=function(num){
        return num+1
   }  
   console.log(add2(10)) */

  // console.log(add2(10)) 
   const add2=function(num){
        return num+1
   }  
   