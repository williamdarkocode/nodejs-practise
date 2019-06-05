// require core node modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// create a server taking in a request, and response function
const server = http.createServer((request, response) => {
    // console.log(request.url);
    // checking url, if its slash '/'
    if(request.url === '/') {
        // read file at the current dirname/public/index.html
        // call back function takes content, and error
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            // if error, throw error
            if(err) {
                throw new Error(err);
            }
            // status code is set to 200, and content type is text/html
            response.writeHead(200, {'Content-Type' : 'text/html'})
            //output content in file
            response.end(content);
        });
        
    }
    if(request.url === '/api/users') {
        const users = [
            {name: "William Darko", age: 18},
            {name: "Stephanie Darko", age: 19},
            {name: "Victoria Darko", age: 12},
            {name: "Aaron Darko", age: 9}
        ];
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(users));
    }
});

// port either gets evironment variable or is set to 5000
const port = process.env.PORT || 5000;
// listen on that port, with call back that logs server is running
server.listen(port, () => {
    console.log('server running on port ', port);
});

// using nodemon kind of hot loads the dom

