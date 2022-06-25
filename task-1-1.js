let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve()
    }, 5000)
})
promise.then(function () {
    console.log('hello')
})