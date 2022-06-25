function getRandom() {
    return Math.floor(Math.random() * 5)
}

let promise = new Promise((resolve, reject) => {
    let random = getRandom()
    if (random === 0) {
        reject('error')
    } else {
        resolve(1 / random)
    }

})
promise.then((result) => {
    console.log(result)
})

promise.catch((err) => {
    console.log(err)
})