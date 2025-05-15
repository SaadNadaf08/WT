const http = require('http');

http.createServer((req, res) => {
  const now = new Date();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Current Date & Time: " + now.toString());
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
