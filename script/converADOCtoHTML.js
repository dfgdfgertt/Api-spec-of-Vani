const asciidoctor = require('asciidoctor')();

const adocFile = 'data/index.adoc';
const htmlFile = 'views/index.html';

asciidoctor.convertFile(adocFile, { to_file: htmlFile });
