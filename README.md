# Summer Styles React App

Este é um projeto simples de uma página web desenvolvida com React e Tailwind CSS. A página exibe um header com um menu de navegação e uma seção principal com uma mensagem de boas-vindas e algumas imagens de produtos.

![alt text](/public/demo.png)

## Funcionalidades

- **Header**: Contém um logo e um menu de navegação com opções como `Women`, `Men`, `Company` e `Stores`.
  - Quando o usuário passa o mouse sobre a opção `Women`, um dropdown aparece com sub-opções como `Shirts`, `Coats`, `Pants`, `Underwear`, `Socks` e `More...`.
- **Main Section**: Apresenta uma mensagem de boas-vindas sobre a coleção de verão e uma grade de imagens de produtos.

## Estrutura do Projeto

```plaintext
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── OptionLeft.jsx
│   │   ├── Image.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── public
│   ├── logo.svg
│   ├── money.svg
│   ├── search.svg
│   ├── shopping.svg
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```
## Como Executar
Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos
Node.js instalado na máquina
npm (gerenciador de pacotes do Node.js) ou yarn
### Instalação
1. Clone o repositório:
```
git clone https://github.com/devHyrum/Summer-Styles-React-App.git
cd summer-styles
```
2. Instale as dependências:
```
npm install
```
### Execução
Para iniciar o servidor de desenvolvimento:
```
npm start
```
O aplicativo estará disponível em http://localhost:3000.

## Tecnologias Utilizadas
- React
- Tailwind CSS
- Vite (para a configuração do projeto React)
## Contribuição
Se desejar contribuir com este projeto, siga as instruções abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature)
3. Commit suas alterações (git commit -m 'Adiciona nova feature')
4. Faça o push para a branch (git push origin feature/nova-feature)
5. Abra um Pull Request