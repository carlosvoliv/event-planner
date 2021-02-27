const fs = require('fs')
const ejs = require('ejs')
const htmlToPdf = require('html-pdf-node')

const localModel = require('../models/local-model')

const caraterEventolModel = require('../models/carater-evento-model')

const handlerGetEvento = (req, res, next) => {
  console.log(':: página do evento funfando, será que vai gerar o pdf? Só testando')

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

  const getViewModel = {
    local: localItensViewModel,
    caraterEvento: caraterEventoItensViewModel
  }
  res.render('evento', getViewModel)
}

const handlerPostEvento = (req, res, next) => {

  // TODO Validar os dados que recebo no formulario
  // TODO buscar descricoes dos valores do formulario

  const body = req.body

  // -- view model para renderizar o evento

  const localResultado = localModel.getLocalPorId(body.local)

  const caraterEventoResultado = caraterEventolModel.getCaraterEventoPorId(body.maritalStatus)

  const viewModel = {
    nome: body.name,
    email: body.email,
    cpf: body.cpf,
    telefone: body.telefone,
    local: localResultado.descricao,
    tipoDeEvento: caraterEventoResultado.descricao,
    endereco: body.endereco
  }

  // -- criando o template

  var htmlText = fs.readFileSync('./views/evento-pdf.ejs', 'utf8')
  // console.log(htmlText)


  // -- criando o html

  var htmlRenderized = ejs.render(htmlText, viewModel)
  // console.log(htmlRenderized)

  // -- transformando em pdf

  let file = { content: htmlRenderized }
  let options = { format: 'A4' }

  htmlToPdf.generatePdf(file, options)
    .then(pdfBuffer => {
      res.contentType("application/pdf")
      res.send(pdfBuffer)
    })

  console.log('::  se você está lendo essa mensagem, saiba que seu pdf está sendo feito nesse exato momento')
  // res.send({
  //     mensagem:"teste do POST Evento"
  // })
}

module.exports = {
  get: handlerGetEvento,
  post: handlerPostEvento
}