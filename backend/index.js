console.log('funcionando')

const express = require('express')
const path = require('path')
const eventoController = require('./controllers/evento-controller')
const sobreController = require('./controllers/sobre-controller')
const PORT = 3001

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

const handlerRoot = (req, res, next) => {
    console.log('index ok')
    res.render('index')
}

app.get('/', handlerRoot)
app.get('/evento', eventoController.get)
app.post('/evento', eventoController.post)


app.get('/sobre', sobreController.get)


app.listen(PORT, () => {
    console.log ('conectado na porta :' + PORT)
})