const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    // Crie a janela do navegador.
    mainWindow = new BrowserWindow({
        width: 938,
        height: 575,
        icon: path.join(__dirname, 'Imagens/Social/Discord-Laranja.png'),
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // Adicione esta linha
            enableRemoteModule: true, // Adicione esta linha
        }
    });

    // Remove a barra de menu padrão
    mainWindow.setMenu(null);

    // Carregue o arquivo index.html na janela.
    mainWindow.loadFile('index.html');

    // Abra o DevTools (Ferramentas de Desenvolvedor) apenas em modo de desenvolvimento.
    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }

    // Emitido quando a janela é fechada.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// Este método será chamado quando Electron terminar de inicializar
// e estiver pronto para criar janelas do navegador.
app.whenReady().then(createWindow);

// Saia quando todas as janelas estiverem fechadas, exceto no macOS.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    // No macOS, recrie uma janela no aplicativo quando o
    // ícone do dock for clicado e não houver outras janelas abertas.
    if (mainWindow === null) createWindow();
});
