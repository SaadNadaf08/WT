// server.js
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm({
      uploadDir: path.join(__dirname, 'uploads'),
      keepExtensions: true, // preserves file extension
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Error uploading file');
      }

      console.log('Uploaded file:', files);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('File uploaded successfully');
    });

  } else {
    // Simple HTML form for testing
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myFile" />
        <button type="submit">Upload</button>
      </form>
    `);
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});