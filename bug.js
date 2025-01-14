const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Unhandled exception  in the server
//Error handling is essential in Node.js to prevent crashes.  The above code lacks error handling. If an unexpected error occurs during request processing, the server will crash without providing any feedback.
//To address this, you should implement a try...catch block to handle potential exceptions and prevent server crashes.