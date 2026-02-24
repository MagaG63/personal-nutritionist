const express = require('express');
const morgan = require('morgan');
const aiRouter = require('./routes/ai.router');

const app = express();

app.use(express.json())
app.use(morgan('dev'))


app.use('/api/ai', aiRouter)

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
})

module.exports = app;