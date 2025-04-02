

# **Projeto 2 Avanti**

### **Descrição**
Este projeto é uma aplicação React que utiliza a API do GitHub para buscar perfis de usuários. Ele foi desenvolvido como parte de um desafio técnico e inclui funcionalidades como busca de usuários, exibição de informações do perfil e mensagens de erro personalizadas. O design é responsivo e utiliza o TailwindCSS para estilização.
---
### **Importante:** O código não está totalmente responsivo e foi criado na resolução 1440x900.
---

## **Tecnologias Utilizadas**
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.
- **Vite**: Ferramenta de build para desenvolvimento rápido e eficiente.
- **PostCSS**: Processador CSS necessário para o TailwindCSS funcionar.
- **ESLint**: Ferramenta para padronização e análise de código.
- **API do GitHub**: Para buscar informações de usuários.
- **Google Fonts**: Fonte "Nunito Sans" para estilização tipográfica.

---

## **Funcionalidades**
1. **Busca de Usuários:**
   - Insira o nome de um usuário do GitHub na barra de busca.
   - Exibe informações como nome, avatar e biografia do usuário.

2. **Mensagens de Erro:**
   - Mostra uma mensagem personalizada caso o usuário não seja encontrado.

4. **Estilização Personalizada:**
   - Utiliza TailwindCSS para criar um design moderno e consistente.

---

## **Como Rodar o Projeto**

### **Pré-requisitos**
- Node.js instalado (versão 16 ou superior).
- Gerenciador de pacotes `npm`.

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/WedsonTavares/projeto_2.git
   cd projeto_2
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o projeto no navegador:
   - URL padrão: [http://localhost:5173](http://localhost:5173)

---

## **Configuração do TailwindCSS**
O TailwindCSS foi configurado para funcionar com o PostCSS. Certifique-se de que o arquivo `postcss.config.js` está configurado corretamente:

### **Arquivo `postcss.config.js`:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### **Arquivo tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## **Estrutura do Projeto**
```plaintext
projeto_2/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Componente de barra de busca
│   │   ├── UserProfile.jsx     # Componente de exibição do perfil do usuário
│   ├── pages/
│   │   ├── Home.jsx            # Página principal do projeto
│   ├── styles/
│   │   ├── global.css          # Estilos globais do projeto
│   ├── main.jsx                # Arquivo principal do React
├── index.html                  # Arquivo HTML principal
├── package.json                # Configurações do projeto e dependências
├── tailwind.config.js          # Configuração do TailwindCSS
├── postcss.config.js           # Configuração do PostCSS
├── eslint.config.js            # Configuração do ESLint
```

---

## **Componentes**

### **1. SearchBar**
- **Descrição:** Componente responsável pela barra de busca.
- **Localização:** SearchBar.jsx
- **Props:**
  - `onSearch`: Função para buscar o usuário.
  - `error`: Booleano que indica se houve erro na busca.
- **Destaques:**
  - Renderiza um campo de entrada e um botão de busca.
  - Exibe uma mensagem de erro caso o usuário não seja encontrado.

### **2. UserProfile**
- **Descrição:** Componente responsável por exibir o perfil do usuário.
- **Localização:** UserProfile.jsx
- **Props:**
  - `usuario`: Objeto com os dados do usuário.
  - `onSearch`: Função para buscar o usuário.
  - `error`: Booleano que indica se houve erro na busca.
- **Destaques:**
  - Renderiza o avatar, nome e biografia do usuário.
  - Exibe uma mensagem de erro personalizada caso o usuário não seja encontrado.

### **3. Home**
- **Descrição:** Página principal do projeto.
- **Localização:** Home.jsx
- **Destaques:**
  - Integra os componentes `SearchBar` e `UserProfile`.
  - Faz chamadas à API do GitHub para buscar informações do usuário.

---

## **Configuração do ESLint**
O ESLint foi configurado para garantir boas práticas de código e ignorar o arquivo `global.css`. A configuração está localizada no arquivo eslint.config.js.


### **Regras principais:**
- Ignora o diretório `dist` e o arquivo global.css.
- Configurações específicas para React e React Hooks.
- Regras para evitar variáveis não utilizadas.

---

## **API Utilizada**
- **GitHub API**:
  - Endpoint: `https://api.github.com/users/{username}`
  - **Exemplo de resposta:**
    ```json
    {
      "login": "octocat",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "name": "The Octocat",
      "bio": "GitHub mascot",
      ...
    }
    ```
  - Documentação: [GitHub REST API](https://docs.github.com/en/rest)

---

## **Contribuição**
1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie as alterações:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.


---

Se precisar de mais ajustes ou algo adicional, é só avisar! 😊