// http module
const http = require('http');

// creating server, takes in request, and response
http.createServer((request, response) => {
    response.write('Hello World!');
    response.end();
// in order to run, must listen on port, hence:
}).listen(5000, () => console.log('Server is up and motherfucking...'));