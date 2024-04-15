const accountId =144543;
let accountEmail ="krishna@google.com";//it has block scope
var accountPassword="12345";
accountCity = "Navsari";// In js we can define the variable by this method too

accountEmail="hcah@gmail.com"
accountPassword="233r344"
accountCity="vadodra"
let accountState //This will show undefined as in js any thing which is not defined shows undefined
// accountId=2;//not allowed
console.log(accountId);
/* prefer not use var
because of issues in block scope and functional scope */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])