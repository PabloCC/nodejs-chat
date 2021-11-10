const IoServiceClass = class IoServiceClass {
  constructor(app) {
    const { Server } = require("socket.io");
    this.io = new Server(app);
  }

  connect() {
    this.io.on('connection', () =>{
      console.log('a user is connected');
    });
  }

  emit(event, data) {
    this.io.emit(event, data);
  }
}

let singleton;

const IoService = function(app) {
  if (typeof singleton === 'undefined') {
    singleton = new IoServiceClass(app);
  }

  return singleton;
}

module.exports = IoService;
