const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/fileFormidable.html');
});

app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();

  form.uploadDir = path.join(__dirname, '/uploads');
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).send('Error in file upload');
      return;
    }

    const oldPath = files.file[0].filepath;
    const newPath = path.join(form.uploadDir, files.file[0].originalFilename);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        res.status(500).send('Error saving the file');
        return;
      }

      res.send(`File uploaded successfully: ${files.file[0].originalFilename}`);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});