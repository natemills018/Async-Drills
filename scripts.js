// function drillingAsync (message, delay) {

//     setTimeout(() => {
//         return console.log(message);
//     }, 2000);
    
// }


function getWords (word) {
    setTimeout(() => {
        return console.log(`This is the first return ${word}`);
    }, 1000);
    setTimeout(() => {
        return console.log(`This is the second return ${word}`);
    }, 3000);
    setTimeout(() => {
        return console.log(`This is the third return ${word}`);
    }, 2000);
}


getWords('Giraffe');

// drillingAsync('Today we are drilling aysnc')