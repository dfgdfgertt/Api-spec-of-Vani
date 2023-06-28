const asciidoctor = require('asciidoctor')();

const adocFile = 'data/index.adoc';
const htmlFile = 'index.html';

asciidoctor.convertFile(adocFile, { to_file: htmlFile });
