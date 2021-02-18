const handlerGetAbout = (req, res, next) => {
  console.log(':: sobre funcionando, falta organizar esse css né?')
  res.render('sobre')
}

module.exports = {
  get: handlerGetAbout
}