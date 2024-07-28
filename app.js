const express = require('express');
const app = express();
const helloWorldRouter = require('./routes/index').helloWorldRouter;

app.use('/', helloWorldRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});