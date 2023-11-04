const fs = require('fs');
const path = require('path');
const { shell } = require('electron');
const axios = require('axios'); // Importe o módulo axios
const { exec } = require('child_process');


document.getElementById('startButton').addEventListener('click', () => {
    // Diretório onde o Launcher está instalado (ajuste o caminho conforme necessário)
    const diretorioLauncher = __dirname;


    // Lista de arquivos essenciais para o jogo (nomes de arquivos ou checksums)
    const arquivosNecessarios = ['arquivo1.txt', 'arquivo2.txt'];

    // Função para verificar e baixar os arquivos necessários
    async function verificarEObterArquivos() {
        for (const arquivo of arquivosNecessarios) {
            const caminhoArquivo = `${diretorioLauncher}/${arquivo}`;
            if (!fs.existsSync(caminhoArquivo)) {
                try {
                    // Fazer o download do arquivo
                    const response = await axios.get(`http://seu-servidor/arquivos/${arquivo}`, { responseType: 'arraybuffer' });
                    // Salvar o arquivo no diretório do Launcher
                    fs.writeFileSync(caminhoArquivo, response.data);
                    console.log(`Arquivo ${arquivo} baixado com sucesso.`);
                } catch (error) {
                    console.error(`Erro ao baixar o arquivo ${arquivo}: ${error.message}`);
                }
            }
        }

        // Lógica para iniciar o Pixelmon quando os arquivos estiverem prontos
        // Quando os arquivos estiverem prontos, iniciar o Pixelmon.exe
    console.log('Arquivos baixados. Iniciando o Pixelmon World...');
    const caminhoExe = path.join(diretorioLauncher, 'Pixelmon.exe');

    // Verificar se o arquivo Pixelmon.exe existe
    if (fs.existsSync(caminhoExe)) {
        // Executar o arquivo Pixelmon.exe
        exec(caminhoExe, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao iniciar o Pixelmon: ${error.message}`);
            } else {
                console.log('Pixelmon iniciado com sucesso.');
            }
        });
    } else {
        console.error('Arquivo Pixelmon.exe não encontrado.');
    }
}

verificarEObterArquivos();
});
