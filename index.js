function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(HELLO) {
    console.log('HELLO'.toLowerCase());
}

// function sayHiToHeadphonedRoommate(string) {
//     if (string === string.toLowerCase()) {
//         console.log("I can't hear you!");
//     }
//     else if (string === string.toUpperCase()) {
//         console.log("YES INDEED!");
//     }
//     else if (string === "I love you, Grandma.") {
//         console.log("I love you, too");
//     }
// }

function sayHiToHeadphonedRoommate(string){
    return ("");
}

// sayHiToHeadphonedRoommate("I can\'t hear you");

function sayHiToHeadphonedRoommate(string){
    switch (string) {
        case string.toLowerCase():
            return "I can't hear you!";
            break;
        case string.toUpperCase():
            return "YES INDEED!";
            break;
        case string = "Let's have dinner together!":
            return 'I would love to!';
            break;
    }
}