const pdftotext = require('pdf-to-text');
const fs = require('fs');

// Đường dẫn đến tệp PDF
const pdfPath = 'data/Vanila-API-Spec-V1.1.4.pdf';
// Đường dẫn đến tệp .adoc để lưu nội dung ASCII
const adocPath = 'data/output/index.adoc';

// Đọc nội dung từ tệp PDF và chuyển đổi sang ASCII
pdftotext.pdfToText(pdfPath, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    // Ghi nội dung ASCII vào tệp .adoc
    fs.writeFile(adocPath, data, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Đã lưu nội dung vào tệp .adoc');
      }
    });
  }
});
