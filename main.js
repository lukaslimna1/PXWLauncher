const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    // Crie a janela do navegador.
    mainWindow = new BrowserWindow({
        width: 938, // Largura da janela
        height: 575, // Altura da janela
        icon: path.join(__dirname, 'Imagens/Social/Discord-Laranja.png'), // Caminho para o ícone do aplicativo
        resizable: false, // Impede que o usuário redimensione a janela
        //frame: false, // Remove a barra de título
        webPreferences: {
            nodeIntegration: true
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

// Saia quando todas as janelas estiverem fechadas, exceto no macOS. No macOS, é comum
// para aplicativos e sua barra de menu permanecerem ativos até que o usuário saia explicitamente com Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    // No macOS, recrie uma janela no aplicativo quando o
    // ícone do dock for clicado e não houver outras janelas abertas.
    if (mainWindow === null) createWindow();
});
