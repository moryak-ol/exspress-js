const Express = require('express')
const path = require('path')
const app = new Express()
const PORT = 3000

const createPath = (page) => path.resolve(__dirname, `${page}.html`)

const index = path.resolve(__dirname, 'task_ol_dz.html')

app.use(Express.static('./public'))

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening my port ${PORT}`)
})

app.get('/home', (req, res) => {
    res.sendFile(index)
})

app.get('/posts/:id', (req, res) => {
    res.sendFile(createPath('post'))
})
app.get('/posts', (req, res) => {
    res.sendFile(createPath('add-post'))
})
app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('eror'))
})
