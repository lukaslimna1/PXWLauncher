// script.js
import { msal } from "@microsoft/identity-client";
import axios from 'axios';
const { app, BrowserWindow, shell } = require('electron');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

document.addEventListener('DOMContentLoaded', () => {
    // Configurações do cliente MSAL (substitua com suas informações)
    const clientId = "8a90a51b-4725-4e30-b44f-b7b8d93cfa62";
    const clientSecret = "5b07c282-ad4a-47b0-bb5e-4e8095664779";
    const authority = "https://login.microsoftonline.com/organizations";

    // Inicialização do cliente MSAL
    const msalClient = new msal.PublicClientApplication(clientId, clientSecret, authority);

    // Função para verificar e obter os arquivos necessários
    async function verificarEObterArquivos(diretorioLauncher, arquivosNecessarios) {
        // Implementação da função...
    }

    // Função para autenticar conta Microsoft usando o token
    async function autenticarMicrosoft(authToken) {
        try {
            // Fazer uma requisição para autenticar a conta Microsoft
            const response = await axios.post('http://localhost:5500/login.html/autenticar-microsoft', {
                authToken: authToken,
            });

            // A resposta deve incluir informações da conta Microsoft
            const microsoftAccountInfo = {
                username: response.data.username,
                email: response.data.email,
                // Outras informações relevantes
            };

            // Lógica para lidar com as informações da conta Microsoft
            console.log('Conta Microsoft autenticada:', microsoftAccountInfo);

            // Inicia o Pixelmon (substitua com sua lógica específica)
            iniciarPixelmon();
        } catch (error) {
            console.error('Erro ao autenticar a conta Microsoft:', error.message);
        }
    }

    // Evento de clique no botão de iniciar
    document.getElementById('startButton').addEventListener('click', async () => {
        // Diretório onde o Launcher está instalado (ajuste conforme necessário)
        const diretorioLauncher = app.getAppPath();

        // Lista de arquivos essenciais para o jogo (nomes de arquivos ou checksums)
        const arquivosNecessarios = ['arquivo1.txt', 'arquivo2.txt'];

        // Verificar e obter os arquivos necessários
        await verificarEObterArquivos(diretorioLauncher, arquivosNecessarios);

        // Lógica para iniciar o Pixelmon quando os arquivos estiverem prontos
        iniciarPixelmon(diretorioLauncher);
    });

    // Registro: Criar Conta
    document.getElementById('registro-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        // Coletar dados do formulário
        const username = document.querySelector('.Username').value;
        const email = document.querySelector('.Mail').value;
        const password = document.querySelector('.Password').value;

        try {
            // Fazer a requisição ao servidor para criar a conta
            const response = await axios.post('http://seu-servidor/registrar', {
                username,
                email,
                password
            });

            // Limpar campos do formulário
            limparCamposRegistro();

            // Exibir mensagem de sucesso (substitua conforme necessário)
            mostrarMensagem('success', 'Conta criada com sucesso!');
        } catch (error) {
            // Exibir mensagem de erro (substitua conforme necessário)
            mostrarMensagem('error', 'Erro ao criar a conta. Tente novamente.');
        }
    });

    // Esqueci a Senha
    document.getElementById('forgot-password-btn').addEventListener('click', async () => {
        // Coletar o e-mail do usuário
        const email = document.querySelector('.Mail').value;

        try {
            // Fazer a requisição ao servidor para recuperar a senha
            const response = await axios.post('http://seu-servidor/recuperar-senha', {
                email
            });

            // Exibir mensagem de sucesso (substitua conforme necessário)
            mostrarMensagem('success', 'Um e-mail de recuperação foi enviado para o seu endereço de e-mail.');
        } catch (error) {
            // Exibir mensagem de erro (substitua conforme necessário)
            mostrarMensagem('error', 'Erro ao enviar e-mail de recuperação. Verifique seu endereço de e-mail.');
        }
    });

    // Função para iniciar o Pixelmon (substitua conforme necessário)
    function iniciarPixelmon(diretorioLauncher) {
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

    // Função para limpar campos do formulário de registro
    function limparCamposRegistro() {
        document.querySelector('.Username').value = '';
        document.querySelector('.Mail').value = '';
        document.querySelector('.Password').value = '';
    }

    // Função para exibir mensagens (substitua conforme necessário)
    function mostrarMensagem(tipo, mensagem) {
        const registroMessage = document.getElementById('registro-message');
        registroMessage.innerHTML = '';

        const mensagemElemento = document.createElement('div');
        mensagemElemento.classList.add(tipo);
        mensagemElemento.textContent = mensagem;

        registroMessage.appendChild(mensagemElemento);
    }

    // Lógica para iniciar o processo de login da Microsoft
    document.querySelector('.login-type-btn').addEventListener('click', async () => {
        try {
            const result = await msalClient.loginPopup();

            if (result.token) {
                localStorage.setItem('microsoftAuthToken', result.token);
                await autenticarMicrosoft(localStorage.getItem('microsoftAuthToken'));
            }
        } catch (error) {
            console.error('Erro ao iniciar o login da Microsoft:', error.message);
        }
    });

    // Lógica para verificar o token da Microsoft após o login
    const microsoftAuthToken = localStorage.getItem('microsoftAuthToken');

    if (microsoftAuthToken) {
        // Autenticar a conta Microsoft usando o token
        autenticarMicrosoft(microsoftAuthToken);
    }
});
