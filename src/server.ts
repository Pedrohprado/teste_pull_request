import express from 'express';

const server = express();

console.log('te');

server.listen(8080, () => {
  console.log('run');
});
