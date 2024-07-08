# Pixelmon World Launcher

**Visão Geral**
O Pixelmon World Launcher é uma aplicação de desktop baseada em Electron, projetada para a comunidade de jogos Pixelmon World. Ele serve como um portal para os usuários acessarem o jogo Pixelmon, fornecendo funcionalidades de autenticação, criação de conta, login, e integração com redes sociais.

## Sumário
- [Recursos](#recursos)
- [Como Começar](#como-comecar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Configuração](#configuração)
- [Desenvolvimento](#desenvolvimento)
- [Testes](#testes)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Recursos

### 1. Página Inicial
- A página inicial recebe os usuários com um plano de fundo visualmente atraente e um botão "Iniciar Jogo" proeminente.
- Ícones de redes sociais permitem que os usuários se conectem à comunidade em várias plataformas.
- Opções para configurações e login/logout são facilmente acessíveis.

![Pagina Inicial](https://github.com/lukaslimna1/PXWLauncher/blob/main/Prints/PXW-Launcher%20-%20Pagina%20inicial.png)


### 2. Página de Login
- Os usuários podem fazer login usando suas contas da Microsoft ou do Pixelmon World.
- A opção "Esqueci a senha" fornece um link para recuperar a senha.
- Design responsivo para várias tamanhos de tela.

![Página de Login](https://github.com/lukaslimna1/PXWLauncher/blob/main/Prints/PXW-Launcher%20-%20Tela%20Login.png)

### 3. Página de Registro
- Os usuários podem criar uma nova conta no Pixelmon World com um nome de usuário, e-mail e senha.
- A validação do formulário garante que os campos obrigatórios sejam preenchidos corretamente.
- Design responsivo para uma experiência de usuário perfeita.

![Página de Cadastro](https://github.com/lukaslimna1/PXWLauncher/blob/main/Prints/PXW-Launcher%20-%20Tela%20Cadastro.png)

### 4. Autenticação Microsoft
- Integração com a Autenticação Microsoft para um processo de login seguro.

### 5. Integração com Electron
- Electron é usado para criar uma aplicação de desktop independente para o Pixelmon World Launcher.
- Compatibilidade multiplataforma garante que usuários no Windows, macOS e Linux possam acessar o lançador.

### 6. Inicialização do Launcher
- O launcher é iniciado com uma janela exibindo a mensagem de boas-vindas do Pixelmon World.
- A janela inclui um botão "Iniciar Jogo", que aciona o processo de inicialização do jogo.

## Como Começar
**Pré-requisitos**
- Node.js instalado em sua máquina.
- Git instalado em sua máquina.

**Instalação**
Clone o repositório:
```bash
git clone https://github.com/lukaslimna1/PXWLauncher 
```
## Estrutura de Pastas

**O projeto está organizado da seguinte forma:**

- **assets:** Contém recursos, como imagens e arquivos de fontes.
    - **Imagens:** Armazena imagens relacionadas ao projeto
- **script.js:** Contém o código JavaScript principal para o funcionamento do launcher.
- **styles.css:** Folha de estilo principal para o design do launcher.
- **index.html:** Arquivo HTML principal para a página inicial do launcher.
- **login.html:** Arquivo HTML para a página de login.
- **registro.html:** Arquivo HTML para a página de registro.
- **segundo_login.html:** Arquivo HTML para uma página adicional de login.
- **test: Diretório** contendo testes automatizados para o projeto.

## Configuração

O projeto utiliza várias dependências Node.js, que podem ser instaladas usando o comando:

```bash
npm install
```
- Isso abrirá o Pixelmon World Launcher em uma janela do navegador.

## Desenvolvimento

**Para iniciar o aplicativo em modo de desenvolvimento, utilize o seguinte comando:**

```bash
npm start
```
- Isso abrirá o Pixelmon World Launcher em uma janela do navegador

## Testes

**O projeto inclui testes automatizados para verificar o funcionamento correto. Execute os testes usando:**

```bash
npm test
```
(Infelizmente não esta funcionando !)

## Contribuições

Sinta-se à vontade para contribuir para o projeto. Antes de fazer uma contribuição, por favor, leia as diretrizes de contribuição.

## Licença

Este projeto está licenciado sob a 
```bash 
Licença MIT- https://opensource.org/license/mit/
```
