import express from 'express';

const server = express();

console.log('t');

server.listen(8080, () => {
  console.log('run');
});
