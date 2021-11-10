const messageRepository = require('../../infraestructure/repositories/message');

module.exports = ({
  get(req, res) {
    return messageRepository.get(req, res);
  },

  post(req, res) {
    return messageRepository.post(req, res);
  }
});