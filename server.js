const createApp = require('./src/app/index.js')
const {connect} = require('./src/app/infraestructure/db/index');
const IoService = require('./src/app/domain/services/io');

connect('mongodb://root:rootpassword@localhost:27017/organism?authSource=admin')
  .then(connection => {
    const app = createApp();
    const server = app.listen(3000, () => console.log('Serving in port 3000'));
    const io = IoService(server);
    io.connect();
  })
  .catch(error => console.log(error))

  