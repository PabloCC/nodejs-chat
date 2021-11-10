const express = require('express');
const messageResource = require('./api/resources/message');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(__dirname));
  
  app.use(messageResource);
  return app;
}
