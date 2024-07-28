const express = require('express');

const helloWorldRouter = express.Router();

helloWorldRouter.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = { helloWorldRouter };