// This program stores the names of disaster victims, and also volunteers

var totalVictims = Number(prompt("How many disaster victims do you wish to enter?"));

var victimPhoneNumbers = [];
var victimNames =[];
var victimStreetNames =[];


// the below stores names, phone numbers and street names of vitctims in three arrays

for (var i = 1; i< totalVictims+1; i++){
    var victimName = prompt("What is the name of vitcim number " + i + "?");
    victimNames.push(victimName);
    
    var phoneNumber = prompt("What is the phone number for victim number " + i +"?");
    victimPhoneNumbers.push(phoneNumber);
    
    var streetName = prompt("What is the street name victim number " + i + " lives on?");
    victimStreetNames.push(streetName);
}

var totalVolunteers = Number(prompt("How many disaster volunteers do you wish to enter?"));

var volunteerPhoneNumbers = [];
var volunteerNames =[];
var volunteerStreetNames =[];


// the below stores names, phone numbers and street names of volunteers in three arrays

for (var i = 1; i< totalVolunteers+1; i++){
    var volunteerName = prompt("What is the name of volunteer number " + i + "?");
    volunteerNames.push(volunteerName);
    
    var phoneNumber = prompt("What is the phone number for volunteer number " + i +"?");
    volunteerPhoneNumbers.push(phoneNumber);
    
    var streetName = prompt("What is the street name volunteer number " + i + " lives on?");
    volunteerStreetNames.push(streetName);
}

alert("The number of people in need is: " + totalVictims+
"\nHere is a list of the the victims: \n" + victimNames.join("\n") +
"\nThe number of volunteers is: " + totalVolunteers +
"\nHere is a list of the volunteers: \n" + volunteerNames.join("\n")
);