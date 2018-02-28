require('dotenv').config();

const express = require('express');
const favicon = require('serve-favicon');

// ssl-express-www forces SSL on all pages
const secure = require('ssl-express-www');

const app = express();

app.use(secure);

app.use(favicon(`${__dirname}/favicon.ico`));
app.use(express.static(`${__dirname}/build`));

app.get('*', (request, response) =>
  response.sendFile(`${__dirname}/build/index.html`));

app.listen(process.env.PORT, () => { 
  console.log('__SERVER_UP__', process.env.PORT);
});
