const fs = require('fs')
const ejs = require('ejs')
const htmlToPdf = require('html-pdf-node')

const sexoModel = require('../models/sexo-model')

const estadoCivilModel = require('../models/estado-civil-model')
const { INSPECT_MAX_BYTES } = require('buffer')

const handlerGetEvento = (req, res, next) => {
  console.log(':: página do evento funfando, será que vai gerar o pdf? Só testando')

  // sexo
  const resultadoModel = sexoModel.getAllSexo()

  const sexoItensViewModel = resultadoModel.map((item) => {
    return {
      value: item.id,
      label: item.descricao
    }
  })

  // estado civil

  const resultadoEstadoCivil = estadoCivilModel.getAllEstadoCivil()

  const estadoCivilItensViewModel = resultadoEstadoCivil.map((item) => {
    return {
      value: item.id,
      label: `${item.descricao}`
    }
  })

  const getViewModel = {
    sexo: sexoItensViewModel,
    estadoCivil: estadoCivilItensViewModel
  }
  res.render('evento', getViewModel)
}

const handlerPostEvento = (req, res, next) => {

  // TODO Validar os dados que recebo no formulario
  // TODO buscar descricoes dos valores do formulario

  const body = req.body

  // -- view model para renderizar o evento

  const genderResultado = sexoModel.getSexoPorId(body.gender)

  const estadoCivilResultado = estadoCivilModel.getEstadoCivilPorId(body.maritalStatus)

  const viewModel = {
    nome: body.name,
    email: body.email,
    cpf: body.age,
    telefone: body.telefone,
    sexo: genderResultado.descricao,
    estadoCivil:estadoCivilResultado.descricao
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