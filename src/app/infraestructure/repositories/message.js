const mongoose = require('mongoose');
const model = require('../../domain/models/message');
const Message = mongoose.model('Message', model);
const ioService = require('../../domain/services/io');

module.exports = {

  get: function(req, res) {
    Message.find({},(err, messages)=> {
      res.send(messages);
    });
  },

  post: function(req, res) {
    const message = new Message(req.body);
    message.save((err) => {
      if (err) {
        res.sendStatus(500);
      }
      
      const io = new ioService();
      io.emit('message', req.body);    
      res.status(200).send(message);
    })
  }
}