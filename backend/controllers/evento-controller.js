const fs = require('fs')
const ejs = require('ejs')
const htmlToPdf = require('html-pdf-node')

const handlerGetEvento = (req, res, next) => {
    console.log('evento ok')
    res.render('evento')
}

const handlerPostEvento = (req, res, next) => {
    // console.log(req)
    // console.log(req.body)

    const body = req.body

    // TO-DO: criar view model para render evento

    const viewModel = {
        nome: body.name,
        email: body.email,
        age: body.age,
    }

    // TO-DO: criar template

    var htmlText = fs.readFileSync('./views/evento-pdf.ejs', 'utf8')
    console.log(htmlText)

    
    // TO-DO: criar html

    var htmlRenderized = ejs.render(htmlText, viewModel)
    console.log(htmlRenderized)

    // TO-DO: transformar em pdf

    let file = { content: htmlRenderized }
    let options = { format: 'A4' }

    htmlToPdf.generatePdf(file, options)
    .then(pdfBuffer => {
            res.contentType("application/pdf")
            res.send(pdfBuffer)
    })


    // res.send({
    //     mensagem:"teste do POST Evento"
    // })
}

module.exports = {
    get: handlerGetEvento,
    post: handlerPostEvento
}