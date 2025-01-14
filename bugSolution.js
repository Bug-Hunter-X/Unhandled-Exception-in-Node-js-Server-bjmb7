const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    // Your request handling logic here
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
//This improved version includes a try...catch block. If an error occurs during request processing, the catch block will handle it, preventing a server crash.  The server will return a 500 error code along with an error message, providing useful feedback to the client.