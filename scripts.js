// function drillingAsync (message, delay) {

//     setTimeout(() => {
//         return console.log(message);
//     }, 2000);

// }


function countDown(num, callback) {

    setTimeout(() => {

        if (num > 0) {
            console.log(num);
            countDown(num - 1, callback);
        } else {
            callback();
        }

    }, 1000);


}


const isDone = () => {
    console.log("Jobs Done");
}


// function getWords(word) {
//     setTimeout(() => {
//         return console.log(`This is the first return ${word}`);
//     }, 1000);
//     setTimeout(() => {
//         return console.log(`This is the second return ${word}`);
//     }, 3000);
//     setTimeout(() => {
//         return console.log(`This is the third return ${word}`);
//     }, 2000);
// }


// getWords('Giraffe');


countDown(6, isDone);
// drillingAsync('Today we are drilling aysnc')