const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpusCount = os.cpus().length;
  console.log('Master is started!\n' + `${cpusCount}`);
  for (let i = 0; i < cpusCount; i++) {
    cluster.fork();
  }
}

if (cluster.isWorker) {
  require('./worker.js');
}
