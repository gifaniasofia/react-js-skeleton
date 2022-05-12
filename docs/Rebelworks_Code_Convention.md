
RW's Convention and Code Style

ESLint

Every team of developers follow different conventions. Not having a proper convention creates dependencies on individuals and makes the project difficult to understand by a newcomer. Tight dependencies in a software development project can affect the velocity of the team.

ESLint allows us to maintain code quality and enforce code conventions. ESLint is a static code evaluator. It means that ESLint will not actually execute the code but will instead read through the source code to see if all the preconfigured code conventions are followed by the developers.

Installation and Setup

It's pretty easy to add ESLint to a project.


    npm i --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react


- `parser: '@typescript-eslint/parser'` this allows ESLint to understand TypeScript syntax. This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
- `plugins: [@typescript-eslint/eslint-plugin, eslint-plugin-react]` tells ESLint to load the plugin package you installed. We recommend using `eslint-plugin-react`, if you are using React and want React semantics. As for `@typescript-eslint/eslint-plugin`, it is needed to support linting TypeScript syntax.

In addition to the plugin, we are going to add some more rules which are personalised to our team's coding styles and convention. These rules are added to a configuration file called `.eslintrc.js`. It should be placed in the root directory of the project.

The `.eslintrc.js` should look like this:


    // 'off' or 0 - turn the rule off
    // 'warn' or 1 - turn the rule on as a warning (doesn’ t affect exit code)
    // 'error' or 1 - turn the rule on as an error (exit code is 1 when triggered)

    module.exports = {
      root: true,
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/self-closing-comp': 1,
        'react/prop-types': 0,
        'react/jsx-no-bind': 1,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-props-no-multi-spaces': 1,
        'react/jsx-curly-spacing': [
          1, {
            'when': 'always',
            'children': true
          }
        ],
        'object-curly-spacing': [1, 'always'],
        'jsx-quotes': [1, 'prefer-single'],
        'quotes': [1, 'single'],
        'eqeqeq': 1,
        'no-unused-vars': 1,
        'no-undef': 1,
        'no-unneeded-ternary': 1,
        'no-extra-bind': 2,
        'no-console': 1,
        'no-trailing-spaces': [1, { 'skipBlankLines': true }],
        'comma-spacing': [
          1, {
            'before': false,
            'after': true
          }
        ],
        'semi-style': [2, 'last'],
        'semi': 2,
        'semi-spacing': 1,
        'keyword-spacing': 1,
        'key-spacing': 1,
        'array-bracket-spacing': 1,
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': 1,
        'block-spacing': 1,
        'func-call-spacing': 1,
        'brace-style': [
          1,
          '1tbs',
          { 'allowSingleLine': true }
        ],
        'space-before-blocks': 1,
        'space-before-function-paren': [1, 'never'],
        'space-in-parens': 1,
        'space-infix-ops': 1,
        'space-unary-ops': [
          1, {
            'words': true,
            'nonwords': false,
            'overrides': { '+': true }
          }
        ],
        'spaced-comment': 1,
        'rest-spread-spacing': 2,
        'prettier/prettier': 0,
        'no-multiple-empty-lines': [
          1, {
            'max': 1,
            'maxEOF': 0
          }
        ],
        'newline-per-chained-call': 1,
        'function-paren-newline': [1, { 'minItems': 3 }],
        'array-bracket-newline': [
          1, {
            'multiline': true,
            'minItems': 3
          }
        ],
        'array-element-newline': [1, { 'minItems': 3 }],
        'object-property-newline': 1,
        'object-curly-newline': [
          1, {
            'ObjectExpression': {
              'multiline': true,
              'minProperties': 3,
            },
            'ObjectPattern': {
              'multiline': true,
              'minProperties': 3,
            },
            'ImportDeclaration': {
              'multiline': true,
              'minProperties': 3,
            },
            'ExportDeclaration': {
              'multiline': true,
              'minProperties': 3
            }
          }
        ],
      }
    };

The important area in the above configuration is the rules section. This section controls all the code conventions followed in the project.


> Note: the complete list of all the available rules are listed here: http://eslint.org/docs/rules/

Run ESLint

Add an `lint` and `lint:fix` scripts in your `package.json` :


    {
      ...
      "scripts": {
        ...
        "lint": "eslint src/",
        "lint:fix": "eslint src/ --fix"
      },
      ...
    }

You can simply run:


    npm run lint
    npm run lint:fix

`npm run lint` will run the ESLint and show a list of errors that need to be fixed. `npm run lint:fix` will run ESLint and attempt to correct the errors it is able to fix automatically.


