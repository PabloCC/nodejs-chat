const express = require('express');
const messageResource = require('./api/resources/message');

module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use(express.static(__dirname));

  app.use(messageResource);
  return app
}
