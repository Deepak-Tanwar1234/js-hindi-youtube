const accountId=1
let accountName ="Deepak"
var accountEmail="tan12@gmail.com"
var accountPassword="2154"
accountcity="Delhi"
let accountState

//accountId=2   not allowed
console.log(accountId)
console.log(accountName)

 accountName ="john"
 accountEmail="john2@gmail.com"
 accountPassword="214"
accountcity="Newyork"

console.log(accountName)
console.log(accountEmail)

console.table([accountId,accountName,accountEmail,accountPassword,accountcity,accountState])

/*
Prefer not to use var
because of issue in functional scope and block scope
*/
