const fs = require('fs')
const ejs = require('ejs')
const htmlToPdf = require('html-pdf-node')

const localModel = require('../models/local-model')

const caraterEventolModel = require('../models/carater-evento-model')

const horaInicioModel = require('../models/hora-inicio-model')

const horaFimModel = require('../models/hora-fim-model')

const handlerGetEvento = (req, res, next) => {
  console.log('<<<  event page working  >>>')

  // local
  const resultadoModel = localModel.getAllLocal()

  const localItensViewModel = resultadoModel.map((item) => {
    return {
      value: item.id,
      label: item.descricao
    }
  })

  // carater do evento

  const resultadoCaraterEvento = caraterEventolModel.getAllCaraterEvento()

  const caraterEventoItensViewModel = resultadoCaraterEvento.map((item) => {
    return {
      value: item.id,
      label: `${item.descricao}`
    }
  })

  // hora de início
  const resultadoHoraInicio = horaInicioModel.getAllHoraInicio()

  const horaInicioItensViewModel = resultadoHoraInicio.map((item) => {
    return {
      value: item.id,
      label: `${item.descricao}`
    }
  })

  // hora do término
  const resultadoHoraFim = horaFimModel.getAllHoraFim()

  const horaFimItensViewModel = resultadoHoraFim.map((item) => {
    return {
      value: item.id,
      label: `${item.descricao}`
    }
  })

  const getViewModel = {
    local: localItensViewModel,
    caraterEvento: caraterEventoItensViewModel,
    horaInicio: horaInicioItensViewModel,
    horaFim: horaFimItensViewModel
  }
  res.render('evento', getViewModel)
}

const handlerPostEvento = (req, res, next) => {

  // TODO Validar os dados que recebo no formulario
  // TODO buscar descricoes dos valores do formulario

  const body = req.body

  // -- view model para renderizar o evento

  const localResultado = localModel.getLocalPorId(body.local)

  const caraterEventoResultado = caraterEventolModel.getCaraterEventoPorId(body.carater)

  const horaInicioResultado = horaInicioModel.getHoraInicioPorId(body.inicio)

  const horaFimResultado = horaFimModel.getHoraFimPorId(body.fim)

  const viewModel = {
    nome: body.name,
    email: body.email,
    cpf: body.cpf,
    telefone: body.telefone,
    local: localResultado.descricao,
    nomeDoEvento: body.titulo,
    tipoDeEvento: caraterEventoResultado.descricao,
    endereco: body.endereco,
    dataEvento: body.dataEvento,
    horaInicio: horaInicioResultado.descricao,
    horaFim: horaFimResultado.descricao
  }

  // -- criando o template

  var htmlText = fs.readFileSync('./views/evento-pdf.ejs', 'utf8')
  // console.log(htmlText)


  // -- criando o html

  var htmlRenderized = ejs.render(htmlText, viewModel)
  // console.log(htmlRenderized)

  // -- transformando em pdf

  let file = { content: htmlRenderized }
  let options = {
    format: 'A4',
    printBackground: true
  }

  htmlToPdf.generatePdf(file, options)
    .then(pdfBuffer => {
      res.contentType("application/pdf")
      res.send(pdfBuffer)
    })

  console.log('<<  generating pdf  >>')
  // res.send({
  //     mensagem:"teste do POST Evento"
  // })
}

module.exports = {
  get: handlerGetEvento,
  post: handlerPostEvento
}