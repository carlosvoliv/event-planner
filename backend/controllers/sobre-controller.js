const handlerGetAbout = (req, res, next) => {
    console.log('sobre ok')
    res.render('sobre')
}

module.exports = {
    get: handlerGetAbout
}