General Convention & Code Style


1. Use the DRY principle (Don't Repeat Yourself).
2. Consistency. Usually cover: file organisation, indentation, white spacing, naming conventions, etc.
3. Modularity. Split your code into multiple smaller functions, each with a single responsibility. Create multiple files instead of writing a big file.
4. Use a linter to make your code easier to review. This helps you to write clean and consistent code.
5. Review your code before creating a pull request. This helps you to avoid unwanted bugs or errors.
6. Name your files according to the job that they perform. Do not use random name.
7. Use JS ES6. JavaScript ES6 introduces us to many great features like arrow functions, template strings, class destruction, modules… and more.
8. Remove `console.log()` and `console.warn``()` after every debugging or after it’s no longer used.
9. Avoid installing 3rd party package if we have the ability to create our own library/code.

Component Structure

React doesn’t have opinions on how you put files into folders. In our case, we are using Grouping by Features as our approach to locate CSS, JS, and tests together inside folders grouped by feature or route.

![](https://paper-attachments.dropbox.com/s_E9836C9C474CDAEC74202B11454242CD411405F6C93D1A596340B0110E051297_1609232921589_Screen+Shot+2020-12-29+at+16.08.02.png)


We use `index.js` file in the root of each folder to re-export a subset of files.

React.js


1. Use Hooks instead of class components. Hooks let you use state and other React features without writing a class.
2. React UI component’s names should be PascalCase.
3. All other files, such as helpers, variables, function names, etc, should be camelCase (non-component files).
4. Destructuring your props is a good way to make your code maintainable and much easier to read.
5. Always self-close tags that have no children.
6. Pass props with no value for default true boolean value. Example: `<Text bold />`
7. Pass literal string as a props without braces if the string is static.
    # good
    <Text title='Welcome' />
    <Text title={condition ? 'Welcome' : 'Bye'} />

    # bad
    <Text title={'Welcome'} />


8. If you have three or more properties, put them on their own line.
    # good
    <GalleryImage
      imgSrc='./src/img/vangogh2.jpg'
      title='Starry Night'
      artist='Van Gogh'
      className='landscape'
      thumbnail='./src/img/thumb/vangogh2.gif'
      breakpoint={320}
    />

    # bad
    <GalleryImage imgSrc='./src/img/vangogh2.jpg' title='Starry Night' artist='Van Gogh' className='landscape' thumbnail='./src/img/thumb/vangogh2.gif' breakpoint={320} />

    # good
    <img src={thumbnail} alt={title} />

    # bad
    <img
      src={thumbnail}
      alt={title}
    />


9. When writing import use this order:
    - External dependencies (e.g. `import moment from` `'``moment.js``'`)
    - Internal dependencies (e.g. `import Style from './style.ts'`)

CSS


1. Avoid inline styling.
2. Use styled-components as a wrapper of your style.
3. Use kebab-case for css className.
4. You may use antd components and customize the style through overriding classNames if necessary.
5. Use global styling for fonts, colors, sizes, shadows, etc.

Typescript


1. Annotate arrays as `foos: Foo[]` instead of `foos: Array<Foo>`. It’s easier to read that way.
2. Use PascalCase for `type` and `interface`.
3. Use `type` when you might need a union or intersection and use `interface` when you want `extends` or `implements`.
4. Otherwise, use `type` for component-specific typing like component props and use `interface` for general typing like API’s definition.
5. Use `React.FC` type for the return type of functional component to prevent your function component returning different values.
    ```
    type WelcomeProps = {
      name: string;
    }

    const Welcome: React.FC<WelcomeProps> = ({ name }) => {
      return (
        <h1>Hello, { name }</h1>
      );
    }
    ```


.gitignore

`.gitignore` tells git which files (or patterns) it should ignore. It's used to avoid committing transient files from your working directory that aren't useful to other collaborators or shouldn’t be committed into the repository, such as temporary files, IDE configurations, and other config that changes depending on the developer’s machine or development environment.

Add these additional files to our `.gitignore`:

    # Custom
    .env*
    *env.js
    .eslintcache
    package-lock.json
    yarn.lock
    .vscode


Library
- Utility: JavaScript ES6, lodash, reselect, typesafe-actions
- Styling: Styled Components
- Asynchronous Requests: fetch
- Type Checking: PropTypes
- State Management: Local state and Redux (with Redux-Thunk or Redux-Saga)
- Routing: React Router Dom
- UI Components: antd (Ant Design)
- Time: moment.js
- Testing: Cypress
