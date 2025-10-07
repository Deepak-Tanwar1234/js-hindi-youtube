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
