const fs = require('fs');
const PDFReader = require('pdfjs-dist');
const asciidoctor = require('asciidoctor.js')();

// Đường dẫn đến tệp PDF đầu vào
const inputPdfPath = 'data/input.pdf';

// Đường dẫn đến tệp AsciiDoc đầu ra
const outputAdocPath = 'data/output.adoc';

// Tạo một đối tượng PDFReader để đọc tệp PDF
const pdfReader = new PDFReader();

// Biến lưu trữ nội dung AsciiDoc
let asciiDocContent = '';

// Sự kiện được kích hoạt khi có một dòng văn bản được đọc từ PDF
pdfReader.on('text', (text) => {
  // Thêm nội dung văn bản vào biến AsciiDoc
  asciiDocContent += text + '\n';
});

// Sự kiện được kích hoạt khi kết thúc việc đọc tệp PDF
pdfReader.on('end', () => {
  // Tạo tệp AsciiDoc từ nội dung đã thu thập được
  const asciidoc = asciidoctor.convert(asciiDocContent);

  // Lưu tệp AsciiDoc
  fs.writeFileSync(outputAdocPath, asciidoc);
  console.log('Chuyển đổi PDF thành công!');
});

// Đọc tệp PDF đầu vào
fs.createReadStream(inputPdfPath).pipe(pdfReader);
