const fs = require('fs');
const filePath = './example.txt';

// CREATE
function createFile() {
  fs.writeFile(filePath, 'This is the initial content.', (err) => {
    if (err) throw err;
    console.log('✅ File created');
  });
}

// READ
function readFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('📖 File content:', data);
  });
}

// UPDATE
function updateFile() {
  fs.appendFile(filePath, '\nThis is the updated content.', (err) => {
    if (err) throw err;
    console.log('✏️ File updated');
  });
}

// DELETE
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log('🗑️ File deleted');
  });
}

// Uncomment the function you want to test
//createFile();
// readFile();
//updateFile();
 deleteFile();
