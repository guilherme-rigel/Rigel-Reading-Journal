# Reading-Journal - Projeto Fase 1

Este é o projeto da Fase 1 da disciplina de Desenvolvimento de Sistemas Frontend. Trata-se de um sistema de diário de leitura, desenvolvido com React, onde é possível cadastrar, listar, editar, buscar e excluir livros de forma estática.

## 👨‍💻 Como rodar o projeto

1. *Clone o repositório ou extraia o .zip:*

git clone https://github.com/guilherme-rige/Rigel-Reading-Journal

Ou extraia o arquivo `.zip` enviado.

2. *Instale as dependências:*

No terminal, dentro da pasta do projeto:

npm install

3. *Execute o projeto:*

npm start

O projeto abrirá no seu navegador padrão

---

## 📁 Estrutura do Projeto

Rigel-projeto-fase-1/
├── src/
│ ├── components/
│ │ ├── BookForm/
│ │ │ └── BookForm.jsx
│ │ ├── BookList/
│ │ │ └── BookList.jsx
│ │ └── NavBar/
│ │ └── NavBar.jsx
│ ├── App.js
│ ├── App.module.css
│ ├── index.js
│ └── index.css
├── .env
├── package.json
└── README.md
---

## 📦 Componentes

### `NavBar`

Responsável pela navegação entre as páginas da aplicação. Contém links para as rotas: Home, Sobre, Cadastro e Listagem de livros.

---

### `BookForm`

Componente responsável pelo formulário de cadastro de livros. Campos obrigatórios:

- Título
- Autor(a)
- Gênero
- Data de leitura

Valida os campos e exibe mensagens de erro se algum campo estiver vazio.

---

### `BookList`

Componente responsável por listar todos os livros cadastrados. Permite:

- Buscar livros pelo título
- Editar livros existentes
- Excluir livros da lista

As ações de edição e exclusão são feitas através de botões ao lado de cada item.

---

## 📝 Telas desenvolvidas

- *Página Inicial (Home):* mensagem de boas-vindas.
- *Página Sobre:* descrição simples da aplicação.
- *Página de Cadastro:* formulário de cadastro de livros.
- *Página de Listagem:* exibe todos os livros cadastrados com possibilidade de busca, edição e exclusão.

---

## 💡 Decisões de Desenvolvimento

- Utilização de `useState` e `useEffect` para gerenciar o estado dos livros;
- Navegação com React Router (`react-router-dom`);
- Divisão clara de componentes para melhor manutenção;
- Validação simples feita diretamente no formulário (`BookForm`).

---

## ❗ Observações

A persistência dos dados não foi implementada nesta fase. Os dados são armazenados apenas na memória (estado local da aplicação).

---
