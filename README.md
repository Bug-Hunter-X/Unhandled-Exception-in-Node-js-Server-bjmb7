# Node.js Unhandled Exception Bug

This repository demonstrates a common error in Node.js applications: unhandled exceptions.  The `bug.js` file contains a simple HTTP server that lacks proper error handling. This can lead to unexpected server crashes. The `bugSolution.js` file shows how to improve the code by incorporating try...catch blocks to handle errors gracefully.

## Bug Description

The original code creates a basic HTTP server. However, it doesn't include any error handling.  If an unexpected error occurs (e.g., a database connection failure or an issue with file I/O), the server will crash without warning.

## Solution

The solution involves adding try...catch blocks within the request handler to catch and handle potential exceptions. This prevents the server from crashing and allows for more robust error management.