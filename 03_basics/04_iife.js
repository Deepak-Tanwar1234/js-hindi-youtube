/*  Immediately invoked function expression-They are uesd when we 
    want to execute a function Immediately like in case of database
    connectivity .And to solve the problem global scope pollutants
    because they value inside the function*/

   /*function chai(){
       console.log("DB Connected")
   } 
   chai()  */

   // Function beolw is a iife
   (function chai(){
       console.log("DB Connected")
   })();

    //Function belows are unnammed iife
   ( () => {
       console.log("DB Connected 2")
   })();

   ( (name) => {
       console.log("DB Connected 2 ${name}")
   })("Deepak") ;