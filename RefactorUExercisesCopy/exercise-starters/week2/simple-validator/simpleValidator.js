var phoneNum = prompt("Hey baby, whats your number? (with the dashes baby, they are sooooo hot) (in the form 123-456-7899)", "");
alert( phoneNum.charAt(3) === "-" && phoneNum.charAt(7) === "-");

var birthDate = prompt ("Tell me your birthday in the form (12/25/2015)");
alert (birthDate.charAt(2)=== "/" && birthDate.charAt(5) === "/");

var postalCode = prompt("Whats yo zip code? Format XXXXX");
alert (postalCode.length === 5 && !isNaN(postalCode));


var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", 
"IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", 
"OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY");
var state = prompt("Whats your state abbreviation in capital letters?");
alert (state.length ===2 && stateList.includes(state))

var married = prompt("Are you married, yes or no?");
alert(married.toLowerCase() === "yes" || married.toLowerCase() === "no" );