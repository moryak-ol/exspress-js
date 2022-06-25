const array = []

function getRandom() {
    return (Math.floor(Math.random() * 10) + 1) * 1000
}

function getPromise() {
    return new Promise((resolve, reject) => {
        let randomMs = getRandom()

        setTimeout(function () {
            // console.log(randomMs)
            resolve(randomMs)
        }, randomMs)
    })
}
for (let index = 0; index <= 10; index++) {
    array[index].then(() => {
        console.log(randomMs)
    })
}

