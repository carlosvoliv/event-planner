const handlerGetAbout = (req, res, next) => {
  console.log('<<<  about page working  >>>')
  res.render('sobre')
}

module.exports = {
  get: handlerGetAbout
}