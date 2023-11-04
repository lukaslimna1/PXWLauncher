const path = require('path');
const { Application } = require('spectron');

global.beforeEach(async () => {
  this.app = new Application({
    path: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'), // Caminho para o executável do Electron
    args: [path.join(__dirname, '..')], // Caminho para o diretório do seu aplicativo
  });

  await this.app.start();
});

global.afterEach(async () => {
  if (this.app && this.app.isRunning()) {
    await this.app.stop();
  }
});
