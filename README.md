# Number 2 Words

Typescript package which given any number between 1 and 1,000 inclusive, returns the grammatically correct English phrase for this number.

## Development

Run the below command at the package root to install all dependencies and generate the `node_modules` directory:

### `yarn install`

Run the below command at the package root to generate the `dist` folder with the transpiled javascript and corresponding types.
You can automatically see your changes reflect in your project of choice assuming linking is complete, as we are using a watcher in package.json:

### `yarn build`

## Test

We are using mocha and chai along with nyc to create unit tests and display the code coverage each time, to run the tests run the below command:

### `yarn test`

## Installation as package

*This project has not been published to an npm registry and therefore can only be used locally for now:*

Run the below command at the package root to install all dependencies and generate the `node_modules` directory:

### `yarn install`

Run the below command at the package root to generate the `dist` folder with the transpiled javascript and corresponding types.
You can automatically see your changes reflect in your project of choice assuming linking is complete, as we are using a watcher in package.json:

### `yarn build`

Run the below command at the package root should you wish to link this package to a local repository:

### `yarn link`

Run the below command at the root of the project that you wish to use this package in to complete the linking:

### `yarn link number2words`

## Example usage in other projects

```
import toWords from "number2words";

...

toWords(2)
```

## Features

1. Works for numbers 1 to 1000.
2. Works for up to 3 decimals, e.g. 9.999 - 9.9998 will output the same result as 9.999.

## TODO

1. Add a linter should this package scale and more code is written.
2. Add git hooks when pushing code to version control.
3. Make it a private npm package and thus available for everyone in the organization to use.