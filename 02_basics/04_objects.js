// its singleton objects
const tinderuser1=new Object() 
console.log(tinderuser1) 

const tinderuser2={

}  //Above object is a non-singleton object

tinderuser2.id="123abc"
tinderuser2.name="Deepak"
tinderuser2.isLoggedIn=false

console.log(tinderuser2)
//const tinderuser3=Object.create()
//console.log(tinderuser3)

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Deepak",
            lastname:"Tanwar"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}
//console.log((obj3))
//console.log(obj1)
const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3)
console.log(obj1)

const obj5={...obj1,...obj2}  
console.log(obj5)

//Array of objects
const user=[
    {
        id:1,
       email:"d@gmail.com"
    },
    {
        id:2,
       email:"p@gmail.com"
    }
]

console.log(user[0].id)

console.log(tinderuser2)
console.log(Object.keys(tinderuser2))
console.log(Object.values(tinderuser2))
console.log(Object.entries(tinderuser2))
console.log(tinderuser2.hasOwnProperty("location"))


//**************** Destructuring of object *****************

const course = {
     courseName:"JS in hindi",
     price:"120",
     courseInstructor:"Deepak Tanwar"
}
console.log(course.courseName)
console.log(course.price)
console.log(course.courseInstructor)

/* Now there is a problem that we have to write and excute 
console.log statement every time to access object key every time
 so to make it easier we use destructring of object .which mentioned
 below */

 const {courseInstructor:instructor} = course
 //console.log(courseInstructor)
 console.log(instructor)

 /* const navbar =({company})=>{
        
    }

    navbar(comapny="Deepak") */

 /* JSON-Read about JSON also at the vedios end.and API is used  
 for doing our work easy and it stored or come inside {} 
 which is called json and then we pick data feom these JSON file*/

 /*
 {
     courseName:"JS in hindi",
     price:"120",
     courseInstructor:"Deepak Tanwar"
 }  
     */