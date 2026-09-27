const express = require('express');
const articlesRouter = require('./routes/articles');
const notFoundHandler = require('./middleware/notFoundHandler');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config');

const app = express();

app.use(express.json());

app.use('/articles', articlesRouter);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`articles-api listening on http://localhost:${config.port}`);
});

module.exports = app;