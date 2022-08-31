const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send("hello express");
})

server.get('/test', (req, res) => {
  res.send("test");
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
