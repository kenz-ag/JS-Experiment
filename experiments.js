const monthlyRent = 500;

const yealyRent = montlyRent * 12;
console.log(yearlyRent);

const firstName = "Mackenzie";
const lastName = "Gillespie";

const sentance = "Hello " + firstName + ` ` + lastName + `! How are you!?`;
const sentanceWithTemplate = "Hello ${firstName} ${lastName}! How are you!?";

console.log(sentance);
console.log(sentanceWithTemplate);

//this is a comment 

/* 
This is also a comment 
*/


const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The Sky Is Blue!");
} else {
    console.log("The sky is ... not blue?");
}

const temperatureToday = 86

if (temperatureToday === 86) {
    console.log("it is too damn hot");
}   else {
            console.log("it is fine, maybe");
}
    
// this is coercion below when you are trying to compare a number against a string

const temperatureToday = 86

if (temperatureToday == "86") {
    console.log("it is too damn hot");
}   else {
            console.log("it is fine, maybe");
}

if (2 + 2 === 4) {
console.log(
    "Oh thank god, the fundamental principles of mathematics still hold true."
);
} else {
    console.log("uh, panic?");
}
    

// this is an example of asking "is not equal to" below

if (2 + 2 !== 4) {
    console.log(
        "Oh thank god, the fundamental principles of mathematics still hold true."
    );
    } else {
        console.log("uh, panic?");
    }


const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
    console.log("Cool, now I have a lot of nachos to myslelf.");
    else if (friendsAtYourParty >== 4) {
        console.log("Perfect amount to play some mario kart.");
    } else {
        console.log("Woooo turn on the dance music!");
    }    

    