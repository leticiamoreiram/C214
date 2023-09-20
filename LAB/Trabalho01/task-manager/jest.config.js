// jest.config.js
module.exports = {
    verbose: true, // Exibe a saída detalhada dos testes no console
    testEnvironment: 'jsdom', // Define o ambiente de teste para ambiente de navegador (DOM)
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mapeia arquivos de estilo para um módulo vazio
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Configuração para usar as funções do Jest DOM
  };
  