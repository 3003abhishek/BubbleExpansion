# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...# Vite-React Circular Bubble Animation

This project is a Vite-powered React application that demonstrates an interactive circular bubble animation. When clicking the main bubble, surrounding bubbles animate outwards in a circular pattern, and they can animate back in when the main bubble is clicked again. Additionally, the surrounding bubbles have nested bubbles that animate outwards and inwards in a similar fashion.

## Features

- Main bubble triggers surrounding bubbles to animate outwards in a circular pattern.
- Surrounding bubbles animate back inwards when the main bubble is clicked again.
- Each surrounding bubble has nested bubbles that animate outwards and inwards.

## Demo

Add a link to your live demo if you have deployed this project.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/3003abhishek/BubbleExpansion.git
    cd BubbleExpansion
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
vite-react-bubble-animation/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Button.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
└── vite.config.js

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
