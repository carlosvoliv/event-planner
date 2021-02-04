
const handlerGetEvento = (req, res, next) => {
    console.log('evento ok')
    res.render('evento')
}

const handlerPostEvento = (req, res, next) => {
    res.send({
        mensagem:"teste do POST Evento"
    })
}

module.exports = {
    get: handlerGetEvento,
    post: handlerPostEvento
}