# API Simplificada 2.0

API REST para gerenciamento de usuários, projetos e tarefas, utilizando Node.js, Express, Sequelize ORM, MySQL, autenticação com JWT e hash de senha com bcrypt.

## Pré-requisitos

- Node.js instalado
- MySQL rodando (pode usar XAMPP)
- npm

## Configuração

1. **Clone o projeto e acesse a pasta**

2. **Crie o banco de dados no MySQL:**
   ```sql
   CREATE DATABASE api_simplificada_2zero;
   ```

3. **Configure o arquivo `.env` na raiz do projeto:**
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=api_simplificada_2zero
   JWT_SECRET=segredo123
   ```

4. **Instale as dependências:**
   ```
   npm install
   ```

5. **Inicie o servidor:**
   ```
   npm start
   ```
   O servidor rodará na porta 3000.
