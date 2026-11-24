# Pokémon React: Terceira Geração - Hoenn

Uma Pokédex dedicada aos Pokémons da 3ª Região (Hoenn), desenvolvida com React e Vite, consumindo dados em tempo real da **PokéAPI** através do **Axios**.

---

## Sobre o Projeto

Este projeto foi criado para praticar o consumo de APIs REST em aplicações React. A interface exibe cards individuais para os Pokémon de Hoenn contendo:
- Número na Pokédex (ex: `#252`)
- Tipo principal com badge estilizada (ex: `GRASS`)
- Imagem oficial do Pokémon
- Nome
- Altura (em metros) e Peso (em quilogramas)

---

## Tecnologias Utilizadas

- **[React](https://react.dev/)** – Biblioteca para construção da interface de usuário
- **[Vite](https://vitejs.dev/)** – Ferramenta de build e servidor de desenvolvimento rápido
- **[Axios](https://axios-http.com/)** – Cliente HTTP baseado em Promises para realizar as requisições à API
- **[PokéAPI](https://pokeapi.co/)** – API pública utilizada como fonte de dados dos Pokémon
- **CSS3** – Estilização modularizada por componentes

---

## Estrutura de Pastas

```text
Consumo-de-API-com-Axios/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── PokemonCard/
│   │       ├── index.jsx
│   │       └── styles.css
│   ├── services/
│   │   └── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/VitoriaVVZ/Consumo-de-API-com-Axios.git](https://github.com/VitoriaVVZ/Consumo-de-API-com-Axios.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Consumo-de-API-com-Axios
   ```

3. **Instale as dependências:**
   ```bash
   npm install

