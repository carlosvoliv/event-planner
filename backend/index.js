const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index');
})

app.get('/formulario', (req, res, next) => {
    res.render('formulario');
})

app.get('/sobre', (req, res, next) => {
    res.render('sobre');
})

app.listen(3001, () => {
    console.log('O servidor está rodando')
})