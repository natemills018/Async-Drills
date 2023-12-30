let asyncButton = document.getElementById('asyncButton');

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


let lunchTime = false;

function orderMeSomeFood(message) {
    return new Promise((resolve, reject) => {
        if (lunchTime === true) {
            let yourLunch = document.createElement('div');
            yourLunch.className = 'eatUp';
            yourLunch.lunch = 'your favourite lunch';
            yourLunch.drink = 'your favourite drink';

            // let yourLunch = {
            //     lunch: "your favourite lunch",
            //     drink: "your favourite drink",
            // }
            console.log(yourLunch.drink);
            resolve(message);
        } else {
            let error = new Error('Something odd has happened');
            reject(error);
        }
    })
}


asyncButton.addEventListener('click', () => {

    orderMeSomeFood('Pineapple')
        .then((a) => {
            console.log(a);
        }).catch((e) => {
                console.log('An error has occured');
            })
})



