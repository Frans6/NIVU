# Desafio NIVU

Este projeto é uma ferramenta de construção de consultas SQL interativas. Ele permite que os usuários selecionem tabelas, colunas e apliquem filtros para gerar consultas SQL personalizadas.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Dependências](#dependências)

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/Frans6/NIVU.git
    cd NIVU
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

## Uso

Após iniciar o servidor de desenvolvimento, você pode acessar a aplicação em `http://localhost:3000`. A aplicação permite que você:

- Selecione tabelas e colunas da "base de dados".
- Aplique filtros e condições para refinar os resultados.
- Defina a ordenação dos resultados.
- Especifique um limite para o número de resultados retornados.
- Visualize e copie a consulta SQL gerada.


### Descrição dos Arquivos e Pastas

- **src/**: Contém o código fonte da aplicação.
  - **components/**: Componentes reutilizáveis da aplicação.
    - [`OrderBySelector.js`](src/components/OrderBySelector.js): Componente para selecionar a ordenação dos resultados.
    - [`TableSelector.js`](src/components/TableSelector.js): Componente para selecionar tabelas e colunas.
  - **config/**: Configurações da aplicação.
    - [`DatabasesSchema.js`](src/config/DatabasesSchema.js): Esquema das tabelas e colunas do banco de dados.
  - **css/**: Arquivos de estilo CSS.
    - [`About.css`](src/css/About.css): Estilos para a página "Sobre".
    - [`App.css`](src/css/App.css): Estilos globais da aplicação.
    - [`Home.css`](src/css/Home.css): Estilos para a página "Home".
    - [`Query.css`](src/css/Query.css): Estilos para o construtor de consultas.
  - **pages/**: Páginas da aplicação.
    - [`About.js`](src/pages/About.js): Página "Sobre".
    - [`Home.js`](src/pages/Home.js): Página "Home".
  - **utils/**: Utilitários da aplicação.
    - [`CustomStyles.js`](src/utils/CustomStyles.js): Estilos customizados para componentes.
    - [`QueryUtils.js`](src/utils/QueryUtils.js): Funções utilitárias para manipulação de consultas.
  - [`App.js`](src/App.js): Componente principal da aplicação.
  - [`index.js`](src/index.js): Ponto de entrada da aplicação.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o servidor de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

### `npm run build`

Cria a aplicação para produção na pasta `build`.\
A aplicação é empacotada e otimizada para melhor performance.

### `npm run eject`

Remove a ferramenta de build e copia todas as configurações e dependências para o projeto. **Esta ação é irreversível!**

## Dependências

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/react-fontawesome`
- `@react-awesome-query-builder/core`
- `@react-awesome-query-builder/material`
- `@react-awesome-query-builder/ui`
- `ajv`
- `antd`
- `date-fns`
- `react`
- `react-awesome-query-builder`
- `react-dom`
- `react-icons`
- `react-router-dom`
- `react-scripts`
- `web-vitals`