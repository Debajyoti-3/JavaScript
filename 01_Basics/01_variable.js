const accountId = 144553
let accountEmail = "debajyotimitra369@gamil.com"

// var accountPassword = "3245" var was in past

accountCity = "Kolkata"  // you can do like this
let accountState
/*
prefer not to use var:
because of issue in block scope and functional scope 
*/

// accountId = 2  (Not Allowed)

accountEmail = "g@gamil.com"
accountPassword = "1111"
accountCity = "Noida"

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
