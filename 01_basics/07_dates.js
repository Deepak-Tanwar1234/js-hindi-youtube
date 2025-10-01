// Dates 

let myDate=new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)

let myCreatedDate1=new Date(2023,0,26)
console.log(myCreatedDate1)
let myCreatedDate2=new Date(2023,0,26)
console.log(myCreatedDate2.toString())
let myCreatedDate3=new Date(2023,0,26,6,6)
console.log(myCreatedDate3.toString())

let myCreatedDate4=new Date("2023-01-26") //try 01-26-2023(indian)
console.log(myCreatedDate4.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate4.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getTime())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//`${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday:"long",
})