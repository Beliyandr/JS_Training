const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;

function wringOut(count) {
    return new Promise((resolve, reject) => {
        if(count > 100) {
            reject (new Error("Слишком много отжиманий"));
        }
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME);
    } );
}

function squatting(count){
    return new Promise((resolve, reject) => {
        if(count > 1000) {
            reject(new Error("Слишком много приседаний"));
        }
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    })
}

//exaample_1

// console.log("Начать отжимания")
// wringOut(10).then(() => {
//     console.log("Отжался 10 раз");
// });


//exaample_2

// console.log("Начать отжимания")
// wringOut(10)
//     .then(() => {
//     console.log("Отжался 10 раз");
//     return squatting(20);
//     }).then(() => {
//         console.log("Присел 20 раз");
//     });



//exaample_3

// console.log("Начать сложную тренировку")
// wringOut(10)
//     .then(() => {
//     console.log("Отжался 10 раз");
//     return squatting(1001);
//     }).then(() => {
//         console.log("Присел 20 раз");
//     }).catch((err) => {
//         console.log(err.toString());
//     });


//exaample_4
async function myTraining() {
try{
console.log("Начать сложную тренировку")
await wringOut(10)
    console.log("Отжался 10 раз");
    await squatting(100);
    console.log("Присел 20 раз");
    return true;
}catch(err){
        console.log(err.toString());
        return false;
    }    
}
myTraining().then((result) => {
    console.log(result);
})