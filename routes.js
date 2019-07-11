
const fs = require('fs');
const path = require('path');

const wkhtmltopdf = require('wkhtmltopdf');
const streamToPromise = require('stream-to-promise');
const Handlebars = require('handlebars');

module.exports = (req, res, next) => {

  const data = {
    path: path.resolve(__dirname, './client'),
    script: 'alert(`cool`)',
    title: "Statistique de paiement de frais scolaire",
    serie2: 
      [
        ['1er Secondaire', 100], 
        ['2eme Secondaire', 200],
        ['3eme Scientifique', 135],
        ['4eme Commercial', 10],
        ['4eme Social', 34],
        ['5eme coupe et coutrues', 60], ['6em bio', 50]
      ],
      serie2Xlabel : "Liste des classes",
      serie2Ylabel : "Montant payé",
      
  }

  // first compilation with js
  var source = require('./template.handlebars')(data);

  // second compilation with Handlebars
  var finalHtml = Handlebars.compile(source)(data);

  const pdfStream = wkhtmltopdf(finalHtml, {
    'javascriptDelay': 1000,
    'animation': false,
    'dpi': 96,
    'zoom': 1,
    'enableJavascript': true,
    'enableSmartShrinking': true,
    'noStopSlowScripts': true,
    pageSize: 'A4',
    orientation: 'landscape',
  })
  streamToPromise(pdfStream).then((rs) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.send(rs);
  }).catch(next);

}
