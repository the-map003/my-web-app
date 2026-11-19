const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/login') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('User Authentication Page\n');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a basic web app!\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});