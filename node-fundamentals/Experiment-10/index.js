const http = require('http');
const handler = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
};
const server = http.createServer(handler);

const port = 3000;
server.listen(port, () => {
 console.log(`Server running at http://localhost:${port}/`);
});