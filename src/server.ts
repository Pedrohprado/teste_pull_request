import express from 'express';

const server = express();

console.log('testing');

server.listen(8080, () => {
  console.log('run');
});
