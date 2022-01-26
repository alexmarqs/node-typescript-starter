# Simple Node Typescript Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A node.js starter project using TypeScript.

## Technologies

- [Typescript](https://www.typescriptlang.org/) (selected ES2020 as target because I assume Node.js version 14 or higher is being used, please change the configuration for whatever version you want to use)
- [Node.js](https://nodejs.org/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev) for live reloading during development
- [dotenv](https://github.com/motdotla/dotenv) to load environment variables only for development ([preload approach](https://github.com/motdotla/dotenv/blob/master/README.md#preload) is being used)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Husky](https://typicode.github.io/husky/#/)
- [Yarn](https://yarnpkg.com/)
- [jest](https://jestjs.io/) for testing + ESLint Plugin + Coverage

## Basic scripts

### `yarn test`

Runs tests

### `yarn test:dev`

Runs tests in development mode which will include coverage and live reloading

### `yarn build`

Builds the project for production mode

### `yarn dev`

Runs the project in development mode (live reloading)

### `yarn start`

Starts the project in production mode (this expects that all the environment variables are set in the runtime environment)

### `yarn lint`

Runs the linter

### `yarn lint:fix`

Runs the linter and fixes the issues

### `yarn format`

Formats the code

(other scripts are available in the `scripts` section of the package.json)

## License

MIT License © [alexmarqs](https://github.com/alexmarqs)
