import express from 'express';

const server = express();

console.log('running');

server.listen(8080, () => {
  console.log('run');
});
