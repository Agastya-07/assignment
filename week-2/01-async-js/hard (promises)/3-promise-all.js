/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(t),t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(t),t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(t),t*1000)
    })
}
//    console.log(wait1(1))
//    wait1(1).then((time)=>{
//        console.log(`wait 1 is completed in ${time} seconds`)
//     })
//     console.log(wait1())
//     wait2(2).then((time)=>{
//         console.log(`wait 2 is completed in ${time} seconds`)
//     })
//     wait3(3).then((time)=>{
//         console.log(`wait 3 is completed in ${time} seconds`)
//     })
//     console.log(wait2(2))
//     console.log(wait3(3))

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(()=>{
      const end= Date.now()
      return end-start;
})
}
// calculateTime(1,2,3)


module.exports = calculateTime;
