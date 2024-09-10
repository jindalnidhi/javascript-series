const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//**************** const use on primitive datatype(string, boolean,number) ************************//
/*
Inki values directly memory mein store hoti hain. Jab aap inko reassign karte 
ho, koi reference change nahi hota, bas value replace hoti hai.
*/


//*****************************const use on refrenced type(array,object) ***********************//

/*
Inki values directly memory mein store hoti hain. Jab aap inko reassign 
karte ho, koi reference change nahi hota, bas value replace hoti hai.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])